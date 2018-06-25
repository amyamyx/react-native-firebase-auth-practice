import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyD8LhyQFVI1E0QKf5aKizjyS-311euedIw',
      authDomain: 'auth-91fef.firebaseapp.com',
      databaseURL: 'https://auth-91fef.firebaseio.com',
      projectId: 'auth-91fef',
      storageBucket: 'auth-91fef.appspot.com',
      messagingSenderId: '1019160475011'
    });

    firebase.auth().onAuthStateChanged(user => { //an event listener that handles either sign in or out
      // this.setState({ loggedIn: !!user })
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;