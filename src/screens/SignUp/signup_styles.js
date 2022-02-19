import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleSheet, Platform } from 'react-native';
import { BaseColor } from '@config';

const styles = StyleSheet.create({

  parentContainer: {
    display: 'flex',
    flex: 1,
  },

  mainHeader: {
    flex: 1.2,
    borderBottomColor: BaseColor.grayColor,
    borderBottomWidth: 2,
    justifyContent: 'center',
    backgroundColor: 'red'
  },

  textInputContainer: {
    marginTop: Platform.OS === 'ios' ? hp(3.8) : hp(3),
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? hp(7.45) : hp(8.45),
    width: wp(77.22),
    borderRadius: 12,
    backgroundColor: '#eff5fa'
  },

  iconContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    flex: 6.5,
    justifyContent: 'center',
  },

  imgContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: BaseColor.grayColor,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',

  },
  loginBtn: {
    width: '76%',
    borderRadius: 15,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? hp(4) : hp(5),
    backgroundColor: '#004282',
  },

  loginTextButton: {
    color: BaseColor.whiteColor,
    fontSize: 18,
    // ...Platform.select({
    //   ios: {
    //     fontFamily: "Manrope"
    //   },
    //   default: {
    //     fontFamily: 'Monorope',
    //   },
    // }),
  },

});
export default styles;
