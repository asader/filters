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

    class CartLine {
        constructor() {
            let self = this;
            this.gender = ko.observable();
            this.modal = ko.observable();

            this.country = ko.observable();
            this.city = ko.observable();
            this.region = ko.observable();
            this.school = ko.observable();
            this.univer = ko.observable();
            this.save = function () {
                let dataToSave = {
                    gender: self.gender(),
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
                            if (result[i][key] !== dataToSave[key].value){
                                result.splice(i,1);
                                i = i - 1;
                            }
                        }
                    }
                }
                console.log('result = ', result);
                console.log('city = ', self.city());

                return result;
            };

            this.country.subscribe(function () {
                self.city(undefined);
            });
        };


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

            cities.sort(nameSort);
            cities.sort(importantSort);
            return cities;
        };

    }

    class Filters{
        constructor(){
            this.friends = ko.observableArray();
            this.followers = ko.observableArray();
        }
    }




    return {
        Cart: new CartLine(),

        filters: filters
    };
});