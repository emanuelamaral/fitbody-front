import React, {useState, useEffect, useContext} from "react";
import { 
   View, 
   KeyboardAvoidingView,
   Image, 
   TextInput,
   TouchableOpacity, 
   Text, 
   StyleSheet,
   FlatList} from "react-native";

import CleanHeader from "../../../components/CleanHeader";
import { AuthContext } from "../../../contexts/Authentication/Auth";

export default function MyMeals({navigation}){
  
  const {mealsProfile, foodsByUserProfile, getAllFoodByUserProfile} = useContext(AuthContext);

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

  

    return(

      <View style={styles.container}>
        <CleanHeader/>
        <View style={styles.containerExplain}>
          <Text style={styles.txtExplain}>Clique na refeição para adicionar os alimentos à ela</Text>
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
    margin: 10
  },

  txtExplain:{
    fontSize: 20,
    color: '#000'
  },

  containerFlatMeals:{
    // backgroundColor: '#000',
    height: 400
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
  }

})