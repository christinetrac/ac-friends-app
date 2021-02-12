import React from 'react';
import {StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
    header: {
        position:'absolute',
        width:100 + '%',
        top:0,
    }
});

export const Header2 = () => {
    return (
        <Image source={require('../assets/header2.png')} style={styles.header}/>
    );
};
