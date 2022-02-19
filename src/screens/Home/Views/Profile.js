import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { BaseColor } from '../../../config';

//ICONS
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const DUMMAY_DATA = [
    { id: 1, image: <Entypo name="user" style={{ marginTop: 5 }} size={24} color={BaseColor.darkPrimaryColor} />, title: "Username" },
    { id: 2, image: <MaterialIcons name="email" style={{ marginTop: 9 }} size={24} color={BaseColor.darkPrimaryColor} />, title: "Email" },
    { id: 3, image: <FontAwesome5 name="user-injured" style={{ marginTop: 5 }} size={24} color={BaseColor.darkPrimaryColor} />, title: "Parent" },
    { id: 5, image: <AntDesign name="logout" style={{ marginTop: 8 }} size={24} color={BaseColor.darkPrimaryColor} />, title: "Logout" },
]


const Profile = ({ isLoading, navigation }) => {
    const [passwordVisible, showpasswordVisible] = useState(false);

    useEffect(() => {

    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar3.png' }} />
                        <Text style={styles.name}>User Name</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <FlatList
                        style={styles.container}
                        enableEmptySections={true}
                        data={DUMMAY_DATA}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <View style={styles.box}>
                                        {/* <Image style={styles.icon} source={{ uri: item.image }} /> */}
                                        {item.image}
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Image style={styles.btn} source={{ uri: "https://img.icons8.com/customer/office/40" }} />
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                </View>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    header: {
        // backgroundColor: BaseColor.,
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        // borderColor: "#FF6347",
        marginBottom: 10,
    },
    icon: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 16,
        color: BaseColor.darkPrimaryColor,
        marginLeft: 6,
        marginTop: 10
    },
    btn: {
        marginLeft: 'auto',
        width: 40,
        height: 40,
    },
    body: {
        // backgroundColor: "#E6E6FA",
    },
    box: {
        padding: 8,
        marginBottom: 10,
        // backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        shadowColor: 'black',
        justifyContent: 'center',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2
    },
    username: {
        color: "#20B2AA",
        fontSize: 22,
        alignSelf: 'center',
        marginLeft: 10
    }
});

export default Profile;