import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, WebView, TouchableOpacity, Text, Linking } from 'react-native';
import LoadingView from '../../components/LoadingView';

import styles from './styles.js';

export default function SecondScreen ({ navigation }) {
  const [ loading, setLoading ] = useState(true);
  const url = navigation.getParam('url');

  handleLoadEnd = () => setLoading(false);

  return (
    <View style={styles.container}>
      {loading && <LoadingView style={styles.loaderContainer} />}
      <WebView
        originWhitelist={['*']}
        source={{ uri: url }}
        scalesPageToFit={false}
        onLoadEnd={handleLoadEnd}
      />
      <TouchableOpacity style={styles.floatingBtn} onPress={() => Linking.openURL(url)}>
        <Text>Inside</Text>
      </TouchableOpacity>
    </View>
  )
};

SecondScreen.propTypes = {
  navigation: PropTypes.object
};

SecondScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title', '')
  };
};
