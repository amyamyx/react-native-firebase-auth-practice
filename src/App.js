import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyD8LhyQFVI1E0QKf5aKizjyS-311euedIw',
      authDomain: 'auth-91fef.firebaseapp.com',
      databaseURL: 'https://auth-91fef.firebaseio.com',
      projectId: 'auth-91fef',
      storageBucket: 'auth-91fef.appspot.com',
      messagingSenderId: '1019160475011'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;