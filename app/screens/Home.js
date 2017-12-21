import React, {Component} from 'react';
import {View, StatusBar, KeyboardAvoidingView} from 'react-native';

import {BackgroundContainer} from '../components/BackgroundContainer/';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput/';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GDP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
class HomeScreen extends Component {
  handlePressBaseCurrency = () => {
    console.log ('press base currency');
  };
  handleQuoteBaseCurrency = () => {
    console.log ('press quote currency');
  };
  handleChangeText = text => {
    console.log ('change text', text);
  };
  render () {
    return (
      <BackgroundContainer>
        <StatusBar translucent={false} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handleQuoteBaseCurrency}
            editable={true}
            value={TEMP_QUOTE_PRICE}
          />
        </KeyboardAvoidingView>
      </BackgroundContainer>
    );
  }
}

export default HomeScreen;
