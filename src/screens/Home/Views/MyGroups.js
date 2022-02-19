import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

const DUMMAY_DATA = [
    {
        id: 3,
        image: "https://via.placeholder.com/100x100/FFB6C1/000000",
        name: "Group 1",
        countMembers: 51,
        members: [
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
            "https://bootdey.com/img/Content/avatar/avatar2.png",
            "https://bootdey.com/img/Content/avatar/avatar7.png",
            "https://bootdey.com/img/Content/avatar/avatar3.png",
            "https://bootdey.com/img/Content/avatar/avatar4.png"
        ]
    },
    {
        id: 2,
        image: "https://via.placeholder.com/100x100/4682B4/000000",
        name: "Group 2",
        countMembers: 10,
        members: [
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
        ]
    },
    {
        id: 4,
        image: "https://via.placeholder.com/100x100/008080/000000",
        name: "Group 3",
        countMembers: 58,
        members: [
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
            "https://bootdey.com/img/Content/avatar/avatar2.png"
        ]
    },
    {
        id: 5,
        image: "https://via.placeholder.com/100x100/FF6347/000000",
        name: "Group 4",
        countMembers: 63,
        members: [
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
            "https://bootdey.com/img/Content/avatar/avatar2.png",
            "https://bootdey.com/img/Content/avatar/avatar7.png",
            "https://bootdey.com/img/Content/avatar/avatar3.png",
        ]
    },
    {
        id: 1,
        image: "https://via.placeholder.com/100x100/87CEEB/000000",
        name: "Group 5",
        countMembers: 3,
        members: [
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
            "https://bootdey.com/img/Content/avatar/avatar2.png"
        ]
    },
    {
        id: 6,
        image: "https://via.placeholder.com/100x100/663399/000000",
        name: "Group 6",
        countMembers: 12,
        members: [
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
            "https://bootdey.com/img/Content/avatar/avatar2.png"
        ]
    },
    {
        id: 7,
        image: "https://via.placeholder.com/100x100/FFC0CB/000000",
        name: "Group 7",
        countMembers: 234,
        members: [
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
            "https://bootdey.com/img/Content/avatar/avatar2.png"
        ]
    },
];

const MyGroups = ({ isLoading, navigation }) => {
    const [passwordVisible, showpasswordVisible] = useState(false);

    useEffect(() => {

    }, []);

    const renderGroupMembers = (group) => {
        if (group.members) {
            return (
                <View style={styles.groupMembersContent}>
                    {group.members.map((prop, key) => {
                        return (
                            <Image key={key} style={styles.memberImage} source={{ uri: prop }} />
                        );
                    })}
                </View>
            );
        }
        return null;
    }

    return (
        <>
            <FlatList
                style={styles.root}
                data={DUMMAY_DATA}
                extraData={DUMMAY_DATA}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.separator} />
                    )
                }}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={(item) => {
                    const Group = item.item;
                    let mainContentStyle;
                    if (Group.attachment) {
                        mainContentStyle = styles.mainContent;
                    }
                    return (
                        <View style={styles.container}>
                            <Image source={{ uri: Group.image }} style={styles.avatar} />
                            <View style={styles.content}>
                                <View style={mainContentStyle}>
                                    <View style={styles.text}>
                                        <Text style={styles.groupName}>{Group.name}</Text>
                                    </View>
                                    <Text style={styles.countMembers}>
                                        {Group.countMembers} members
                                    </Text>
                                    <Text style={styles.timeAgo}>
                                        Updated 2 months ago
                                    </Text>
                                    {renderGroupMembers(Group)}
                                </View>
                            </View>
                        </View>
                    );
                }} />
        </>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFFFFF",
        // height:'100%'
    },
    container: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: 'flex-start'
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 25,
    },
    text: {
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0
    },
    mainContent: {
        marginRight: 60
    },
    memberImage: {
        height: 30,
        width: 30,
        marginRight: 4,
        borderRadius: 10,
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    countMembers: {
        color: "#20B2AA"
    },
    timeAgo: {
        fontSize: 12,
        color: "#696969"
    },
    groupName: {
        fontSize: 23,
        color: "#1E90FF"
    },
    groupMembersContent: {
        flexDirection: 'row',
        marginTop: 10
    }
});

export default MyGroups;