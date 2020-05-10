import React, {Component} from 'react';
import {Provider} from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';


export default class App extends Component {
  UNSAFE_componentWillMount() {
    if (!firebase.apps.length) { 
    firebase.initializeApp({
      apiKey: 'AIzaSyBemadAQnNkd-z80R8vNXvPkzd2LGYeyOk',
      authDomain: 'ogrecikayit.firebaseapp.com',
      databaseURL: 'https://ogrecikayit.firebaseio.com',
      projectId: 'ogrecikayit',
      storageBucket: 'ogrecikayit.appspot.com',
      messagingSenderId: '937279067289',
      appId: '1:937279067289:web:89d408619ab5ddfd93d408',
      measurementId: 'G-HMSKCYMJYP'
    });
  }
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
       </Provider>
    );
  }
}

