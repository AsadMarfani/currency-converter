import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './styles';
const logo = () => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode={'cover'}
      source={require ('./images/background.png')}
      style={styles.containerImage}
    >
      <Image
        resizeMode={'contain'}
        source={require ('./images/logo.png')}
        style={styles.imageInner}
      />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter App</Text>
  </View>
);

export default logo;
