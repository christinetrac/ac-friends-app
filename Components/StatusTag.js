import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from "react-native-elements";
import {STATUS} from '../Constants/constants'

const styles = StyleSheet.create({
    tag: {
        position:'absolute',
        width:80,
        height:21,
        borderRadius:10.5,
        backgroundColor:'#E0F7FB',
        flexDirection: "row",
        justifyContent: 'center'
    },
    status: {
        fontWeight:'500',
        fontSize:10,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        color:'#786951',
        textAlign:'center',
        paddingLeft: 3,
        paddingTop:3
    },
    heart: {
        paddingTop:3
    }
});

export const StatusTag = props => {
    let heart;
    if(props.status === STATUS.friends) {
        heart = <Icon name='favorite' size={13} color='#7CC9C3'/>
    } else if (props.status === STATUS.goodFriends) {
        heart = <Icon name='favorite' size={13} color='#EF758A'/>
    } else {
        heart = <Icon name='favorite' size={13} color='#F5C24A'/>
    }

    return (
        <View style={styles.tag}>
            <View style={styles.heart}>
                {heart}
            </View>
            <Text style={styles.status}>{props.status}</Text>
        </View>
    );
};
