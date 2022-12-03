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
    name: yup.string().required("Informe o seu nome"),
    username: yup.string().required("Informe o nome de usuario ou apelido"),
    email: yup.string().email("Informe um email válido").required("Informe o seu email")
})

export default function UserRegister({navigation}){

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
      })

    function handleRegister(data){
       navigation.navigate('Password', data)
    }
    

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
            <Image
              source={require('../../assets/fitness.png')}
              />
            </View>

            <View style={styles.containterForm}>
                <Controller
                    control={control}
                    name='name'
                    render={( {field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={[
                            styles.input, {
                                borderWidth: errors.name && 2,
                                borderColor: errors.name && '#ff375b'
                            }
                            ]}
                            placeholder="Nome"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                />
                {
                    errors.name && <Text style={styles.labelError}>{errors.name?.message}</Text>
                }

                <Controller
                    control={control}
                    name='username'
                    render={( {field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={[
                            styles.input, {
                                borderWidth: errors.username && 2,
                                borderColor: errors.username && '#ff375b'
                            }
                            ]}
                            placeholder="Nome de usuario ou apelido"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                />
                {
                    errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>
                }

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
                            placeholder="Email"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                />
                {
                    errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>
                }

                <TouchableOpacity
                    style={styles.btnNext}
                    onPress={handleSubmit(handleRegister)}
                    >
                    <Text style={styles.textNext}> Prosseguir </Text>
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

  containterForm:{
    top: 20
  },
  
  input:{
    backgroundColor: '#FFF',
    width: 350,
    marginBottom:13,
    color:"#222",
    borderRadius:7,
    padding:10,
    bottom: 50,
    height: 45
  },

  btnNext:{
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
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
    // marginBottom: 90,
    bottom: 60
  }

})