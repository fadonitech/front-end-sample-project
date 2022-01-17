import '../styles/main.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { createUploadLink } from "apollo-upload-client";
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({
  graphQLErrors,
}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`Graphql error ${message}`)
    })
  }
})

const link = createUploadLink({
  errorLink,
  uri: process.env.NEXT_PUBLIC_API_URL
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
