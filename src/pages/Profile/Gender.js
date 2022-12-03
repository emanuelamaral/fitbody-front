import React, {useState, useContext} from "react";
import {  
   KeyboardAvoidingView,
   Image,
   TouchableOpacity, 
   Text, 
   StyleSheet,
   } from "react-native";

import { AuthContext } from "../../contexts/Authentication/Auth";
  

export default function Gender({navigation}){

  const [option, setOption] = useState(0);
  const {setarGenero} = useContext(AuthContext);

  function verifyFields(){
    if (option != 0){
      if(option == 1){
        setarGenero("FEMININO");
      }
      else{
        setarGenero("MASCULINO");
      }
      navigation.navigate('Weight');
    }
  }

  return(

    <KeyboardAvoidingView style={styles.background}>

      <Text style={styles.textGender}>Qual o seu gênero?</Text>

      <TouchableOpacity 
        style={[
          styles.btnGenderFem, {
            borderWidth: option == 1 ? 2 : 0,
            borderColor: option == 1 ? "#FFF" : " "
          }
        ]}
        onPress={() => {setOption(1)}}
        >

        <Text style={styles.textGenderFem}>Feminino</Text>

        <Image 
            style={styles.genderFemImg}
            source={require('../../assets/female.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[
          styles.btnGenderMale, {
            borderWidth: option == 2 ? 2 : 0,
            borderColor: option == 2 ? "#FFF" : " "
          }
        ]}
        onPress={() => {setOption(2)}}
        >
        <Text style={styles.textGenderMale}>Masculino</Text>

        <Image 
            style={styles.genderMaleImg}
            source={require('../../assets/male.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={option != 0 ? false : true}
        style={[
          styles.btnContinue, {
            backgroundColor: option != 0 ? '#136f8a' : '#adb5bd'
          }
        ]}
        onPress={() => verifyFields()}
        >
        <Text style={styles.textContinue}>Continuar</Text> 

      </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor: '#20465c'
  },

  textGender:{
    top: 50,
    color: '#FFF',
    fontSize: 30,
    marginStart: 20,
    alignSelf: 'center'
  },

  btnGenderFem:{
    backgroundColor: '#136f8a',
    top: 150,
    borderRadius: 7,
    height: 90,
    marginStart: 20,
    marginEnd: 20
  },

  textGenderFem:{
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    paddingLeft: 150,
    marginTop: 10,
    top: 15
  },
  subTextLowActivity:{
    paddingLeft: 90,
    marginRight: 10
  },
  genderFemImg:{
    alignItems: 'center',
    bottom: '30%',
    marginStart: '3%'
  },

  btnGenderMale:{
    backgroundColor: '#136f8a',
    top: 200,
    borderRadius: 7,
    height: 90,
    marginStart: 20,
    marginEnd: 20
  },

  textGenderMale:{
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    paddingLeft: 150,
    marginTop: 10,
    top: 15
  },

  subTextMediumActivity:{
    paddingLeft: 130,
    marginRight: 10
  },

  genderMaleImg:{
    alignItems: 'center',
    bottom: '30%',
    marginStart: '3%'
  },

  
  btnContinue:{
    height: 60,
    backgroundColor: '#adb5bd',
    borderRadius: 25,
    top: 450,
    marginStart: 20,
    marginEnd: 20
  },

  textContinue:{
    color: '#FFF',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    alignSelf: 'center',
    top: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },

})