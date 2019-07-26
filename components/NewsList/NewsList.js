import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import LoadingView from '../LoadingView';

import styles from './styles';

export default class NewsList extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    stories: PropTypes.array,
    navigation: PropTypes.object
  }

  static getDerivedStateFromProps (props, state) {
    const { stories = [] } = props;
    const topStories = stories.map(story => ({
      key: story.id.toString(),
      ...story,
    }));
    
    return {
      ...state,
      stories: topStories
    }
  }

  state = {
    stories: []
  }

  renderStoryTitle = item => {
    const { title, url, } = item;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.push('SecondScreen', { url, title })}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    )
  };

  render () {
    const { stories } = this.state;
    const { loading } = this.props;
    
    if (loading) {
      return (
        <LoadingView />
      )
    }

    return (
      <FlatList
        data={stories}
        renderItem={({ item }) => this.renderStoryTitle(item)}
      />
    )
  }
}
