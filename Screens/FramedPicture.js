import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {CheckBox, Icon} from "react-native-elements";
import {Header2} from "../Components/Header2";
import {getPronoun2, getDate} from "../Data/fetchData";
import {updateVillagerPicture} from "../Data/storage";
import React, {useState} from "react";

export const FramedPicture = ({navigation, route}) => {
    const villager = route?.params?.villager;
    const [received, setReceived] = useState(false);

    const save = () => {
        if(received) {
            updateVillagerPicture(villager).then();
            navigation.navigate('Dashboard');
        }
    };

    const page = !villager.gavePicture ? (
        <View style={{flex:1}}>
         <Text style={[styles.title, {paddingBottom:60}]}>{villager.name} has not gifted you a
             <Text style={{color: '#EF758A'}}> framed picture</Text> of {getPronoun2(villager.gender)}self</Text>
         <Text style={styles.title}>You can expect to receive one at
             <Text style={{color: '#EF758A'}}> level 5</Text> or <Text style={{color: '#EF758A'}}>level 6</Text></Text>
         <Text style={styles.question}>Have you received it?</Text>
         <CheckBox checked={received}
                   onPress={() => setReceived(!received)}
                   textStyle={styles.questionText}
                   containerStyle={styles.questionBox}
                   checkedColor={'#786951'}
                   uncheckedColor={'#786951'}
                   title={'yes i finally received a framed picture!'}
         />
         <TouchableOpacity style={styles.button} onPress={() => save()}>
             <Text style={styles.buttonText}>save</Text>
         </TouchableOpacity>
        </View>
        ):(
        <View style={{flex:1}}>
         <Text style={[styles.title, {paddingBottom:60}]}>Hooray!</Text>
         <Text style={[styles.title, {paddingBottom:60}]}>{villager.name} already gifted you a framed picture of {getPronoun2(villager.gender)}self on<Text style={{color: '#EF758A'}}> {getDate(Date.parse(villager.pictureDate))}</Text></Text>
         <Text style={styles.title}>You have achieved the greatest gift of this friendship</Text>
         <View style={styles.heart}><Icon name='favorite' size={50} color='#EF758A'/></View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header2/>
            <View style={styles.backButtonContainer}>
                <Icon raised reverse name='arrow-back' color='#2BB674' onPress={() => {navigation.pop()}}/>
            </View>
            {page}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEF6EC',
        flex: 1,
    },
    backButtonContainer: {
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        position: 'absolute',
        top:60,
        left:30,
        zIndex:99
    },
    title: {
        fontSize:24,
        fontWeight:'500',
        textAlign:'center',
        color:'#786951',
        width:310,
        alignSelf: 'center',
        top:260
    },
    question: {
        textAlign: 'center',
        alignSelf: 'center',
        bottom:350,
        color: '#235E3E',
        fontSize: 24,
        fontWeight: '500',
        width:300,
        position:'absolute',
    },
    questionText: {
        textAlign: "left",
        fontSize: 12,
        color: "#786951",
        fontWeight: "500",
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        width:300,
    },
    questionBox: {
        backgroundColor: '#FEF6EC',
        borderColor:'transparent',
        alignSelf: 'center',
        bottom:295,
        position:'absolute'
    },
    buttonText: {
        color:'#fff',
        textTransform: 'uppercase',
        fontSize:14,
        fontWeight:'500',
        letterSpacing: 0.8,
        textAlign: 'center',
    },
    button: {
        width:100,
        height:45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        bottom: 180,
        borderRadius: 25,
        backgroundColor: '#2BB674',
        justifyContent: 'center',
        alignSelf: 'center',
        position:'absolute'
    },
    heart: {
        bottom:255,
        position:'absolute',
        alignSelf:'center'
    }
});
