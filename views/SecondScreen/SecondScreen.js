import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, WebView, TouchableOpacity, Text, Linking } from 'react-native';
import LoadingView from '../../components/LoadingView';

import styles from './styles.js'

export default class SecondScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', '')
    };
  };

  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    loading: true
  }

  handleLoadEnd = () => this.setState({ loading: false })

  render () {
    const { loading } = this.state
    const { navigation } = this.props;
    const url = navigation.getParam('url');

    return (
      <View style={styles.container}>
        {loading && <LoadingView style={styles.loaderContainer} />}
        <WebView
          originWhitelist={['*']}
          source={{ uri: url }}
          scalesPageToFit={false}
          onLoadEnd={this.handleLoadEnd}
        />
        <TouchableOpacity style={styles.floatingBtn} onPress={() => Linking.openURL(url)}>
          <Text>Inside</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
