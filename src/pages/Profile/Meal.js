import React, {useState, useContext, useReducer} from "react";
import {  
   KeyboardAvoidingView,
   TouchableOpacity, 
   Text, 
   StyleSheet,
   TextInput,
   View,
   ScrollView,
   FlatList
   } from "react-native";

import uuid from 'react-native-uuid';

import DatePicker from "react-native-date-picker";

import { AuthContext } from "../../contexts/Authentication/Auth";

export default function Meal({navigation}){

    const {setarRefeicaoParaPerfil} = useContext(AuthContext)

    const [timeMeal, setTimeMeal] = useState(new Date());
    const [timeFormated, setTimeFormated] = useState(" ");


    let selectedTime = " "

    const changeSelectedTime = (date) => {

      selectedTime = date.toString()
      setTimeMeal(date);
      setOpen(false);
      setTimeFormated((timeMeal.toString().split(" ")[4].split(":")[0]) + ":" + (timeMeal.toString().split(" ")[4].split(":")[1]))
      dispatch({
        type: 'ADD', 
        item: {
            id: uuid.v4(), 
            mealName: mealsName,
            mealTime: (selectedTime.split(" ")[4].split(":")[0]) + ":" + (selectedTime.split(" ")[4].split(":")[1]),
            // check: false,
          },
        });
      setMealsName('');
    }

    const initialState = [];

    const reducer = (state, action) => {
        switch(action.type){
            case 'ADD':
                return [...state, action.item];
            case 'REMOVE':
                return state.filter(item => {
                    return item.id !== action.id;
                });
            case 'ADD HOUR':
              return state.filter(item => {
                  return item.id !== action.id;
              });
            default:
                return state;
        }
    };
        
    const [mealsName, setMealsName] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    function verifyFields(){

        setarRefeicaoParaPerfil(state);
        navigation.navigate("Home");
        
    }

    const [open, setOpen] = useState(false);

    return(
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.txtNameAndHour}>Qual o nome e o horario das suas refeições?</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.txtInputNameMeal} 
                    placeholder="Nome da refeição"
                    value={mealsName}
                    onChangeText={text => {
                        setMealsName(text);
                    }}
                />
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={() => {
                      if(mealsName != "")
                        setOpen(true)
                        
                    }}>
                    <DatePicker 
                            modal
                            open={open}
                            date={timeMeal}
                            mode='time'
                            locale='pt-BR'
                            title="Horário das refeições"
                            is24hourSource="locale"
                            confirmText="Confirmar"
                            cancelText="Cancelar"
                            onConfirm={(date) => changeSelectedTime(date)}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                    <Text style={styles.addButtonText}>+</Text>
                    
                </TouchableOpacity>
            </View>
            <FlatList
                data={state}
                renderItem={({item}) => {
                    return(
                        <View style={styles.itensContainer}>
                            <Text style={styles.txtItens}>{item.mealName}</Text>
                            
                              <Text style={styles.txtHourButton}>{item.mealTime}</Text>

                        </View>
                    )
                }}
            />

            <View style={styles.containerConfirmButton}>
                <TouchableOpacity 
                    disabled={ timeFormated == " " ? true : false}
                    style={[
                      styles.confirmButton, {
                        backgroundColor: timeFormated == " " ? '#aaaaaa' : '#136f8a'
                      }
                    ]}
                    onPress={() => verifyFields()}>
                    <Text style={styles.textConfirm}>Confirmar</Text>
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

  txtNameAndHour:{
    color: "#fff",
    top: 80,
    marginStart: 10,
    fontSize: 25

  },

  inputContainer:{
    flexDirection: 'row',
    marginTop: 120,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 10
  },

  txtInputNameMeal:{
    flex: 1,
    fontSize: 30,
    color: "#FFF",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#FFF", 
  },

  addButton:{
    marginHorizontal: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },

  addButtonText:{
    color: '#38b000',
    fontSize: 60,
  },

  itensContainer:{
    flexDirection: 'row'
  },

  txtItens:{
    fontSize: 25,
    color: "#FFF",
    flex: 1,
    marginVertical: 3,
    marginHorizontal: 5,
    // backgroundColor: '#aaaaaa',
    marginStart: 10
  },

  hourButton:{
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 19
  },

  txtHourButton:{
    fontSize: 18,
    color: '#0eb1d2',
    marginEnd: 10,
    marginTop: 5
  },

  containerConfirmButton:{

    marginBottom: 20,
  },

  confirmButton:{
    height: 60,
    backgroundColor: '#adb5bd',
    borderRadius: 25,
    marginStart: 20,
    marginEnd: 20,
  },

  textConfirm:{
    color: '#FFF',
    alignSelf: 'center',
    top: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
})