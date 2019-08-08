import { observable, remove, } from 'mobx';
import remotedev from 'mobx-remotedev';

@remotedev
class AppStore {
  @observable version = '1.0'
}

export default new AppStore();
