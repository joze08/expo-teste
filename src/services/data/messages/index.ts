import api from '../../api';
import { IIndexResponse, IStoreData, IStoreResponse, IMethodsResponse } from '../../../interfaces/messages.interface';

class MessageData {
  index() {
    return api.get<IIndexResponse[]>('/Messages');
  }

  store(data: IStoreData) {
    return api.post<IStoreResponse>('/Messages', data);
  }

  show(id: string) {
    return api.get<IMethodsResponse[]>(`/Messages/${id}`);
  }

  delete(id: number) {
    return api.delete<IMethodsResponse>(`/Messages/${id}`);
  }
}

export default new MessageData();