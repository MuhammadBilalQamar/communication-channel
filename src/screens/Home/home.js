import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
  SafeAreaView,
  AsyncStorage
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getLocalData, removeLocalData, useKeyPad } from '../../utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { TabBar, GradientStyle } from '@components';
import { BaseColor, Images } from '../../config';
import styles from './home_styles';

//ICONS
import { AntDesign } from '@expo/vector-icons';

const {
  parentContainer,
  logoutBtnContainer
} = styles;


const Home = ({ isLoading, navigation }) => {
  const [passwordVisible, showpasswordVisible] = useState(false);

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

  }, []);

  const handleLogout = () => {
    Alert.alert(
      "Are you sure?",
      "do you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => { },
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => removeLocalUser(),
          style: "cancel",
        },
      ]
    );
  }

  const removeLocalUser = async () => {
    try {
      AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => {
          navigation.navigate('Login');
        }).catch(err => {
          console.log("error----", err)
        });
    } catch (error) {
      console.log("error----", error)
      alert("something went wrong")
    }
  }

  return (
    <>
      <GradientStyle style={parentContainer}>
        <SafeAreaView style={{ flex: 1, marginTop: hp(5) }}>
          <View style={{ height: 50, backgroundColor: BaseColor.darkPrimaryColor, position: 'relative' }} >
            <TouchableOpacity style={logoutBtnContainer} onPress={handleLogout}>
              <AntDesign name="logout" size={22} color={BaseColor.fieldColor} />
              <Text style={{ color: BaseColor.whiteColor, marginLeft: 5 }}>logout</Text>
            </TouchableOpacity>
          </View>
          <TabBar activeTabColor={BaseColor.whiteColor} tabTextColor="white">
            <View title="My Groups">
              <Text>
                Groups
              </Text>
            </View>
            <View title="All Groups">
              <Text>
                All Groups
              </Text>
            </View>
            <View title="Profile">
              <Text>
                Profile
              </Text>
            </View>
          </TabBar>
          <View style={{ marginTop: 30 }} />
        </SafeAreaView>
      </GradientStyle>
    </>
  );
};

export default Home;
