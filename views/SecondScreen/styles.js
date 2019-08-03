import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
  },

  floatingBtn: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default styles;
