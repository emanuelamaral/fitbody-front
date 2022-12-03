import React, { useContext } from "react";
import { 
   View, 
   StyleSheet,
   TouchableOpacity,
   Text,
   ScrollView} from "react-native";
import CleanHeader from "../../../components/CleanHeader";
import { AuthContext } from "../../../contexts/Authentication/Auth";

export default function Food({navigation}){

  const {getAllMealsByUserProfileId, userProfile, getAllFoodByUserProfile} = useContext(AuthContext)

  async function myMeals(){
    await getAllMealsByUserProfileId(userProfile.userProfileId)
    navigation.navigate("MyMeals")
  }
    return(

      <View style={styles.container}>
        <CleanHeader/>


        <View style={styles.containerMain}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollMain}>
              <View style={styles.viewFirstPage}>

                <View style={styles.containerCalorie}>
                  <Text style={styles.txtCalorie}>Calorias</Text>

                  <View style={styles.progressCalorie}>
                    <Text style={styles.txtConsume}>Consumir</Text>
                    <Text style={styles.txtNumberOfCalories}>4000kcal</Text>
                  </View>
                  
                </View>
                <View style={styles.containerMyMeals}>
                  <TouchableOpacity
                    style={styles.btnMyMeals}
                    onPress={() => myMeals()}>
                    <Text style={styles.txtMyMeals}>Minhas refeições</Text>
                  </TouchableOpacity>
                </View>

              </View>
              <View style={styles.containerMacronutrients}>
                <Text style={styles.txtMacro}>Macronutrientes</Text>
                <View style={styles.containerInfoMacro}>

                  <View style={styles.containerCarbohydrate}>
                    <Text style={styles.txt0g}>0g</Text>
                  </View>
                  <Text style={styles.txtCarbohydrate}>Carboidratos</Text>

                  <View style={styles.containerProtein}>
                    <Text style={styles.txt0g}>0g</Text>
                  </View>
                  <Text style={styles.txtProtein}>Proteína</Text>
                 

                  <View style={styles.containerFat}>
                    <Text style={styles.txt0g}>0g</Text>
                  </View>
                  <Text style={styles.txtFat}>Gordura</Text>
                  
                 
                </View>
                
              </View>

              <View style={styles.containerSpace}>
              </View>
            </ScrollView>
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

  scrollMain:{
    maxHeight: '100%',
    marginTop: 50,
    // backgroundColor: '#000',
    // marginBottom: 50
  },

  viewFirstPage:{
    // backgroundColor: '#00FF',
    // height: 900
  },

  containerCalorie:{
    backgroundColor: '#006400',
    height:300,
    width: 300,
    marginTop: 26,
    marginStart: 35,
    borderRadius: 20
  },

  txtCalorie:{
    color: '#FFF',
    alignSelf: 'center',
    fontSize: 26,
    marginTop: 10,
    fontWeight: 'bold'
  },

  progressCalorie:{
    marginTop: 50,
    height: 160,
    width: 160,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 160/2,
    borderColor: '#ff5400',
    borderWidth: 5
  },

  txtConsume:{
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center',
  },

  txtNumberOfCalories:{
    color: '#FFF',
    fontSize: 22,
    alignSelf: 'center'
  },

  containerMacronutrients:{
    backgroundColor: '#3c1b43',
    height:300,
    width: 300,
    marginTop: 26,
    marginStart: 35,
    borderRadius: 20
  },

  txtMacro:{
    color: "#FFF",
    fontSize: 26,
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold'
  },

  containerInfoMacro:{
    flex: 1,
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10
  },

  containerCarbohydrate:{
    top: 89,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 10,
    borderRadius: 70/2,
    borderColor: '#1fc7ff',
    borderWidth: 3

  },

  containerProtein:{
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 105,
    borderRadius: 70/2,
    borderColor: '#ccff33',
    borderWidth: 3
  },

  containerFat:{
    bottom: 89,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 200,
    borderRadius: 70/2,
    borderColor: '#e71d36',
    borderWidth: 3
  },

  txt0g:{
    color: '#FFF',
    fontSize: 16
  },
  
  txtCarbohydrate:{
    top: 90,
    fontSize: 14,
    marginStart: 8,
    color: '#FFF'
  },

  txtProtein:{
    fontSize: 14,
    marginStart: 113,
    color: '#FFF'
  },

  txtFat:{
    fontSize: 14,
    marginStart: 210,
    color: '#FFF',
    bottom: 90,

  },

  containerSpace:{
    marginStart: 35
  },

  scrollMeals:{
    maxHeight: 150,
    marginTop: 60

  },

  viewMeal1:{
    backgroundColor: '#90e0ef',
    height: 70,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },

  viewMeal2:{
    backgroundColor: '#ade8f4',
    height: 70
  },

  viewMeal3:{
    backgroundColor: '#90e0ef',
    height: 70
  },

  viewMeal4:{
    backgroundColor: '#ade8f4',
    height: 70
  },

  viewMeal5:{
    backgroundColor: '#90e0ef',
    height: 70
  },

  viewMeal6:{
    backgroundColor: '#ade8f4',
    height: 70
  },

  viewMeal7:{
    backgroundColor: '#90e0ef',
    height: 70
  },
  
  viewMeal8:{
    backgroundColor: '#ade8f4',
    height: 70
  },

  btnMeal:{
    marginStart: 10,
    marginTop: 10,
    height: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#000",
    width: 110,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtMeal:{
    color: '#000',
    fontSize: 18,
  },

  txtHourMeal:{
    color: '#000',
    marginStart: 290,
    fontSize: 18,
    bottom: 40
  },

  containerMyMeals:{
    height: 80,
    justifyContent: 'center'
  },

  btnMyMeals:{
    height: 60,
    backgroundColor: '#136f8a',
    borderRadius: 25,
    marginStart: 50,
    marginEnd: 20,
    marginTop: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtMyMeals:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
  
})