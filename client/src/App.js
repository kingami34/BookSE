import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: (operation) => {
      const token = localStorage.getItem('id_token');

      operation.setContext({
          headers: {
              authorization: token ? `Bearer ${token}` : '',
          },
      });
    },
    uri: '/graphql',
  });


export default App;
