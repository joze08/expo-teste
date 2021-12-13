import api from '../../api';
import { IRegister, IAuthenticate, IResponseAuthenticate, IResponseRegister } from '../../../interfaces';

class UserData {
  register(data: IRegister) {
    return api.post<IResponseRegister>('/register', data);
  }
  authenticate(data: IAuthenticate) {
    return api.post<IResponseAuthenticate>('/authenticate', data);
  }
}

export default new UserData;