import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Metrics = {
  width: width < height ? width : height,
  height: height < width ? width : height,
};

const Fonts = {
  one: Metrics.width / 375,
  two: Metrics.width / 187.5,
  three: Metrics.width / 125,
  four: Metrics.width / 94,
  five: Metrics.width / 75,
  six: Metrics.width / 62.2,
  seven: Metrics.width / 53.58,
  eight: Metrics.width / 46.88,
  nine: Metrics.width / 41.67,
  ten: Metrics.width / 37.5,
  eleven: Metrics.width / 34.1,
  twelve: Metrics.width / 31.25,
  thirteen: Metrics.width / 28.85,
  fourteen: Metrics.width / 26.785,
  fifteen: Metrics.width / 25,
  sixteen: Metrics.width / 23.4375,
  seventeen: Metrics.width / 22.05,
  eighteen: Metrics.width / 20.843,
  nineteen: Metrics.width / 19.73,
  twenty: Metrics.width / 18.75,
  twenty1: Metrics.width / 17.857,
  twenty2: Metrics.width / 17.045,
  twenty3: Metrics.width / 16.3,
  twenty4: Metrics.width / 15.62,
  twenty5: Metrics.width / 15,
  twenty6: Metrics.width / 14.42,
  twenty7: Metrics.width / 13.88,
  twenty8: Metrics.width / 13.39,
  twenty9: Metrics.width / 12.93,
  thirty: Metrics.width / 12.44,
};

export default Fonts;
