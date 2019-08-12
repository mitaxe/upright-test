import React, { useEffect, useRef } from 'react';
import { throttle as _throttle } from 'lodash';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { observer } from 'mobx-react';
import { useStoriesData } from '../../hooks';
import NewsList from '../../components/NewsList';

import styles from './styles';

function FirstScreen ({ navigation }) {
  const { loading, topStories = [], getTopStories, getSetOfStories } = useStoriesData()
  const throttledGetSetOfStories = useRef(_throttle((value) => getSetOfStories(value), 500))

  useEffect(() => {
    getTopStories();
  }, [])

  handleLoadMoreStories = () => {
    throttledGetSetOfStories.current(20);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.duck}
        source={require('../../assets/images/duck.png')}
      />
      <NewsList
        loading={loading}
        stories={topStories}
        loadMoreStories={handleLoadMoreStories}
        navigation={navigation}
        />
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
