import api from '../../api';
import { IIndexResponse, IStoreData, IStoreResponse, IMethodsResponse } from '../../../interfaces/messages.interface';

class MessageData {
  index() {
    return api.post<IIndexResponse>('/Messages');
  }

  store(data: IStoreData) {
    return api.post<IStoreResponse>('/Messages', data);
  }

  show(id: number) {
    return api.get<IMethodsResponse>(`/Messages/${id}`);
  }

  update(data: IStoreData, id: number) {
    return api.put<IMethodsResponse>(`/Messages/${id}`, data);
  }

  delete(id: number) {
    return api.delete<IMethodsResponse>(`/Messages/${id}`);
  }
}

export default new MessageData;