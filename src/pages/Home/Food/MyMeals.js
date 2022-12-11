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

export default function MyMeals({navigation}){
  
  const {mealsProfile, foodsByUserProfile, getAllFoodByUserProfile} = useContext(AuthContext);

  const [modalEditMeal, setModalEditMeal] = useState(false)

  async function verifyFiels(){
    food = foodsByUserProfile
    console.log(food)
    if(food.length != 0){
      navigation.navigate('FullMeals')
    }
    
  }

  const {getRefeicaoPorNome} = useContext(AuthContext);

  async function nextPage(mealName){
    await getRefeicaoPorNome(mealName)
    navigation.navigate("AddFood")
  }

  function editMeals(){
    navigation.navigate('EditMeal')
  }

    return(

      <View style={styles.container}>
        <CleanHeader/>
        <View style={styles.containerExplain}>
          <Text style={styles.txtExplain}>Clique na refeição que deseja editar</Text>
        </View>

        <View style={styles.containerMain}>
          <View style={styles.containerTitle}>
              <Text style={styles.txtMeal}>Refeição</Text>
              <Text style={styles.txtHourMeal}>Horário</Text>
          </View>

          <View style={styles.containerFlatMeals}>
            <FlatList
                data={mealsProfile}
                renderItem={({item}) => {
                    return(
                        <View style={styles.itensContainer}>
                          <TouchableOpacity onPress={() => nextPage(item.mealName)}>
                            <Text style={styles.txtMealName}>{item.mealName}</Text>
                            <Text style={styles.txtMealTime}>{item.mealTime}</Text>
                          </TouchableOpacity>
                        </View>
                    )
                }}
            />
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalEditMeal}
              >
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>

                      <Text style={styles.txtOptionModal}>Escolha a ação que deseja fazer</Text>

                      <View style={styles.viewOptionModal}>
                        <TouchableOpacity 
                          style={styles.btnOptionModal}
                          onPress={() => editMeals()}>
                          <Text style={styles.txtOptionBtnModal}>Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnOptionModal}>
                          <Text style={styles.txtOptionBtnModal}>Remover</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnOptionModal}>
                          <Text style={styles.txtOptionBtnModal}>Adicionar</Text>
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity
                          style={[styles.buttonBackSheet, styles.buttonBackSheetColor]}
                          onPress={() => setModalEditMeal(!modalEditMeal)}
                      >
                          <Text style={styles.textStyle}>Voltar</Text>
                      </TouchableOpacity>

                  </View>
              </View>
            </Modal>
          </View>

          <View style={styles.containerAddFood}>
              <TouchableOpacity
                style={styles.btnEditMeal}
                onPress={() => setModalEditMeal(true)}
              >
                <Text style={styles.txtAddFood}>Editar Refeições</Text>
              </TouchableOpacity>

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
    marginBottom: 10,

  },

  containerExplain:{
    margin: 10
  },

  txtExplain:{
    fontSize: 20,
    color: '#000'
  },

  containerFlatMeals:{
    // backgroundColor: '#000',
    height: 300
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

  txtCaloriesActivity:{
    fontSize: 20,
    color: '#000',
    paddingStart: 300,
    bottom: 52
  },
  containerAddFood:{
    // backgroundColor: '#000',
    height: 220,
    marginTop: 30,
    justifyContent: 'center'
  },

  btnAddFood:{
    height: 60,
    backgroundColor: '#136f8a',
    borderRadius: 25,
    marginStart: 20,
    marginEnd: 20,
    // marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtAddFood:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },

  btnEditMeal:{
    height: 60,
    backgroundColor: '#136f8a',
    borderRadius: 25,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtOptionModal:{
    fontSize: 20,
    marginTop: 10
  },

  viewOptionModal:{
    // backgroundColor: '#000',
    height: 250,
    width: 250,
    margin: 10,
    // alignItems: 'center',
    justifyContent: 'center'
  },

  btnOptionModal:{
    height: 60,
    backgroundColor: '#ef233c',
    borderRadius: 25,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 2,
  },

  txtOptionBtnModal:{
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
    height: 400,
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
    marginTop: 65,
    marginEnd: 120,

  },

  buttonOpenSaveSheet: {
    backgroundColor: "#F194FF",
  },

  buttonBackSheet:{
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    top: 40
    // marginStart: 220,
    // bottom: 40
    // // marginTop: 65
  },

  buttonBackSheetColor:{
    backgroundColor: "#F194FF",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

})