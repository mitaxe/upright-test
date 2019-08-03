import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image } from 'react-native';
import { getTopStories } from '../../actions';
import NewsList from '../../components/NewsList';

import styles from './styles';

export default function FirstScreen (props) {
  const stories = useSelector(state => state.stories)
  const dispatch = useDispatch()

  const { loading, topStories = [] } = stories
  const { navigation } = props

  useEffect(() => {
    dispatch(getTopStories())
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
