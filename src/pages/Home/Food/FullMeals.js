import React, {useState, useEffect, useContext} from "react";
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

export default function FullMeals({navigation}){

  const {mealsProfile, foodsByUserProfile, foodsForMeal, getAllFoodsByMeal} = useContext(AuthContext);
  const [openModalFoods, setOpenModalFoods] = useState(false)

  const [mealName, setMealName] = useState("")

  function verifyFiels(){

    console.log(foodsByUserProfile[0].foodName)
    console.log(mealsProfile)
  }

  async function viewFoods(mealName, id){
    await getAllFoodsByMeal(id)
    console.log("foodsForMeal",foodsForMeal)
    setMealName(mealName)
    setOpenModalFoods(true)
  }

    return(

      <View style={styles.container}>
        <CleanHeader/>
        <View style={styles.containerMain}>
          <View style={styles.containerExplain}>
            <Text style={styles.txtExplain}>Clique na refeição para ver os alimentos relacionados a ela</Text>
          </View>
          <View style={styles.containerTitle}>
              <Text style={styles.txtMeal}>Refeição</Text>
              <Text style={styles.txtHourMeal}>Horário</Text>
          </View>

          <View style={styles.containerFlatMeal}>
            <FlatList
                data={mealsProfile}
                renderItem={({item}) => {
                    return(
                        <View style={styles.itensContainer}>
                          <TouchableOpacity onPress={() => viewFoods(item.mealName, item.mealId)}>
                            <Text style={styles.txtMealName}>{item.mealName}</Text>
                            <Text style={styles.txtMealTime}>{item.mealTime}</Text>
                          </TouchableOpacity>
                        </View>
                    )
                }}
            />
          </View>
        <Modal
              animationType="slide"
              transparent={true}
              visible={openModalFoods}
            >
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.txtTitleMeal}>{mealName}</Text>
                    
                    <View style={styles.containerTitleModalFood}>
                      <Text style={styles.txtFood}>Alimento</Text>
                      <Text style={styles.txtQuantitiy}>Quantidade(g)</Text>
                    </View>
                    
                    <View style={styles.containerFlatFoods}>
                      <FlatList
                          data={foodsForMeal}
                          renderItem={({item}) => {
                              return(
                                  <View style={styles.itensContainer}>
                                    {/* <TouchableOpacity onPress={() => viewFoods(item.mealName, item.mealId)}> */}
                                      <Text style={styles.txtFoodName}>{item.foodName}</Text>
                                      <Text style={styles.txtWeightFood}>{item.weightFood}g</Text>
                                    {/* </TouchableOpacity> */}
                                  </View>
                              )
                          }}
                      />
                    </View>

                      <TouchableOpacity
                          style={[styles.buttonSaveSheet, styles.buttonOpenSaveSheet]}
                      >
                          <Text style={styles.textStyle}>Salvar medida</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={[styles.buttonBackSheet, styles.buttonBackSheetColor]}
                          onPress={() => setOpenModalFoods(false)}
                      >
                          <Text style={styles.textStyle}>Voltar</Text>
                      </TouchableOpacity>
                  </View>
              </View>
            </Modal>


        <View style={styles.containerAddFood}>
            <TouchableOpacity
                style={styles.btnAddFood}
                onPress={() => verifyFiels()}
                >
                <Text style={styles.txtAddFood}>Ver refeições completas</Text>
            </TouchableOpacity>
        </View>
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
    marginBottom: 10
  },

  containerExplain:{
    // margin: 5
    marginBottom: 20,
    alignItems: 'center'
  },

  txtExplain:{
    fontSize: 20,
    color: '#000'
  },

  containerTitleModalFood:{
    margin: 5,
    flexDirection: 'row'
  },

  txtFood:{
    fontSize: 18,
    paddingRight: 150
  },

  txtQuantitiy:{
    fontSize: 18,
    // marginEnd: 10
  },

  containerTitle:{
    flexDirection: 'row',
    marginBottom: 20
  },

  itensContainer:{
    borderTopWidth: 2,
    borderTopColor: '#136f8a',
    // marginBottom:1
  },

  txtMeal:{
    color: '#000',
    fontSize: 18,
    width: 100,
  },

  txtHourMeal:{
    color: '#000',
    marginStart: 200,
    fontSize: 18,
  },

  txtMealName:{
    fontSize: 20,
    color: '#000',
  },

  txtMealTime:{
    fontSize: 20,
    color: '#000',
    paddingStart: 310,
    bottom: 25
  },

  containerFlatMeal:{
    // backgroundColor: '#000',
    height: 400,

  },

  containerFlatFoods:{
    height: 300,
    marginTop: 10
    // backgroundColor: '#000'
  },

  txtCaloriesActivity:{
    fontSize: 20,
    color: '#000',
    paddingStart: 300,
    bottom: 52
  },
  containerAddFood:{
    // backgroundColor: '#000',
    marginTop: 53,
    height: 80,
    justifyContent: 'center'
  },

  btnAddFood:{
    height: 60,
    backgroundColor: '#136f8a',
    borderRadius: 25,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtAddFood:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
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
    height: 500,
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

  txtTitleMeal:{
    margin: 10,
    fontSize: 22
  },

  txtFoodName:{
    fontSize: 20,
    color: '#000',
    marginStart: 10
  },

  txtWeightFood:{
    marginStart: 290,
    fontSize: 20,
    bottom: 25,
    color: '#000'
  }

})