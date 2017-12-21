import {Dimensions} from 'react-native';
import ESyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get ('window').width / 2;
const imageHeight = Dimensions.get ('window').height / 3;

const logoStyles = ESyleSheet.create ({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageHeight,
  },
  imageInner: {
    width: imageWidth / 2,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: 0.5,
    color: '$white',
    margin: 15,
    fontFamily: 'notoserif',
  },
});

export default logoStyles;
