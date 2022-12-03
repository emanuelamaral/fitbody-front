import React, {useState, useReducer, useContext} from "react";
import { 
   View, 
   KeyboardAvoidingView,
   Image, 
   TextInput,
   TouchableOpacity, 
   Text,
   StyleSheet,
   FlatList,
   Modal} from "react-native";

import CleanHeader from "../../../components/CleanHeader";
import { AuthContext } from "../../../contexts/Authentication/Auth";
import {Picker} from '@react-native-picker/picker';

export default function AddFood({navigation}){

  const {mealByName, setarFoodParaRefeicao} = useContext(AuthContext)

  const [foodName, setFoodName] = useState("")
  
  const [openModalWeightFood, setOpenModalWeightFood] = useState(false);
  const [weightFood, setWeightFood] = useState(0);

  const initialState = [];

    const reducer = (state, action) => {
        switch(action.type){
            case 'ADD':
                return [...state, action.item];
            case 'REMOVE':
                return state.filter(item => {
                    return item.id !== action.id;
                });
            default:
                return state;
        }
    };
      
    const [state, dispatch] = useReducer(reducer, initialState);


  function saveFoodQuantity(){
    dispatch({
      type: 'ADD',
      item: {
        foodName: foodName,
        weightFood: weightFood
      }
    })
    setOpenModalWeightFood(false);
    setWeightFood(0);
    setFoodName("");

  }

  async function setFoodOnMeal(){
    await setarFoodParaRefeicao(mealByName.mealId, state)
    navigation.navigate("MyMeals")
  }

    return(

    <View style={styles.container}>
        <CleanHeader/>
        <View style={styles.containerInfo}>
          <Text style={styles.txtAddFoodName}>Adicione os alimentos para o(a) </Text>
          <Text style={styles.txtMealName}>{mealByName.mealName}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.txtInputFoodName} 
              placeholder="Nome do alimento"
              value={foodName}
              onChangeText={text => {
                setFoodName(text);
              }}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setOpenModalWeightFood(true)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={openModalWeightFood}
            >
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.txtTitleModal}>Informe a o peso do alimento em gramas</Text>
                    <TextInput
                      placeholder="150"
                      keyboardType="numeric"
                      value={weightFood}
                      onChangeText={(text) => setWeightFood(text)}
                      style={styles.inputWeightFood}

                    />
                      <TouchableOpacity
                          style={[styles.buttonSaveSheet, styles.buttonOpenSaveSheet]}
                          onPress={() => saveFoodQuantity()}
                      >
                          <Text style={styles.textStyle}>Salvar medida</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={[styles.buttonBackSheet, styles.buttonBackSheetColor]}
                          onPress={() => setOpenModalWeightFood(false)}
                      >
                          <Text style={styles.textStyle}>Voltar</Text>
                      </TouchableOpacity>
                  </View>
              </View>
            </Modal>
            
          </View>
            <FlatList
                data={state}
                style={styles.viewFlatList}
                renderItem={({item}) => {
                  return(
                    <View style={styles.itensContainer}>
                      <Text style={styles.txtItens}>{item.foodName}</Text>
                      <Text style={styles.txtWeightGoalLabel}>{item.weightFood}g</Text>
                    </View>
                  )
                }}
              >
              </FlatList>
           

        </View>
        <View style={styles.containerConfirmButton}>
          <TouchableOpacity style={styles.confirmButton} onPress={() => setFoodOnMeal()}>
            <Text style={styles.textConfirm}>Confirmar</Text>
          </TouchableOpacity>
        </View>

    </View>

    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa',
  },
  containerMain:{
    flex: 1,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 10,

  },

  containerInfo:{
    marginTop: 20,
    margin: 10
  },

  txtMealName:{
    marginStart: 10,
    fontSize: 22,
    color: '#8338ec',
    // fontWeight: 'bold'
  },

  viewFlatList:{
    height: 360
  },  

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    height: 300,
    width: 350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonSaveSheet: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 50,
    marginEnd: 175,
  },
  buttonOpenSaveSheet: {
    backgroundColor: "#F194FF",

  },

  buttonBackSheet:{
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginStart: 220,
    bottom: 40
    // marginTop: 65
  },

  buttonBackSheetColor:{
    backgroundColor: "#F194FF",
  },

  textStyle:{
    color: '#fff',
    fontWeight: 'bold'
  },

  txtAddFoodName:{
    fontSize: 22,
    color: '#777777',
    marginStart: 10
  },
  inputContainer:{
    flexDirection: 'row',
    marginTop: 20,
    marginStart: 10,
    marginEnd: 5,
    marginBottom: 10
  },

  txtInputFoodName:{
    flex: 1,
    fontSize: 30,
    color: "#000",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#136f8a', 
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

  txtTitleModal:{
    fontSize: 18,
    margin: 10,
    color: '#000'
  },

  inputWeightFood:{
    marginTop: 50,
    fontSize: 45,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor:'#136f8a',
    textAlign: 'center'
  },

  itensContainer:{
    flexDirection: 'row',
  },

  txtItens:{
    fontSize: 25,
    color: "#000",
    flex: 1,
    marginVertical: 3,
    marginHorizontal: 5,
    // backgroundColor: '#aaaaaa',
    marginStart: 10
  },

  txtWeightGoalLabel:{
    fontSize: 24,
    color: '#0eb1d2',
    marginEnd: 10,
    marginTop: 5
  },


  containerConfirmButton:{

    marginTop: 25
  },

  confirmButton:{
    height: 60,
    backgroundColor: '#136f8a',
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