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

export default function MyPhysicalActivitites(){

    const {physicalActivity} = useContext(AuthContext);

    return(

      <View style={styles.container}>
        <CleanHeader/>
        

      <View style={styles.containerMain}>
        <Text style={styles.txtCurrentActiviy}></Text>
        <View style={styles.containerTitle}>
            <Text style={styles.txtActivity}>Atividade</Text>
            <Text style={styles.txtTime}>Tempo(m)</Text>
            <Text style={styles.txtCalories}>Calorias(kcal)</Text>
        </View>

        <View>
        <FlatList
                data={physicalActivity}
                renderItem={({item}) => {
                    return(
                        <View style={styles.itensContainer}>
                            <Text style={styles.txtNameActivity}>{item.typeOfActivity}</Text>
                            <Text style={styles.txtTimeActivity}>{item.time}</Text>
                            <Text style={styles.txtCaloriesActivity}>{item.calories}</Text> 
                            
                        </View>
                    )
                }}
            />

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

  containerTitle:{
    flexDirection: 'row',
    marginBottom: 20
  },

  itensContainer:{
    borderTopWidth: 2,
    borderTopColor: '#136f8a'
  },

  txtActivity:{
    color: '#000',
    fontSize: 18,
    width: 100,
  },

  txtTime:{
    color: '#000',
    marginLeft: 40,
    fontSize: 18,
    width: 100,
  },

  txtCalories:{
    color: '#000',
    marginLeft: 15,
    fontSize: 18,
  },

  txtNameActivity:{
    fontSize: 20,
    color: '#000',
  },

  txtTimeActivity:{
    fontSize: 20,
    color: '#000',
    paddingStart: 180,
    bottom: 25
  },

  txtCaloriesActivity:{
    fontSize: 20,
    color: '#000',
    paddingStart: 300,
    bottom: 52
  }

})