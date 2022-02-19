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

  logoutBtnContainer: {
    width: 100,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    marginTop: 15
  },

});
export default styles;
