import * as c from '../constant';

import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import CustomLoader from '../CustomLoader';
import GradientStyle from '../LinearGradient';
import {ResetPasswordApi} from '../constant';
import config from '../../config';
import styles from './newPassword_styles';
import {useKeyPad} from '../utils';

// import { useNavigation } from '@react-navigation/native';

const {colors} = config;
const {
  parentContainer,
  devicesStyle,
  loginTextButton,
  textInputContainer,
  textInputStyle,
  inputContainer,
  iconContainer,
  imgContainer,
  buttonContainer,
  loginBtn,
  createNewPasswordBtn,
} = styles;

const initialState = {
  showPassword: false,
  shownewPassword: false,
  newpassword: '',
  confirmpassword: '',
  fieldValidation: false,
  newPasswordInput: false,
  confirmPasswordInput: false,
};

const NewPassword = ({route, navigation}) => {
  const [state, setState] = useState(initialState);
  const {
    showPassword,
    shownewPassword,
    confirmpassword,
    newpassword,
    fieldValidation,
    newPasswordInput,
    confirmPasswordInput,
  } = state;

  const keyPad = useKeyPad();

  const {token} = route.params;

  const [
    resetData,
    {
      data: ResetPasswordApiData,
      error: ResetPasswordApiError,
      loading: ResetPasswordApiLoading,
    },
  ] = ResetPasswordApi(token, confirmpassword);

  useEffect(() => {
    console.log(token, 'token token token');
  }, [token]);

  const handleTextChange = (e) => {
    setState({...state, newpassword: e});
  };

  const handleChange = (e) => {
    setState({...state, confirmpassword: e, fieldValidation: false});
  };

  const handlePassword = () => {
    setState({...state, showPassword: !showPassword});
  };

  const handlenewPassword = () => {
    setState({...state, shownewPassword: !shownewPassword});
  };

  useEffect(() => {
    if (ResetPasswordApiData?.restPassword?.message && !ResetPasswordApiError) {
      navigation.navigate('Login');
    }
  }, [ResetPasswordApiData, ResetPasswordApiError, navigation]);

  const handleChangePassword = () => {
    if (newpassword === confirmpassword) {
      resetData();
    } else {
      setState({...state, fieldValidation: true});
    }
  };

  const handlePress = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleInputFocus = (input) => {
    setState({
      ...state,
      [input]: true,
    });
  };

  let handleInputBlur = (input) => {
    setState({
      ...state,
      [input]: false,
    });
  };

  const bottom = useMemo(() => {
    if (keyPad) {
      return keyPad - hp(58);
    }
    return 0;
  }, [keyPad]);

  return (
    <>
      <GradientStyle style={parentContainer}>
        <View style={{flex: 1.5, flexDirection: 'row', marginTop: hp(1)}}>
          <View
            style={{
              flex: 1.5,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Image source={c.neurogleeLogoIconNav} style={devicesStyle} />
          </View>
          <View
            style={{flex: 8, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={createNewPasswordBtn}>Create New Password</Text>
          </View>
        </View>
        <View
          style={{
            flex: 8,
          }}>
          <View style={{flex: 0.1}} />
          <View
            style={{
              flex: 3,
              alignItems: 'center',
            }}>
            <View
              style={
                newPasswordInput || newpassword.length > 0
                  ? {...textInputContainer, backgroundColor: '#eff5fa'}
                  : {...textInputContainer, backgroundColor: '#b8c9e0'}
              }>
              <View style={iconContainer}>
                <Image
                  source={c.passwordIcon}
                  style={{height: hp(4), width: wp(6.5)}}
                />
              </View>
              <View style={inputContainer}>
                <TextInput
                  style={textInputStyle}
                  color="#004084"
                  placeholder="Enter New Password"
                  placeholderTextColor="#5d86b1"
                  clearText
                  value={newpassword || ''}
                  secureTextEntry={!showPassword}
                  onChangeText={(e) => handleTextChange(e)}
                  onFocus={() => handleInputFocus('newPasswordInput')}
                  onBlur={() => handleInputBlur('newPasswordInput')}
                />
              </View>
              <View style={imgContainer}>
                {newpassword.length > 0 && (
                  <TouchableWithoutFeedback onPress={handlePassword}>
                    <Image
                      source={c.closedViewIcon}
                      source={showPassword ? c.openViewIcon : c.closedViewIcon}
                      style={styles.newPasswordStyle}
                    />
                  </TouchableWithoutFeedback>
                )}
              </View>
            </View>

            <View
              style={
                fieldValidation
                  ? {...textInputContainer, borderColor: 'red', borderWidth: 2}
                  : confirmPasswordInput || confirmPasswordInput.length > 0
                  ? {...textInputContainer, backgroundColor: '#eff5fa'}
                  : {...textInputContainer, backgroundColor: '#b8c9e0'}
              }>
              <View style={iconContainer}>
                <Image
                  source={c.passwordIcon}
                  style={{height: hp(4), width: wp(6.5)}}
                />
              </View>
              <View style={inputContainer}>
                <TextInput
                  style={textInputStyle}
                  placeholder="Confirm Password"
                  placeholderTextColor="#5d86b1"
                  clearText
                  color="#004084"
                  value={confirmpassword || ''}
                  onChangeText={(e) => handleChange(e)}
                  secureTextEntry={!shownewPassword}
                  onFocus={() => handleInputFocus('confirmPasswordInput')}
                  onBlur={() => handleInputBlur('confirmPasswordInput')}
                />
              </View>
              <View style={imgContainer}>
                <TouchableWithoutFeedback onPress={handlenewPassword}>
                  <Image
                    source={shownewPassword ? c.openViewIcon : c.closedViewIcon}
                    // source={c.closedViewIcon}
                    style={styles.showPasswordStyle}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>

            <TouchableOpacity
              style={[
                loginBtn,
                (!newpassword || !confirmpassword) && {
                  backgroundColor: '#8aa6c8',
                },
              ]}
              onPress={handleChangePassword}>
              {ResetPasswordApiLoading ? (
                <View>
                  <CustomLoader color={'#bedcf5'} size={10} />
                </View>
              ) : (
                <Text
                  style={
                    !newpassword && !confirmpassword
                      ? {...loginTextButton, color: '#e7e7e8'}
                      : {...loginTextButton}
                  }>
                  Create Password
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 4.5}}>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              bottom: bottom,
            }}>
            <TouchableWithoutFeedback onPress={handlePress}>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.darkishBlue,
                  fontWeight: 'bold',
                }}>
                Forgot Password?
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{flex: 8, alignItems: 'center', justifyContent: 'flex-end'}}>
            <Image source={c.imagebottom} bottom={bottom} />
          </View>
        </View>
      </GradientStyle>
    </>
  );
};

export default NewPassword;
