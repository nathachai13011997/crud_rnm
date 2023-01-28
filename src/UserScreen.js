import {ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ListItem, Badge} from 'react-native-elements';
import axios from 'axios';

export default function UserScreen(props) {
  //  const data =  useMemo(() => GetUser, [itemId])
  //  console.log('data: ', data);

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    GetUser();
  }, []);

  // http://localhost:5000/api/users
  // http://10.0.0.33:5000/api/users
  // https://jsonplaceholder.typicode.com/users
  const GetUser = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        console.log('response: ', response.data);
        setDataList(response.data);
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };
  return (
    <ScrollView>
      {dataList.map((item, i) => {
        return (
          <ListItem
            key={i}
            bottomDivider
            onPress={() => {
              props.navigation.navigate('UserDetailScreen', {
                userId: item.id,
                userName: item.name,
                userEmail: item.email,
              });
            }}>
            <Badge value={i + 1} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Title>{item.email}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
      })}
    </ScrollView>
  );
}
