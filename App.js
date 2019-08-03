import React from 'react'
import { Provider } from 'react-redux'
import { AppLoading } from 'expo';
import { store } from './config'
import { Asset } from 'expo-asset';

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
    <Provider store={store}>
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
