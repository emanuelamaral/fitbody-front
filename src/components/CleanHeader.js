import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image  
}  from 'react-native'

import Lottie from 'lottie-react-native'
import { useEffect, useState, useRef } from 'react';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 64;
 
export default function CleanHeader(){

    const[saveProfile, setSaveProfile] = useState(false);
    const profileAnimation = useRef(null);
    const firstRunProfileAnimation = useRef(false);

    useEffect(() =>{
        if(firstRunProfileAnimation.current){
          if(saveProfile){
            profileAnimation.current.play(80, 80);
          }else{
            profileAnimation.current.play(0, 0);
          }
    
          firstRunProfileAnimation.current = true;
          
        }else if(saveProfile){
            profileAnimation.current.play(0, 80);
        }else{
            profileAnimation.current.play(80, 0);
        }
      }, [saveProfile])

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity 
                    style={styles.buttonUser} 
                    onPress={() => setSaveProfile(!saveProfile)}
                    activeOpacity={0.5}>
                <Lottie 
                    source={require('../animations/user_profile.json')}
                    autoPlay={false}
                    loop={false}
                    style={{width: 45, height: 45}}
                    resizeMode='cover'
                    ref={profileAnimation}
                    speed={3.60}
                />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // paddingTop: -,
        backgroundColor: "#136f8a",
        paddingBottom: statusBarHeight,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
        // marginTop: 

    },
    content:{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    buttonUser:{
        width: 50,
        height: 50,
        top: 45,
        borderRadius: 50 / 2,
        marginStart: 320,
        alignContent: 'center'
    }
})