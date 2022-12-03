import React, {useState, useEffect} from "react";
import { useForm, Controller } from "react-hook-form";
import { 
   View, 
   KeyboardAvoidingView,
   Image, 
   TextInput,
   TouchableOpacity, 
   Text, 
   StyleSheet,
   Animated} from "react-native";

import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


const schema = yup.object({
    email: yup.string().email("Informe um email válido").required("Informe um email"),
    password: yup.string().min(6, "A senha precisa ter pelo menos 6 digitos").required("Informe a senha"),
    confirmPassword: yup.string().required("Voce precisa confirmar a senha")
})

export default function ForgotPassword({navigation}){

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
      })

    function handleRegister(dataRegister){
        if(dataRegister.password != dataRegister.confirmPassword){
            alert("As senhas precisam ser iguais!")
            return;
        }
        
        console.log(dataRegister)
        navigation.navigator('Home')
    }


    return(
        <KeyboardAvoidingView style={styles.background}>
            {/* <Text style={styles.firstSteps}>Agora vamos definir uma senha</Text> */}
            <View style={styles.containerLogo}>
            <Image
              source={require('../../assets/fitness.png')}
              />
            </View>

            <View>

            <Controller
                    control={control}
                    name='email'
                    render={( {field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={[
                            styles.input, {
                                borderWidth: errors.email && 2,
                                borderColor: errors.email && '#ff375b'
                            }
                            ]}
                            placeholder="Informe o seu email para a troca de senha"
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
                    name='password'
                    render={( {field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={[
                            styles.input, {
                                borderWidth: errors.password && 2,
                                borderColor: errors.password && '#ff375b'
                            }
                            ]}
                            placeholder="Digite uma senha com no minimo 6 digitos"
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

                <Controller
                    control={control}
                    name="confirmPassword"
                    render={( {field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={[
                            styles.input, {
                                borderWidth: errors.confirmPassword && 2,
                                borderColor: errors.confirmPassword && '#ff375b'
                            }
                            ]}
                            placeholder="Confirme a senha digitada"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            secureTextEntry={true}
                        />
                    )}
                />
                {
                    errors.confirmPassword && <Text style={styles.labelError}>{errors.confirmPassword?.message}</Text>
                }

                <TouchableOpacity
                    style={styles.btnNext}
                    onPress={handleSubmit(handleRegister)}
                    >
                    <Text style={styles.textNext}> Alterar Senha </Text>
                </TouchableOpacity>


            </View>
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
    justifyContent: 'center',
    bottom: 80
  },

  firstSteps:{
    top: 20,
    fontSize: 27,
    color: '#FFF',
  },
  
  input:{
    backgroundColor: '#FFF',
    // width: '100%',
    marginBottom:13,
    color:"#222",
    borderRadius:7,
    padding:10,
    bottom: 20,
    height: 45
  },
  btnNext:{
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    backgroundColor: '#c8c8c8',
    borderRadius: 7,
    height: 45,
    width: 250,
    marginLeft: 50
    // width: 250,
    // padding:
  },
  textNext:{
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 16
  },
  labelError:{
    alignSelf:'flex-start',
    color: '#ffb703',
    // marginBottom: 90,
    bottom: 30
  }

})