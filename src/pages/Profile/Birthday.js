import React, { useState, useContext, useEffect} from "react";
import { 
   KeyboardAvoidingView,
   View,
   Image, 
   TouchableOpacity, 
   Text, 
   StyleSheet} from "react-native";

import DatePicker from 'react-native-date-picker'
import { AuthContext } from "../../contexts/Authentication/Auth";


export default function Birthday({navigation}){

    const [myDate, setDate] = useState(new Date());
    const [birthday, setBirthday] = useState(" ");
    const {setarDataNascimento} = useContext(AuthContext);

    const atualDate = new Date();

    function verifyFields(){
      if(birthday != " "){
        setarDataNascimento(birthday);
        navigation.navigate('Gender');
      }

    }

    useEffect (() =>{
      if(myDate != new Date()){
        setBirthday(myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear())
      }
    },[myDate])

    return(
        <KeyboardAvoidingView style={styles.background}>

            <Text style={styles.textActivity}>Quando voce nasceu?</Text>

      
            <View style={styles.containerDate}>
              <DatePicker 
                textColor="#fff"
                date={myDate}
                onDateChange={setDate}
                maximumDate={new Date()}
                minimumDate={new Date("1930-12-31")}
                androidVariant="nativeAndroid"
                mode="date"
                locale="pt-BR"
              />
            </View>
            <Image 
                    style={styles.calendarImg}
                    source={require('../../assets/calendar.png')}
                />

            <TouchableOpacity
                disabled={birthday != " " && birthday != atualDate.getDate() + "/" + (atualDate.getMonth() + 1) + "/" + atualDate.getFullYear() ? false : true}
                style={[
                  styles.btnContinue, {
                    backgroundColor: birthday != " "  && birthday != atualDate.getDate() + "/" + (atualDate.getMonth() + 1) + "/" + atualDate.getFullYear() ? '#136f8a' : '#adb5bd',
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
    
      textActivity:{
        top: 50,
        color: '#FFF',
        fontSize: 30,
        marginStart: 20,
        alignSelf: 'center'
      },

      containerDate:{
        alignSelf: 'center',
        marginTop: 250,
        marginLeft: 60,
      },
      
      btnDate:{
        backgroundColor: '#136f8a',
        top: 300,
        borderRadius: 7,
        height: 90,
        marginStart: 20,
        marginEnd: 20
      },

      txtSelectedDate:{
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#FFF',
        color: '#FFF',
        width: 170,
        fontSize: 30,
        textAlign: 'center',
        alignSelf: 'center',
        top: 20
      },
     
      textDate:{
        fontSize: 22,
        color: '#FFF',
        paddingLeft: 110,
        bottom: 50

      },
      
      btnContinue:{
        height: 60,
        backgroundColor: '#adb5bd',
        borderRadius: 25,
        top: 140,
        marginStart: 20,
        marginEnd: 20
      },
    
      textContinue:{
        color: '#FFF',
        alignSelf: 'center',
        top: 15,
        fontSize: 20,
        fontWeight: 'bold'
      },

      calendarImg:{
        marginStart: 10,
        bottom: 120
    
        
      }
})