import React, {useState, useContext} from "react";
import { 
   KeyboardAvoidingView,
   Image, 
   TouchableOpacity, 
   Text, 
   StyleSheet,} from "react-native";

import { AuthContext } from "../../contexts/Authentication/Auth";

export default function NivelActivty({navigation}){

  const [option, setOption] = useState(0);
  const {setarNivelAtividade} = useContext(AuthContext);

  function verifyFields(){
    if(option != 0){
      if(option == 1){
        setarNivelAtividade("BAIXO")
      }
      else if(option == 2){
        setarNivelAtividade("MODERADO")
      }
      else if(option == 3){
        setarNivelAtividade("INTENSO")
      }
      navigation.navigate('Birthday');
      return;
    }
    return;
  }

  return(
    <KeyboardAvoidingView style={styles.background}>

      <Text style={styles.textActivity}>Qual o seu nível de atividade física?</Text>

      <TouchableOpacity 
        activeOpacity={0.8}
        style={[
          styles.btnLowActivity, {
            borderWidth: option == 1 ? 2 : 0,
            borderColor: option == 1 ? '#FFF' : '#FFF',
          }
        ]}
        onPress={() => {setOption(1)}}
        >


        <Text style={styles.textLowActivity}>Baixo</Text>
        <Text style={styles.subTextLowActivity}>Caminhadas leves durante o dia</Text>

        <Image 
            style={styles.lowImg}
            source={require('../../assets/sad-face.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.btnMediumActivity, {
            borderWidth: option == 2 ? 2 : 0,
            borderColor: option == 2 ? '#FFF' : '#FFF',
          }

        ]}
        onPress={() => {setOption(2)}}
        >
        <Text style={styles.textMediumActivity}>Moderado</Text>
        <Text style={styles.subTextMediumActivity}>Atividades físicas regulares ou trabalho ativo</Text>

        <Image 
            style={styles.mediumImg}
            source={require('../../assets/smiling-face.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.btnHightActivity, {
            borderWidth: option == 3 ? 2 : 0,
            borderColor: option == 3 ? '#FFF' : '#FFF',
          }
        ]}
        onPress={() => {setOption(3)}}
        >
        <Text style={styles.textHightActivity}>Intenso</Text>
        <Text style={styles.subTextHightActivity}>Atividade física intensa todos os dias</Text>

        <Image 
            style={styles.hightImg}
            source={require('../../assets/laughing.png')}
        />
      </TouchableOpacity>

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

  textActivity:{
    top: 50,
    color: '#FFF',
    fontSize: 30,
    marginStart: 20,
    alignSelf: 'center'
  },

  btnLowActivity:{
    backgroundColor: '#136f8a',
    top: 100,
    borderRadius: 7,
    height: 90,
    marginStart: 20,
    marginEnd: 20
  },

  textLowActivity:{
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    paddingLeft: 150,
    marginTop: 10
  },
  subTextLowActivity:{
    paddingLeft: 90,
    marginRight: 10
  },
  lowImg:{
    alignItems: 'center',
    bottom: '48%',
    marginStart: '3%'
  },

  btnMediumActivity:{
    backgroundColor: '#136f8a',
    top: 150,
    borderRadius: 7,
    height: 90,
    marginStart: 20,
    marginEnd: 20
  },

  textMediumActivity:{
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    paddingLeft: 150,
    marginTop: 10
  },

  subTextMediumActivity:{
    paddingLeft: 130,
    marginRight: 10
  },

  mediumImg:{
    alignItems: 'center',
    bottom: '68%',
    marginStart: '3%'
  },

  btnHightActivity:{
    backgroundColor: '#136f8a',
    top: 200,
    borderRadius: 7,
    height: 90,
    marginStart: 20,
    marginEnd: 20
  },

  textHightActivity:{
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    paddingLeft: 150,
    marginTop: 10
  },

  subTextHightActivity:{
    paddingLeft: 110,
    marginRight: 10
  },

  hightImg:{
    alignItems: 'center',
    bottom: '68%',
    marginStart: '3%'
  },
  
  btnContinue:{
    height: 60,
    backgroundColor: '#adb5bd',
    borderRadius: 25,
    top: 330,
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

  selected:{
    borderWidth: 2,
    borderColor: "#FFF",
    bottom: 180,
    borderRadius: 7,
    height: 90
  }
})