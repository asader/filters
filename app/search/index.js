define(['durandal/system', 'durandal/app', './filters', './users', 'jquery', 'knockout', 'select2'], function (system, app, filters, users, $, ko, select2) {
    //ko binding handler
    ko.bindingHandlers.select2 = {
        init: function(element, valueAccessor) {

            var options = ko.toJS(valueAccessor()) || {};
            setTimeout(function() {
                $(element).select2(options);
            }, 0);
            //$(element).select2(valueAccessor());

            ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                $(element).select2('destroy');
            });
        },
        update: function(element) {
            $(element).trigger('change');
        }
    };

    class Filtering {
        constructor() {
            let self = this;

            this.name = ko.observable();
            this.gender = ko.observable();

            this.minAge = ko.observable();
            this.maxAge = ko.observable();

            this.minAgeArray = ko.observableArray(filters[3]);
            this.maxAgeArray = ko.observableArray(filters[3]);



            this.year = ko.observable();
            this.month = ko.observable();
            this.day = ko.observable();
            this.dayArray = ko.observableArray(filters[6]);


            this.country = ko.observable();
            this.city = ko.observable();
            this.region = ko.observable();
            this.school = ko.observable();
            this.univer = ko.observable();

            this.save = function () {
                let dataToSave = {
                    name: self.name(),
                    gender: self.gender(),

                    minAge: self.minAge(),
                    maxAge: self.maxAge(),

                    year: self.year(),
                    month: self.month(),
                    day: self.day(),

                    country: self.country(),
                    region: self.region(),
                    city: self.city(),
                    school: self.school(),
                    univer: self.univer()
                };
                let result = users.slice();
                for (let key in dataToSave){
                    if(dataToSave[key] !== undefined){
                        for (let i=0; i<result.length; i++){

                            if (key === "name") {
                                if (((result[i].firstName + ' ' + result[i].lastName).toLowerCase().indexOf(dataToSave[key].toLowerCase())) === -1) {
                                    result.splice(i, 1);
                                    i = i - 1;
                                }
                            }

                            else if(key === "minAge" || key === "maxAge"){
                                // Посчитать полные года
                                let today = new Date();
                                let age = today.getFullYear() - result[i].year;
                                if (today.getMonth() < result[i].month || (today.getMonth() === result[i].month && today.getDate() < result[i].day)) {
                                    age--;
                                }

                                if (key === "minAge"){
                                    if (dataToSave[key].name > age){
                                        result.splice(i, 1);
                                        i = i - 1;
                                    }
                                }

                                if (key === "maxAge"){
                                    if (dataToSave[key].name < age){
                                        result.splice(i, 1);
                                        i = i - 1;
                                    }
                                }
                            }

                            else if (result[i][key] !== dataToSave[key].value){
                                result.splice(i,1);
                                i = i - 1;
                            }
                        }
                    }
                }
                console.log('result = ', result);
                app.showMessage('Результат поиска: ' + JSON.stringify(result));
            };


            this.country.subscribe(function () {
                self.city(undefined);
            });

            this.minAge.subscribe(function () {
                let arr =[];
                for (let i=self.minAge().name-16;i<filters[3].length;i++){
                    arr.push(filters[3][i]);
                }
                self.maxAgeArray(arr);
            });

            this.maxAge.subscribe(function () {
                let arr =[];
                for (let i=0;i<self.maxAge().name-15;i++){
                    arr.push(filters[3][i]);
                }

                self.minAgeArray(arr);

            });


            this.month.subscribe(function () {
                if(self.year() === undefined){self.dayArray(filters[6].slice(0,daysInMonth(self.month().value, 2000)))}
                else self.dayArray(filters[6].slice(0,daysInMonth(self.month().value, self.year().value)))
            });

            this.year.subscribe(function () {
                if(self.month() === undefined){self.dayArray(filters[6].slice(0,daysInMonth(0, self.year().value)))}
                else self.dayArray(filters[6].slice(0,daysInMonth(self.month().value, self.year().value)))
            });

            function daysInMonth(month,year) {
                return new Date(year, month, 0).getDate();
            }
        }

        CheckDisplay(ages){
            for (let i=0; i<ages.length; i++){
                if (ages[i].name){
                    return ages[i];
                }
            }
        }

        CitySorted (cities) {
            function nameSort(a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            }

            function importantSort(a, b) {
                return b.important - a.important;
            }

            function removeDuplicates(cities) {
                for (let i = 0; i < cities.length - 1; i++) {
                    if ((cities[i + 1].name === cities[i].name) && (cities[i + 1].region === cities[i].region)) {
                        cities.splice(i,1);
                        i = i - 1;
                    }
                }
            }

            cities.sort(nameSort);
            removeDuplicates(cities);
            cities.sort(importantSort);

            return cities;
        };
    }
    
    return {
        Filter: new Filtering(),
        filters: filters
    };
});