import {action, computed, makeAutoObservable, observable} from 'mobx';

class Array {
  arr = [];

  constructor() {
    makeAutoObservable(this, {
      arr: observable,
      pushArr: action,
      getCount: computed,
      getArr: computed,
      deleteArr: action,
    });
  }

  pushArr = arr => {
    this.arr = [...this.arr, {...arr, id: Math.random()}];
  };

  deleteArr = idRemove => {
    this.arr = this.arr.filter(item => item.id !== idRemove);
  };

  get getCount() {
    return this.arr.length;
  }

  get getArr() {
    return this.arr;
  }
}

export const arrayStore = new Array();