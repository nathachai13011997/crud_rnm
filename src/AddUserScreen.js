import {StyleSheet, ScrollView} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Button, Input, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

// import { ThemeProvider, Button, createTheme } from '@rneui/themed';

export default function AddUserScreen(props) {
  const [dataInput, setDataInput] = useState({
    name: '',
    email: '',
  });

  const AddUser = useCallback(() => {
    // https://jsonplaceholder.typicode.com/users
    // https://jsonplaceholder.typicode.com/posts
    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        name: dataInput.name,
        email: dataInput.email,
      })
      .then(response => {
        console.log('Add response: ', response.data);
        // console.log("Date", Date());
        alert('Success');
        setDataInput({
          name: '',
          email: '',
        });
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }, [dataInput]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: 'https://ionicframework.com/docs/icons/logo-react-icon.png',
        }}
        style={{
          width: 200,
          height: 200,
        }}
        containerStyle={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <Input
        leftIcon={<Icon name="user-o" size={20} color="#0085e6" />}
        placeholder={'Name'}
        onChangeText={val => {
          setDataInput({...dataInput, name: val});
        }}
        value={dataInput.name}
      />
      <Input
        leftIcon={<Icon name="envelope-o" size={20} color="#0085e6" />}
        placeholder={'Email'}
        onChangeText={val => {
          setDataInput({...dataInput, email: val});
        }}
        value={dataInput.email}
      />
      <Button
        icon={<Icon name="check" size={15} color="white" />}
        title="  Add User"
        buttonStyle={{
          backgroundColor: 'green',
        }}
        onPress={() => AddUser()}
      />
      <Button
        icon={<Icon name="users" size={15} color="white" />}
        title="  Go to User List"
        containerStyle={{
          marginTop: 10,
        }}
        onPress={() => props.navigation.navigate('UserScreen')}
      />
      {/* <Button
        icon={<Icon name="users" size={15} color="white" />}
        title="  Go to User Detail"
        containerStyle={{
          marginTop: 10,
        }}
        onPress={() => props.navigation.navigate('UserDetailScreen')}
      /> */}
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
