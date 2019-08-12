import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import LoadingView from '../LoadingView';

import styles from './styles';

function StoryTitle (item, navigation) {
  const { title, url, } = item;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push('SecondScreen', { url, title })}>
          <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
};

function NewsList ({ stories, loadMoreStories, loading, navigation }) {
  if (loading) {
    return (
      <LoadingView />
    )
  }

  return (
    <FlatList
      data={stories}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => StoryTitle(item, navigation)}
      onEndReached={loadMoreStories}
      onEndReachedThreshold={0.5}
    />
  )
};

NewsList.propTypes = {
  loading: PropTypes.bool,
  stories: PropTypes.array,
  navigation: PropTypes.object,
  loadMoreStories: PropTypes.func.isRequired
};

export default observer(NewsList)