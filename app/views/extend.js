define(['durandal/system', 'durandal/app', '../search/filters', 'jquery', 'knockout', 'select2'], function (system, app, filters, $, ko, select2) {
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


    class Filters{
        constructor(){
            let self = this;
            self.friends = ko.observable();
            this.friends_num = ko.observable();
            this.followers = ko.observable();
            this.arr = ko.observableArray([]);

            this.activeScreen = ko.observable();


        }
    }

    function createFilter(data, friends) {

        friends.subscribe(function () {
            console.log('Changes')
        });

    }




    return {
        Filter: new Filters(),
        newFilter: new Filters(),
        filters: filters
    };
});