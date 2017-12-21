import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';

const BackgroundContainer = ({children}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss ()}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);
BackgroundContainer.propTypes = {
  children: PropTypes.any,
};

export default BackgroundContainer;
