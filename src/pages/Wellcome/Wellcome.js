import React, {useState, useEffect} from "react";
import { 
   View, 
   Image,
   TouchableOpacity, 
   Text, 
   StyleSheet} from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Wellcome(){
    const navigation = useNavigation();

    return(
        <View style={styles.background}>

            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/fitness.png')}
                    style={{
                        width: '100%',
                    }}
                    resizeMode='contain'
                 />
            </View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Bem vindo ao FitBody</Text>
                <Text styles={styles.text}>Faça login para começar</Text>

                <TouchableOpacity
                    style={styles.buttonAccess}
                    onPress={() => navigation.navigate("Login")}
                    >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor: '#136f8a',
  },
  containerLogo:{
    flex:2,
    backgroundColor: '#136f8a',
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerForm:{
    flex:1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#000'
  },

  text:{
    color: '#a1a1a1'
  },

  buttonAccess:{
    position: 'absolute',
    backgroundColor: '#136f8a',
    borderRadius: 59,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'

  },

  buttonText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }
})