import { Platform, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { BaseColor } from '@config';

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#c9e2f5',
  },
  mainHeader: {
    flex: 1.2,
    borderBottomColor: BaseColor.grayColor,
    borderBottomWidth: 2,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  textInputContainer: {
    marginTop: hp(1),
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? hp(7.45) : hp(8.45),
    width: wp(77.22),
    borderRadius: 12,
    backgroundColor: '#eff5fa',
  },
  iconContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: Platform.OS === 'ios' ? 9.5 : 6.5,
    justifyContent: 'center',
  },
  imgContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    padding: 0,
    fontSize: 18,
    alignItems: 'stretch',
    fontSize: 18,
    paddingRight: Platform.OS === 'ios' ? 55 : 0,
  },
  buttonContainer: {
    marginTop: hp(3.5),
    height: hp(8.45),
    width: wp(77.22),
    borderRadius: 12,
    borderColor: BaseColor.grayColor,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: Platform.OS === 'ios' ? '77%' : '80%',
    borderRadius: 15,
    height: 60,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: hp(3),
    backgroundColor: '#004282',
  },

  loginTextButton: {
    color: BaseColor.whiteColor,
    fontSize: 18,
    textAlign: 'center',
    // ...Platform.select({
    //   ios: {
    //     fontFamily: 'Manrope-Regular',
    //   },
    //   default: {
    //     fontFamily: 'Monorope',
    //   },
    // }),
  },
});
export default styles;
