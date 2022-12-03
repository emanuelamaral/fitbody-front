import React, {useState, useContext} from "react";
import { 
   View, 
   KeyboardAvoidingView,
   Image, 
   TextInput,
   TouchableOpacity, 
   TouchableHighlight,
   Text, 
   StyleSheet,
   Animated} from "react-native";

import { AuthContext } from "../../contexts/Authentication/Auth";

export default function CurrentGoalWeight({navigation}){

  const [option, setOption] = useState(0);
  const {setarObjetivoPesoAtual} = useContext(AuthContext);


  function verifyFields(){
    if (option != 0){
      if(option == 1){
        setarObjetivoPesoAtual("EMAGRECER")
      }
      else if(option == 2){
        setarObjetivoPesoAtual("GANHAR_PESO")
      }
      else if(option == 3){
        setarObjetivoPesoAtual("MANTER_PESO")
      }
      navigation.navigate('NivelActivity');
      return
    }
      return
    }
  
  
    return(
        <KeyboardAvoidingView style={styles.background}>
          
          <Text style={styles.textPerfil}>Vamos criar um perfil para você</Text>
          
          <View>
            
            <Text style={styles.textObjective}>Qual o seu objetivo?</Text>
            <TouchableOpacity 
              activeOpacity={0.8}
              style={[
                styles.btnLoseWeight, {
                  borderWidth: option == 1 ? 2 : 0,
                  borderColor: option == 1 ? '#FFF' : '#FFF',
                }
              ]}
              onPress={() => {setOption(1)}}
              >

              
              <Text style={styles.textLoseWeight}>Emagracer </Text>
              <Text style={styles.subTextLoseWeight}>Perder peso de maneira mais saudável</Text>

              <Image 
                  style={styles.image}
                  source={require('../../assets/scale.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity 
              activeOpacity={0.8}
              style={[
                  styles.btnGainWeight, {
                    borderWidth: option == 2 ? 2 : 0,
                    borderColor: option == 2 ? '#FFF' : '#FFF',
                  }
              ]}
              onPress={() => {setOption(2)}}
              >
              <Text style={styles.textGainWeight}>Ganhar peso</Text>
              <Text style={styles.subTextGainWeight}>Ganhar massa muscular</Text>

              <Image 
                  style={styles.image}
                  source={require('../../assets/biceps.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.btnKeepWeight, {
                  borderWidth: option == 3 ? 2 : 0,
                  borderColor: option == 3 ? '#FFF' : '#FFF',
                }
              
              ]}
              onPress={() => {setOption(3)}}
              >
              <Text style={styles.textKeepWeight}>Manter peso</Text>
              <Text style={styles.subTextKeepWeight}>Manter o peso atual com saúde</Text>

              <Image 
                  style={styles.image}
                  source={require('../../assets/fruits.png')}
              />
            </TouchableOpacity>

          </View>

          <TouchableOpacity
            activeOpacity={ (option != 0 ? 0.5 : 1.0) }
            disabled={(option != 0 ? false : true)}
            style={[
              styles.btnContinue, {
                backgroundColor: option != 0 ? '#136f8a' : '#adb5bd',
              }]}
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
  containerLogo:{
    flex:1,
    justifyContent: 'center'
  },
  textPerfil:{
    top: 30,
    fontSize: 20,
    color: '#FFF',
    alignSelf: 'center'
  },
  textObjective:{
    top: 50,
    color: '#FFF',
    fontSize: 30,
    alignSelf: 'center'
  },

  btnLoseWeight:{
    backgroundColor: '#136f8a',
    top: 100,
    borderRadius: 7,
    height: 90,
    marginStart: 20,
    marginEnd: 20
  },

  textLoseWeight:{
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    paddingLeft: 150,
    marginTop: 10
  },
  subTextLoseWeight:{
    paddingLeft: 90,
    marginRight: 10
  },
  image:{
    bottom: 50,
    marginStart: 10
  },

  btnGainWeight:{
    backgroundColor: '#136f8a',
    top: 150,
    borderRadius: 7,
    height: 90,
    marginStart: 20,
    marginEnd: 20
  },

  textGainWeight:{
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    paddingLeft: 150,
    marginTop: 10
  },

  subTextGainWeight:{
    paddingLeft: 130,
    marginRight: 10
  },

  btnKeepWeight:{
    backgroundColor: '#136f8a',
    top: 200,
    borderRadius: 7,
    height: 90,
    marginStart: 20,
    marginEnd: 20
  },

  textKeepWeight:{
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    paddingLeft: 150,
    marginTop: 10
  },

  subTextKeepWeight:{
    paddingLeft: 110,
    marginRight: 10
  },
  
  btnContinue:{
    height: 60,
    backgroundColor: '#adb5bd',
    borderRadius: 25,
    top: 330,
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

  btnselected:{
    borderWidth: 2,
    borderColor: "#FFF",
    bottom: 180,
    borderRadius: 7,
    height: 90
  }
})