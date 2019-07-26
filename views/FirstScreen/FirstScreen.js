import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { getTopStories } from '../../actions';
import NewsList from '../../components/NewsList';

import styles from './styles';

class FirstScreen extends Component {
  static navigationOptions = {
    title: 'HackerNews'
  };

  static propTypes = {
    stories: PropTypes.shape({
      loading: PropTypes.bool,
      topStories: PropTypes.array
    }),
    navigation: PropTypes.object
  }

  componentDidMount () {
    const { getTopStories } = this.props
    getTopStories()
  };

  render () {
    const { stories: { loading, topStories = [] }, navigation } = this.props
    
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
}

const mapStateToProps = state => ({
  stories: state.stories
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTopStories
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen)