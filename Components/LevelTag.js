import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    tag: {
        position:'absolute',
        width:75,
        height:21,
        borderRadius:10.5,
        backgroundColor:'#E0F7FB',
        justifyContent: 'center'
    },
    level: {
        fontWeight:'500',
        fontSize:10,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        color:'#786951',
        textAlign:'center',
    }
});

export const LevelTag = props => {
    return (
        <View style={styles.tag}>
            <Text style={styles.level}>Level {props.level}</Text>
        </View>
    );
};
