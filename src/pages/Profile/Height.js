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

export default function Height({navigation}){

  const [height, setHeight] = useState(0);
  const {setarAltura} = useContext(AuthContext)

  function verifyFields(){
    setarAltura(height);
    navigation.navigate('GoalWeight');
  }

  return(
    <KeyboardAvoidingView style={styles.background}>
        
      <Text style={styles.textHeight}>Qual a sua altura?</Text>

      <View style={styles.containerForm}>
          <TextInput 
            style={styles.txtInputHeight}
            value={height}
            onChangeText={(value) => setHeight(value)}
          />

          <Text style={styles.textHeightM}>Cm</Text>
      </View>

      <View>
          <TouchableOpacity
            disabled={height != 0 ? false : true}
            style={[
              styles.btnContinue, {
                backgroundColor: height != 0 ? '#136f8a' : '#adb5bd'
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

  textHeight:{
    top: 50,
    color: '#FFF',
    fontSize: 30,
    alignSelf: 'center'
  },

  txtInputHeight:{
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

  textHeightM:{
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