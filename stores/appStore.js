import { observable, } from 'mobx';

class AppStore {
  @observable version = '1.0'
}

export default new AppStore();
