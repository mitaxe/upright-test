import React from 'react'
import PropTypes from 'prop-types'
import { View, ActivityIndicator, ViewPropTypes } from 'react-native'

import commonStyles from './styles'

export const SMALL_SIZE = 'small'
export const LARGE_SIZE = 'large'

const LoadingView = ({ color, size, style }) =>
  <View style={[commonStyles.centerInside, style]}>
    <ActivityIndicator size={size} color={color} />
  </View>

LoadingView.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  style: ViewPropTypes.style
}

LoadingView.defaultProps = {
  size: LARGE_SIZE
}

export default LoadingView