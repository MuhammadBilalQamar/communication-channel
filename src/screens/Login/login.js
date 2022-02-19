import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { getLocalData, setLocalData, useKeyPad } from '../../utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { CustomLoader, GradientStyle } from '@components';
import { BaseColor, Images, auth } from '@config';
import styles from './login_styles';

//ICONS
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";

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
} = styles;


const Login = ({ isLoading, navigation }) => {
  const [passwordVisible, showpasswordVisible] = useState(false);
  const [email, setEmail] = useState('bilalqmr1@gmail.com');
  const [password, setPassword] = useState('123456');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginData, setLoginData] = useState(null);
  const [isFocused, setIsFocused] = useState({
    emailInput: false,
    passwordInput: false,
  });

  const keyPad = useKeyPad();

  useEffect(() => {
    // retrieveuser()
    // if (LoginData?.login?.accessToken) {
    //   try {
    //     navigation.navigate('HomeScreen', {
    //       isAlreadyLoggedIn: false,
    //     });
    //     setLocalData('logindata', LoginData?.login?.accessToken);
    //     setLocalData('userName', email);
    //     setLocalData('passWord', password);
    //   } catch (storageError) {
    //   }
    // }

  }, [loginData]);

  // const retrieveuser = () => {
  //   try {
  //     getLocalData('loggedInUseruid')
  //       .then((res) => {
  //         console.log("res---", res)
  //       }).catch(err => {
  //         console.log("error---", err)
  //       });
  //   } catch (error) {
  //     console.log("error---", error)

  //   }
  // }
  const handlePress = () => {
    navigation.navigate('SignUp');
  };

  const handleSearch = () => {
    showpasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    setLoginLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const uid = user.uid;
        if (uid) {
          setLocalData('loggedInUseruid', uid);
          navigation.navigate('Home');
        }
        setLoginLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setLoginLoading(false);
      });
  };

  const handleInputFocus = (input) => {
    setIsFocused({
      [input]: true,
    });
  };

  let handleInputBlur = (input) => {
    setIsFocused({
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
        <View style={{ flex: 1.5, flexDirection: 'row', marginTop: hp(1) }}>
          <View
            style={{
              flex: 1.5,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Image source={Images.neurogleeLogoIconNav} style={devicesStyle} />
          </View>
          <View
            style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 20,
                marginRight: wp(19),
                color: BaseColor.navyBlue,
                fontWeight: 'bold',
              }}>
              Login
            </Text>
          </View>
        </View>
        <View
          style={{
            //backgroundColor: 'green',
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
              <Text style={{ fontSize: 18, color: BaseColor.navyBlue }}>
                You can login with provided
              </Text>
            </View>
            <View
              style={{
                flex: 0.4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 18, color: BaseColor.navyBlue }}>
                Email ID & Password
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 3,
              //justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={
                isFocused.emailInput || email.length > 0
                  ? { ...textInputContainer, backgroundColor: '#eff5fa' }
                  : { ...textInputContainer, backgroundColor: '#b8c9e0' }
              }>
              <View style={iconContainer}>
                <FontAwesome
                  name="envelope-o"
                  size={24}
                  color={BaseColor.primaryColor}
                />
              </View>
              <View style={inputContainer}>
                <TextInput
                  style={textInputStyle}
                  color="#004084"
                  placeholder="Enter Email ID"
                  placeholderTextColor="#003f5c"
                  clearText
                  value={email}
                  onChangeText={(e) => setEmail(e)}
                  onFocus={() => handleInputFocus('emailInput')}
                  onBlur={() => handleInputBlur('emailInput')}
                />
              </View>
              <View style={imgContainer}>
                {/* <TouchableWithoutFeedback onPress={ handleSearch }>
                        <Image source={  } style={{height: hp(2), width: wp(6.5)} } />
                    </TouchableWithoutFeedback> */}
              </View>
            </View>

            <View
              style={
                isFocused.passwordInput || password.length > 0
                  ? { ...textInputContainer, backgroundColor: '#eff5fa' }
                  : { ...textInputContainer, backgroundColor: '#b8c9e0' }
              }>
              <View style={iconContainer}>
                <FontAwesome5 name="lock" size={22} color={BaseColor.primaryColor} />
              </View>
              <View style={inputContainer}>
                <TextInput
                  style={textInputStyle}
                  placeholder="Enter Password"
                  placeholderTextColor="#003f5c"
                  clearText
                  color="#004084"
                  value={password}
                  onChangeText={(e) => setPassword(e)}
                  secureTextEntry={!passwordVisible}
                  onFocus={() => handleInputFocus('passwordInput')}
                  onBlur={() => handleInputBlur('passwordInput')}
                />
              </View>
              <View style={imgContainer}>
                <TouchableWithoutFeedback
                  onPress={handleSearch}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                  <Image
                    source={passwordVisible ? Images.openViewIcon : Images.closedViewIcon}
                    style={
                      Platform.OS === 'ios'
                        ? { height: 20, width: 20, resizeMode: 'contain' }
                        : { height: hp(2.5), width: wp(6.5) }
                    }
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>

            <TouchableOpacity style={loginBtn} onPress={handleLogin}>
              {loginLoading ? (
                <View>
                  <CustomLoader color={'#bedcf5'} size={10} />
                </View>
              ) : (
                <Text style={loginTextButton}>Login</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 4.5, display: 'flex', flexDirection: 'column' }}>
          <View
            style={
              Platform.OS === 'ios'
                ? {
                  flex: 1.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: bottom,
                  marginTop: 2,
                }
                : {
                  flex: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: bottom,
                  marginTop: 5,
                }
            }>
            <TouchableWithoutFeedback onPress={handlePress}>
              <Text
                style={{
                  fontSize: 18,
                  color: BaseColor.darkPrimaryColor,
                  fontWeight: 'bold',
                  paddingTop: 15,
                }}>
                Sign Up
              </Text>
            </TouchableWithoutFeedback>
          </View>

          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginTop: 95,
            }}>
            <Image
              style={{ height: 155, resizeMode: 'stretch' }}
              source={Images.imagebottom}
              bottom={bottom}
            />
          </View>
        </View>
      </GradientStyle>
    </>
  );
};

export default Login;
