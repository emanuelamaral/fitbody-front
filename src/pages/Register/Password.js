import React, {useState, useEffect, useRef, useContext} from "react";
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
import Home from "../Home/Home";

import api from '../../services/Api/Api'
import { AuthContext } from "../../contexts/Authentication/Auth";

const schema = yup.object({
    password: yup.string().min(6, "A senha precisa ter pelo menos 6 digitos").required("Informe a senha"),
    confirmPassword: yup.string().required("Voce precisa confirmar a senha")
})

export default function Password({navigation, route}){

  const {criarUsuario} = useContext(AuthContext);

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
      })

    function handleRegister(dataRegister){
        if(dataRegister.password != dataRegister.confirmPassword){
            alert("As senhas precisam ser iguais!")
            return;
        }
        criarUsuario(route.params.name, route.params.username, route.params.email, dataRegister.password);
        navigation.navigate("CurrentGoalWeight")
    }


    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
            <Image
              source={require('../../assets/fitness.png')}
              />
            </View>

            <View>
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
                    <Text style={styles.textNext}> Registrar </Text>
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
  },

  firstSteps:{
    top: 80,
    fontSize: 27,
    color: '#FFF',
  },
  
  input:{
    backgroundColor: '#FFF',
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
    backgroundColor: '#FFF',
    borderRadius: 25,
    height: 60,
  },
  textNext:{
    color: "#000",
    fontWeight: 'bold',
    fontSize: 16
  },
  labelError:{
    alignSelf:'flex-start',
    color: '#ffb703',
    bottom: 30
  }

})