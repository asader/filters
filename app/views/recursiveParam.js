define(['durandal/system', 'durandal/app', 'jquery', 'knockout'], (system, app, $, ko) => {
  class RecursiveParam {
    constructor(name, Extend, res) {
      this.res = res;
      this.name = name;
      this.Extend = Extend;
      this.param = ko.observable(null);
      this.limit = ko.observable();
      this.rec = ko.observable(null);
      this.arr = ko.observableArray([]);
      this.param.subscribe((val) => {
        if (val && val.name === 'extended') {
          this.rec(new this.Extend());
        } else {
          this.rec(null);
        }
      });
    }
    get fullData() {
      if (this.param() === undefined) {
        return null;
      } else if (this.param().name === 'extended') {
        return this.rec().fData;
      }

      return this.param().name;
    }
  }


  return RecursiveParam;
});
