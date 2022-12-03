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

export default function Weight({navigation}){

  const [weight, setWeight] = useState(0);
  const {setarPeso} = useContext(AuthContext);

  function verifyFields(){
    setarPeso(weight);
    navigation.navigate('Height')
  };

  return(

    <KeyboardAvoidingView style={styles.background}>
        
      <Text style={styles.textWeight}>Quanto você pesa atualmente?</Text>

      <View style={styles.containerForm}>
        <TextInput
          style={styles.txtInputWeight}
          value={weight}
          onChangeText={(value) => setWeight(value)}
        />
        <Text style={styles.textWeightKg}>Kg</Text>
      </View>

      <View>
          <TouchableOpacity
            disabled={weight != 0 ? false : true}
            style={[
              styles.btnContinue, {
                backgroundColor: weight != 0 ? '#136f8a' : '#adb5bd'
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

  textWeight:{
    top: 50,
    color: '#FFF',
    fontSize: 30,
    alignSelf: 'center'
  },

  txtInputWeight:{
    backgroundColor: '#136f8a',
    height: 90,
    alignSelf: 'center',
    marginEnd: 80, 
    top: 180,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    width: 130,
    borderColor: "#FFF",
    textAlign: 'center',
    fontSize: 50,
    color: "#FFF",

  },

  texBtntWeight:{
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    paddingLeft: 150,
    marginTop: 10,
    top: 15
  },

  genderFemImg:{
    alignItems: 'center',
    bottom: '30%',
    marginStart: '3%'
  },
  
  btnContinue:{
    height: 60,
    backgroundColor: '#adb5bd',
    borderRadius: 25,
    // top: 470,
    bottom: 20,
    marginStart: 20,
    marginEnd: 20,
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

  textWeightKg:{
    top: 115,
    color: '#FFF',
    fontSize: 30,
    marginStart: 20,
    alignSelf: 'center',
    marginLeft: 120
  },

  containerForm:{
    flex: 1,
    paddingLeft: 50,
    // marginStart: 50
    // color: "red"
  },

  labelError:{
    // borderWidth: 2,
    width: 240,
    height: 30,
    textAlign: 'center',
    borderRadius: 25,
    backgroundColor: '#242423',
    color: '#a6a6a6',
    top: 400,
    marginStart: 30,
    paddingTop: 4
  }

})