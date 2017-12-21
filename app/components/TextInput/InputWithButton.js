import React from 'react';
import PropTypes from 'prop-types';
import color from 'color';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';

import styles from './styles';
const InputWithButton = ({
  buttonText,
  onPress,
  editable = true,
  defaultValue,
  keyboardType,
  onChangeText,
  value,
}) => {
  console.log ('editable : ', editable);
  const underlayColor = color (styles.$buttonBackgroundColorBase).darken (
    styles.$buttonBackgroundColorModifier
  );
  const containerStyle = [styles.container];
  if (editable == false) containerStyle.push (styles.disabledContainer);
  return (
    <View style={containerStyle}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        editable={editable}
        value={value}
        keyboardType={keyboardType}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  editable: PropTypes.bool,
};

export default InputWithButton;
