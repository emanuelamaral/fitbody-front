import React, {useState, useEffect, useContext} from "react";
import { 
   View, 
   KeyboardAvoidingView,
   Image, 
   TextInput,
   TouchableOpacity, 
   Text, 
   StyleSheet,
   Animated} from "react-native";

import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import CheckBox from "@react-native-community/checkbox";

import { AuthContext } from '../../contexts/Authentication/Auth'

const schema = yup.object({
  email: yup.string().required("Informe o seu email corretamente").email("Informe um email válido"),
  password: yup.string().required("Informe a senha").min(6, "A senha deve conter pelo menos 6 digitos")
})

export default function LogIn({navigation}){

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [isSelected, setSelection] = useState(false);

  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const {logarUsuario} = useContext(AuthContext);

  async function handleSignIn(dataLogin){
    const changePage = await logarUsuario(dataLogin.email, dataLogin.password);
    
    if(changePage == true){
      navigation.navigate("Home");
    }else{
      return;
    }
    
  }
  
  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      })
    ]).start();
  }, [])

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
            <Image
              source={require('../../assets/fitness.png')}
              />
            </View>

            <Animated.View 
              style={[
                styles.container,
                {
                  opacity: opacity,
                  transform: [
                    {translateY: offset.y}
                  ]
                }
                ]}>
              <Controller 
                control={control}
                name="email"
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                  style={[
                    styles.input, {
                      borderWidth: errors.email && 2,
                      borderColor: errors.email && '#ff375b'
                    }
                  ]}
                  placeholder="Seu Email"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  />
                )}
              />
            {
              errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>
            }
            

              <Controller 
                control={control}
                name="password"
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                  style={[
                    styles.input, {
                      borderWidth: errors.password && 2,
                      borderColor: errors.password && '#ff375b'
                    }
                  ]}
                  placeholder="Senha"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  secureTextEntry={true}
                  />
                )}
              />
            {
              errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>
            }

              <TouchableOpacity 
                style={styles.btnSubmit}
                onPress={handleSubmit(handleSignIn)}
                >
                <Text style={styles.submitText}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnRegister} 
                hitSlop={{top: -30, bottom: -20, left: -40, right: -10}}
                onPress={() => navigation.navigate('UserRegister')}
                >
                <Text style={styles.registerText}>Criar Conta</Text>
              </TouchableOpacity>

              <TouchableOpacity
               style={styles.btnForgotPassword}  
               hitSlop={{top: -30, bottom: -20, left: -40, right: -10}}
               onPress={() => navigation.navigate('ForgotPassword')}
               >
                   
                <Text style={styles.registerText}>Esqueceu a senha?</Text>
              </TouchableOpacity>

              
                
                <Text style={styles.bntRememberMe}>Lembrar de mim</Text>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                  // onResponderTerminate={}
                />
  
            </Animated.View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#136f8a'
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center'
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%'
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom:15,
    color:"#222",
    borderRadius:7,
    padding:10
  },
  btnSubmit:{
    backgroundColor: '#FFF',
    width:"90%",
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText:{
    color: '#000',
    fontSize: 18
  },
  btnRegister:{
    paddingLeft: 240,
    // marginTop: 10,
    top: 45,

    fontSize: 16
  },
  registerText:{
    color: "#FFF"
  },
  checkbox: {
    // alignItems: 'center',
    paddingLeft: 330,
    bottom: 50
  },
  bntRememberMe:{
    paddingRight: 150,
    bottom: 25,
    fontSize: 15,
    color: "#FFF"
  },
  btnForgotPassword:{
    top: 25,
    paddingRight: 195,
    fontSize: 20,


  },
  labelError:{
    alignSelf:'flex-start',
    color: '#ffb703',
    marginBottom: 4,
    bottom: 9
  }
})