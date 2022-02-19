import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { BaseColor } from '@config';


const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseColor.primaryColor
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: BaseColor.darkPrimaryColor
  },
  devicesStyle: {
    height: hp(15.88),
    width: wp(22.07),
  }
});
export default styles;
