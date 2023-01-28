import {StyleSheet, ScrollView} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default function UserDetailScreen(props) {
  const {userId, userName, userEmail} = props.route.params;
  const [data, setData] = useState({
    id: userId,
    name: userName,
    email: userEmail,
  });

  const UpdateData = useCallback(() => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        console.log('Update response: ', response.data);
        alert('Update Success');
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }, [userId]);

  const DeleteData = useCallback(() => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        console.log('Delete response: ', response);
        alert('Delete Success');
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }, [userId]);

  return (
    <ScrollView style={styles.container}>
      <Input
        placeholder={'Name'}
        onChangeText={val => {
          setData({...data, name: val});
        }}
        value={data.name}
      />
      <Input
        placeholder={'Email'}
        onChangeText={val => {
          setData({...data, name: val});
        }}
        value={data.email}
      />
      {/* <Input placeholder={'Mobile'} /> */}
      <Button
        title="  Update"
        icon={<Icon name="wrench" size={15} color="#fff" />}
        onPress={() => {
          UpdateData();
        }}
      />
      <Button
        title="  Delete"
        icon={<Icon name="trash" size={15} color="#fff" />}
        containerStyle={{
          marginTop: 10,
        }}
        buttonStyle={{
          backgroundColor: 'red',
        }}
        onPress={() => {
          DeleteData();
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  preloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
