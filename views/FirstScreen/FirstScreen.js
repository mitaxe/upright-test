import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { observer, inject } from 'mobx-react';
import NewsList from '../../components/NewsList';

import styles from './styles';

function FirstScreen ({ stories, navigation }) {
  const { loading, topStories = [], getTopStories } = stories

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

export default inject(({ store }) => ({ stories: store.stories }))(observer(FirstScreen));
