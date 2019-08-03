import React from 'react';
import PropTypes from 'prop-types';
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

export default function NewsList ({ stories, loading, navigation }) {
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
    />
  )
};

NewsList.propTypes = {
  loading: PropTypes.bool,
  stories: PropTypes.array,
  navigation: PropTypes.object,
};
