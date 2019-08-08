import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { observer } from 'mobx-react';
import { useStoriesData } from '../../hooks';
import NewsList from '../../components/NewsList';

import styles from './styles';

function FirstScreen ({ navigation }) {
  const { loading, topStories = [], getTopStories } = useStoriesData()

  useEffect(() => {
    getTopStories();
  }, [])

  return (
    <View style={styles.container}>
      <Image
        style={styles.duck}
        source={require('../../assets/images/duck.png')}
      />
      <NewsList loading={loading} stories={topStories} navigation={navigation} />
    </View>
  )
}

FirstScreen.navigationOptions = {
  title: 'HackerNews'
}

FirstScreen.propTypes = {
  stories: PropTypes.shape({
    loading: PropTypes.bool,
    topStories: PropTypes.array
  }),
  navigation: PropTypes.object
}

export default observer(FirstScreen);
