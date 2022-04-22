import {action, computed, makeAutoObservable, observable} from 'mobx';

class Simple {
  data = '';

  constructor() {
    makeAutoObservable(this, {
      data: observable,
      setData: action,
      getData: computed,
    });
  }

  setData = (data) => {
    this.data = data;
  }

  get getData() {
    return this.data;
  }
}

export const simpleStore = new Simple();
