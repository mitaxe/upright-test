import React from 'react'
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Provider } from 'mobx-react';
import * as stores from './stores'

import Navigation from './navigation';

export default function App () {
  const [ isLoadingComplete, setLoadingComplete ] = React.useState(false)

  handleLoadFinish = () => {
    setLoadingComplete(true)
  }
  
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadError}
        onFinish={handleLoadFinish}
      />
    );
  }

  return (
    <Provider store={stores}>
      <Navigation />
    </Provider>
  )
}

function handleLoadError () {
  // e.g Sentry
  console.warn(error);
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/splash.png'),
    ])
  ]);
}
