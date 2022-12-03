import React, { useEffect, useContext} from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image  
}  from 'react-native'

import { AuthContext } from "../contexts/Authentication/Auth";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 64;


export default function Header(){

    const {user} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>
                    Olá, {user.userName}
                </Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Image
                    source={require('../assets/homeHeader.png')}
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
    username:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44 / 2,
    }
})