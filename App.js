import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppLoading } from 'expo';
import { store } from './config'
import { Asset } from 'expo-asset';

import Navigation from './navigation';

export default class App extends Component  {
  constructor () {
    super();
    this.state = {
      isLoadingComplete: false
    };
  }

  handleLoadFinish = () => this.setState({ isLoadingComplete: true })

  handleLoadError = () => {
      // e.g Sentry
      console.warn(error);
  }

  render () {
    const { isLoadingComplete } = this.state
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={this.handleLoadError}
          onFinish={this.handleLoadFinish}
        />
      );
    }

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/splash.png'),
    ])
  ]);
}
