import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';
const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
const InputWithButtonsStyles = EStyleSheet.create ({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,
  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  disabledContainer: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    backgroundColor: '$white',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  border: {
    height: INPUT_HEIGHT,
    backgroundColor: '$border',
    width: StyleSheet.hairlineWidth,
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText',
  },
});

export default InputWithButtonsStyles;
