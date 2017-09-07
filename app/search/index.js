define(['durandal/system', 'durandal/app', '../search/filters', './users', 'jquery', 'knockout', 'select2', '../views/extend'], (system, app, filters, users, $, ko, select2, Extend) => {
  // ko binding handler
  ko.bindingHandlers.select2 = {
    init(element, valueAccessor) {
      const options = ko.toJS(valueAccessor()) || {};
      setTimeout(() => {
        $(element).select2(options);
      }, 0);
      // $(element).select2(valueAccessor());

      ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
        $(element).select2('destroy');
      });
    },
    update(element) {
      $(element).trigger('change');
    },
  };


  class Filtering {
    constructor() {
      this.rec = ko.observable(new Extend());

      this.name = ko.observable();
      this.gender = ko.observable();

      this.minAge = ko.observable();
      this.maxAge = ko.observable();

      this.minAgeArray = ko.observableArray(filters[0].ages);
      this.maxAgeArray = ko.observableArray(filters[0].ages);


      this.year = ko.observable();
      this.month = ko.observable();
      this.day = ko.observable();
      this.dayArray = ko.observableArray(filters[0].days);


      this.country = ko.observable();
      this.country2 = ko.observable();
      this.city = ko.observable();
      this.region = ko.observable();
      this.school = ko.observable();
      this.univer = ko.observable();
      this.addEventListener();
    }

    getFilters() {
      return filters[0];
    }

    sortCities(cities) {
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

      function removeDuplicates(data) {
        for (let i = 0; i < data.length - 1; i += 1) {
          if ((data[i + 1].name === data[i].name) && (data[i + 1].region === data[i].region)) {
            data.splice(i, 1);
            i -= 1;
          }
        }
      }

      cities.sort(nameSort);
      removeDuplicates(cities);
      cities.sort(importantSort);

      return cities;
    }

    addEventListener() {
      this.country.subscribe(() => {
        this.city(undefined);
      });

      this.minAge.subscribe(() => {
        const arr = [];
        for (let i = this.minAge().value - 16; i < filters[0].ages.length; i += 1) {
          arr.push(filters[0].ages[i]);
        }
        this.maxAgeArray(arr);
      });

      this.maxAge.subscribe(() => {
        const arr = [];
        for (let i = 0; i < this.maxAge().value - 15; i += 1) {
          arr.push(filters[0].ages[i]);
        }

        this.minAgeArray(arr);
      });

      function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
      }

      this.month.subscribe(() => {
        if (this.year() === undefined) {
          this.dayArray(filters[0].days.slice(0, daysInMonth(this.month().value, 2000)));
        } else {
          this.dayArray(filters[0].days.slice(0, daysInMonth(this.month().value, this.year().value)));
        }
      });

      this.year.subscribe(() => {
        if (this.month() === undefined) {
          this.dayArray(filters[0].days.slice(0, daysInMonth(0, this.year().value)));
        } else {
          this.dayArray(filters[0].days.slice(0, daysInMonth(this.month().value, this.year().value)));
        }
      });

      this.country2.subscribe(() => {
        console.log(this.country2());
      });
    }


    consoleJSON() {
      const res = {};
      const data = {
        rec: this.rec(),
        name: this.name(),

        gender: this.gender(),

        minAge: this.minAge(),
        maxAge: this.maxAge(),

        year: this.year(),
        month: this.month(),
        day: this.day(),

        country: this.country(),
        city: this.city(),
        school: this.school(),
        univer: this.univer(),
      };
      const dataArr = Object.keys(data);

      for (const value in data) {
        if (data[value] !== undefined) {
          if (value === 'name') {
            res[value] = data[value];
          } else if (value === 'rec') {
            res[value] = data[value].fData;
          } else {
            res[value] = `${data[value].value}`;
          }
        }
      }
      console.log(res);
    }

    search() {
      const data = {
        name: this.name(),
        gender: this.gender(),

        minAge: this.minAge(),
        maxAge: this.maxAge(),

        year: this.year(),
        month: this.month(),
        day: this.day(),

        country: this.country(),
        region: this.region(),
        city: this.city(),
        school: this.school(),
        univer: this.univer(),
      };
      const result = [...users];

      for (const value in data) {
        if (data[value] !== undefined) {
          for (let i = 0; i < result.length; i += 1) {
            if (value === 'name') {
              if (((`${result[i].firstName} ${result[i].lastName}`).toLowerCase().indexOf(data[value].toLowerCase())) === -1) {
                result.splice(i, 1);
                i -= 1;
              }
            } else if (value === 'minAge' || value === 'maxAge') {
              // Посчитать полные года
              const today = new Date();
              let age = today.getFullYear() - result[i].year;
              if (
                today.getMonth() < result[i].month ||
                              (today.getMonth() === result[i].month &&
                              today.getDate() < result[i].day)
              ) {
                age -= 1;
              }

              if (value === 'minAge') {
                if (data[value].value > age) {
                  result.splice(i, 1);
                  i -= 1;
                }
              }

              if (value === 'maxAge') {
                if (data[value].value < age) {
                  result.splice(i, 1);
                  i -= 1;
                }
              }
            } else if (result[i][value] !== data[value].value) {
              result.splice(i, 1);
              i -= 1;
            }
          }
        }
      }
      console.log('result = ', result);
      app.showMessage(`Результат поиска: ${JSON.stringify(result)}`);
    }
  }

  return Filtering;
});
