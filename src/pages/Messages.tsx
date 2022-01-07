import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import useAuth from '../hooks/auth';
import messageApi from '../services/data/messages';
import api from '../services/api';
import { IIndexResponse, IMethodsResponse } from '../interfaces/messages.interface';

import CardView from '../components/CardView';
import {
  Container,
  HeaderTitle,
  InputId,
  SearchButton,
  SearchView
} from '../styles/MessagesStyle';
import { TabTypes } from '../types/AuthStack.types';

export default function Messages({ navigation }: TabTypes) {

  const [data, setData] = useState<IIndexResponse[] | IMethodsResponse[]>({} as IIndexResponse[]);

  const { token, setLoading } = useAuth();

  const [query, setQuery] = useState<string>("");

  function storeQuery(i: string) {
    setQuery(i);
  }

  async function handleShow() {
    const response = await messageApi.show(query);
    setData(response.data);
  }

  async function handleDelete(id: number) {
    await messageApi.delete(id);
    await loadCards();
  }

  const loadCards = useCallback(async () => {
    const response = await messageApi.index();
    setData(response.data);
  }, []);

  useEffect(() => {
    navigation.addListener("focus", () => loadCards());
  }, [data]);

  return (
    <Container>

      <HeaderTitle>Save-Natura</HeaderTitle>

      <SearchView>
        <InputId
          placeholder='Digite aqui...'
          onChangeText={(i) => { storeQuery(i) }}
        />

        <SearchButton onPress={handleShow}>
          <Icon name={"search"} size={30} color={'#FFF'} />
        </SearchButton>

      </SearchView>

      {data && (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CardView texto={item.texto} id={item.id} buttonDelete={handleDelete} />
          )
          }
          keyExtractor={item => String(item.id)}

        />)}

    </Container>
  );
}

