import { createApp } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'

const httpLink = createHttpLink({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp(App)

app.provide(DefaultApolloClient, apolloClient)

app.mount('#app')
