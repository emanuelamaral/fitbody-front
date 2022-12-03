import React, {useState, useContext} from "react";
import {  
   KeyboardAvoidingView,
   TouchableOpacity, 
   Text, 
   StyleSheet,
   TextInput,
   View
   } from "react-native";

import { AuthContext } from "../../contexts/Authentication/Auth";

export default function Water({navigation}){

  const [goalWaterConsumePerDay, setWaterConsumePerDay] = useState(0);
  const {setarMetaDeConsumoDeAgua} = useContext(AuthContext)

  function verifyFields(){
    setarMetaDeConsumoDeAgua(goalWaterConsumePerDay);
    navigation.navigate('Meal');
  }

  return(
    <KeyboardAvoidingView style={styles.background}>

        <Text style={styles.txtWater}>Informe a sua meta de consumo de água diário</Text>

        <View style={styles.containerForm}>
          <TextInput 
            style={styles.txtInputWater}
            value={goalWaterConsumePerDay}
            onChangeText={(value) => setWaterConsumePerDay(value)}
          />

          <Text style={styles.txtWaterL}>L</Text>
        </View>

        <View>
          <TouchableOpacity
            disabled={goalWaterConsumePerDay != 0 ? false : true}
            style={[
              styles.btnContinue, {
                backgroundColor: goalWaterConsumePerDay != 0 ? '#136f8a' : '#adb5bd'
              }
            ]}
            onPress={() => verifyFields()}
            >
            <Text style={styles.textContinue}>Continuar</Text> 

          </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor: '#20465c'
  },

  txtWater:{
    top: 50,
    color: '#FFF',
    fontSize: 30,
    alignSelf: 'center'
  },

  txtInputWater:{
    backgroundColor: '#136f8a',
    height: 90,
    alignSelf: 'center',
    marginEnd: 80, 
    top: 210,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    width: 130,
    borderColor: "#FFF",
    textAlign: 'center',
    fontSize: 50,
    color: "#FFF",
  },

  btnContinue:{
    height: 60,
    backgroundColor: '#adb5bd',
    borderRadius: 25,
    bottom: 20,
    marginStart: 20,
    marginEnd: 20,
  },

  textContinue:{
    color: '#FFF',
    alignSelf: 'center',
    top: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },

  txtWaterL:{
    top: 145,
    color: '#FFF',
    fontSize: 30,
    marginStart: 20,
    alignSelf: 'center',
    marginLeft: 120
  },

  containerForm:{
    flex: 1,
    paddingLeft: 50,
  },

})