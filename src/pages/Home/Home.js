import React, { useEffect } from "react";
import { 
   View, 
   Image, 
   TouchableOpacity, 
   Text, 
   StyleSheet,
   } from "react-native";

import { useContext} from 'react'

import { AuthContext } from '../../contexts/Authentication/Auth'

import Header from "../../components/Header";

export default function Home({navigation}){



    return(

      <View style={styles.container}>
        <Header />


      <View style={styles.containerMenu}>

        <Text style={styles.txtMenu}>O que voce deseja ver?</Text>

        <Image
            source={require('../../assets/salad.png')}
            style={styles.foodImg}
          />

        <TouchableOpacity
          style={styles.btnFood}
          onPress={() => navigation.navigate('Food')}
        >
         
          <Text style={styles.txtFood}>Alimentação</Text>
        </TouchableOpacity>

        <Image
            source={require('../../assets/haltere.png')}
            style={styles.trainingImg}
          />

        <TouchableOpacity
          style={styles.btnTraining}
          onPress={() => navigation.navigate('Training')}
        >
          
          <Text style={styles.txtTraining}>Treino</Text>
        </TouchableOpacity>

      </View>

      </View>

    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa',
  },
  containerMenu:{
    flex: 1,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
  
  btnFood:{
    // marginTop: 150,
    // height: 90,
    bottom: 70,
    width: 150,
    borderBottomWidth: 2,
    marginStart: 200,
    alignItems: 'center',
    borderColor: "#136f8a"

  },

  foodImg:{
    marginTop: 80,
  },

  txtFood:{
    fontSize: 25,
    color: "#000"
  },

  btnTraining:{
    bottom: 70,
    width: 150,
    borderBottomWidth: 2,
    marginStart: 200,
    alignItems: 'center',
    borderColor: "#136f8a"

  },

  trainingImg:{
    marginTop: 60
  },

  txtTraining:{
    fontSize: 25,
    color: "#000"
  },

  txtMenu:{
    top: 30,
    fontSize: 25,
    color: '#000',
  }

})