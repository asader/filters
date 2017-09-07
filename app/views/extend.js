define(['durandal/system', 'durandal/app', '../search/filters', 'jquery', 'knockout', './recursiveParam'], (system, app, filters, $, ko, RecursiveParam) => {
  class Extend {
    constructor() {
      this.friends = new RecursiveParam('Друзья', Extend);
      this.followers = new RecursiveParam('Подписчики', Extend);
    }
    get fData() {
      return {
        friends: this.friends.fullData,
        followers: this.followers.fullData,
      };
    }
  }

  return Extend;
});
