import {
  Image,
  Linking,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { GradientStyle, CustomLoader } from '@components';
/* eslint-disable no-nested-ternary */
import styles from './forgotPassword_styles';
import { useKeyPad } from '../../utils';
import { BaseColor, Images } from '@config';

//ICONS
import { FontAwesome } from '@expo/vector-icons';

const {
  parentContainer,
  devicesStyle,
  loginTextButton,
  inputContainer,
  iconContainer,
  loginBtn,
} = styles;

let { textInputContainer, textInputStyle } = styles;

const initialState = {
  passwordSend: false,
  username: '',
  isFocused: false,
};

const useMount = (func) => useEffect(() => func(), []);

const ForgotPassword = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { passwordSend, username, isFocused } = state;

  const keyPad = useKeyPad();

  const getToken = '';
  const errorMessage = '';

  const usernameHookError = '';
  const userError =
    errorMessage.indexOf('Username') > 0 ? errorMessage : usernameHookError;

  useMount(() => {
    Linking.addEventListener('url', handleURL);
  });

  const handleURL = (event) => {
    navigate(event.url);
  };

  const navigate = (url) => {
    // console.log('====================================');
    const token = url.split('://forgotpassword/')?.length
      ? url.split('://forgotpassword/')[1]
      : '';

    if (token) {
      navigation.navigate('NewPassword', {
        token: token,
      });
    }
  };

  const handlePress = () => {
    navigation.navigate('Login');
  };

  const handleChange = (e) => {
    setState({ ...state, username: e });
  };

  const handleSend = async () => {
    try {
      // await forgotData();
    } catch (e) {
      console.error(e);
    }
    setState({ ...state, passwordSend: true });
  };

  let handleFocus = () => {
    setState({ ...state, isFocused: true });
  };

  let handleBlur = () => {
    setState({ ...state, isFocused: false });
  };

  const bottom = useMemo(() => {
    if (keyPad) {
      return keyPad - hp(58);
    }
    return 0;
  }, [keyPad]);

  const newbottom = useMemo(() => {
    if (keyPad) {
      return keyPad - hp(0.5);
    }
    return 0;
  }, [keyPad]);

  useEffect(() => {
    if (username.length >= 18 && username.length <= 24) {
      textInputStyle = { ...textInputStyle, fontSize: 15 };
    } else if (username.length >= 25 && username.length <= 30) {
      textInputStyle = { ...textInputStyle, fontSize: 13 };
    } else if (username.length >= 31 && username.length <= 38) {
      textInputStyle = { ...textInputStyle, fontSize: 12 };
    } else {
      textInputStyle = { ...textInputStyle, fontSize: 18 };
    }
  }, [username.length]);

  return (
    <>
      <GradientStyle style={{ display: 'flex', flex: 1 }}>
        <View style={{ flex: 1.5, flexDirection: 'row', marginTop: 1 }}>
          <View
            style={{
              flex: 1.5,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            {username.length === 0 && (
              <Image source={Images.neurogleeLogoIconNav} style={devicesStyle} />
            )}
          </View>
          <View
            style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 20,
                marginRight: wp(19),
                color: BaseColor.darkPrimaryColor,
                fontWeight: 'bold',
              }}>
              Forgot Password
            </Text>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: 'green',
            flex: 8,
          }}>
          <View style={{ flex: 0.35 }} />
          <View style={{ flex: 0.7 }}>
            <View
              style={{
                flex: 0.4,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 18, color: BaseColor.darkPrimaryColor }}>
                {passwordSend && getToken
                  ? 'Changed password link is shared'
                  : 'Enter registered email ID or'}
                {/* {errorMessage && 'Entered email ID  or password'}  */}
              </Text>
            </View>
            <View
              style={{
                flex: 0.4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 18, color: BaseColor.darkPrimaryColor }}>
                {passwordSend && getToken
                  ? 'to registered email ID'
                  : 'Username'}
                {/* {errorMessage && 'is wrong'} */}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 3,
              //backgroundColor: 'yellow',
              //justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{ flex: 0.1 }} />

            <View
              style={
                passwordSend && getToken
                  ? { ...textInputContainer, backgroundColor: '#00000000' }
                  : isFocused
                    ? { ...textInputContainer, backgroundColor: '#eff5fa' }
                    : { ...textInputContainer, backgroundColor: '#b8c9e0' }
              }>
              <View style={iconContainer}>
                {!(passwordSend && getToken) && (
                  <FontAwesome
                    name="envelope-o"
                    size={24}
                    color={BaseColor.primaryColor}
                  />
                )}
              </View>
              <View
                style={
                  passwordSend && getToken
                    ? {
                      ...inputContainer,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
                    : inputContainer
                }>
                <TextInput
                  style={textInputStyle}
                  color={passwordSend && getToken ? '#1f8563' : '#004084'}
                  placeholder="Enter EmailID/Username"
                  placeholderTextColor="#5D86B1"
                  clearText
                  value={username || ''}
                  onChangeText={(e) => handleChange(e)}
                  editable={passwordSend && getToken ? false : true}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </View>
            </View>

            <TouchableOpacity
              style={
                passwordSend && getToken
                  ? { ...loginBtn, backgroundColor: '#1f8563' }
                  : username.length === 0
                    ? { ...loginBtn, backgroundColor: '#8aa6c8' }
                    : { ...loginBtn, backgroundColor: '#004282' }
              }
              onPress={handleSend}
              disabled={username.length === 0}>
              {loading ? (
                <View>
                  <CustomLoader color={'#bedcf5'} size={10} />
                </View>
              ) : passwordSend && getToken ? (
                <>
                  <Text style={loginTextButton}>Sent Successfully</Text>
                  <View>
                    <Image
                      source={Images.successtick}
                      style={{
                        height: Platform.OS === 'ios' ? 15 : hp(3),
                        width: Platform.OS === 'ios' ? 15 : wp(6),
                        resizeMode: 'contain',
                        paddingLeft: Platform.OS === 'ios' ? 50 : 0,
                      }}
                    />
                  </View>
                </>
              ) : (
                <Text style={loginTextButton}>Send</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 4.3 }}>
          <View
            style={
              Platform.OS === 'ios'
                ? {
                  flex: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: bottom,
                  marginBottom: Platform.OS === 'ios' ? 30 : 100,
                }
                : {
                  flex: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: bottom,
                }
            }>
            <TouchableWithoutFeedback onPress={handlePress}>
              <Text
                style={{
                  fontSize: 18,
                  color: BaseColor.darkPrimaryColor,
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{ flex: 8, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Image source={Images.imagebottom} bottom={bottom} />
          </View>
        </View>
      </GradientStyle>
    </>
  );
};

export default ForgotPassword;
