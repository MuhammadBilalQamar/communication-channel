import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {StyleSheet} from 'react-native';
// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import config from '../../config';

const {colors} = config;

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flex: 1,
  },
  mainHeader: {
    flex: 1.2,
    borderBottomColor: colors.grey2,
    borderBottomWidth: 2,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  textInputContainer: {
    marginTop: hp(4),
    flexDirection: 'row',
    height: hp(8.45),
    width: wp(77.22),
    // marginLeft: 20,
    borderRadius: 12,
    //borderWidth: 2,
    //borderColor: colors.grey2,
    backgroundColor: '#eff5fa',
  },
  iconContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
  inputContainer: {
    flex: 6.5,
    justifyContent: 'center',
    // backgroundColor: '#eff5fa'
  },
  imgContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  textInputStyle: {
    padding: 0,
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: hp(3.5),
    height: hp(8.45),
    width: wp(77.22),
    borderRadius: 12,
    borderColor: colors.grey2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 15,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(4),
    backgroundColor: '#004282',
  },

  loginTextButton: {
    color: colors.white,
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: 'Manrope-Regular',
      },
      default: {
        fontFamily: 'Monorope',
      },
    }),
  },
  createNewPasswordBtn: {
    fontSize: 20,
    marginRight: wp(15),
    color: colors.darkishBlue,
    fontWeight: 'bold',
  },

  showPasswordStyle: {
    ...Platform.select({
      ios: {
        height: hp(1.8),
        width: wp(4.9),
      },
      default: {
        height: hp(2.5),
        width: wp(6.5),
      },
    }),
  },

  newPasswordStyle: {
    ...Platform.select({
      ios: {
        height: hp(1.8),
        width: wp(4.9),
      },
      default: {
        height: hp(2.5),
        width: wp(6.5),
      },
    }),
  },
});
export default styles;
