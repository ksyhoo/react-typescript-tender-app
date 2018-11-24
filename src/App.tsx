import ApolloClient from 'apollo-boost'
import * as React from 'react'
import {ApolloProvider} from 'react-apollo'
import './App.css'

import TenderList from './components/TenderList'

const client = new ApolloClient({
  uri:'http://localhost:8081/graphql'
})

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client = {client}>
        <div className="App">
          <p>asd</p>
          <TenderList/>

        </div>
      </ApolloProvider>
    )
  }
}

export default App;
