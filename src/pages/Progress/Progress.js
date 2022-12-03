import React, {useContext, useState} from "react";
import { 
  View, 
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity} from "react-native";

import Header from "../../components/Header";
import { AuthContext } from "../../contexts/Authentication/Auth";

export default function Progress(){

  const {userProfile} = useContext(AuthContext)
  const [currentWeight, setCurrentWeight] = useState(0)

  return(

    <View style={styles.container}>
      <Header />
      <Text style={styles.labelYourProgress}>Seu progresso</Text>

      <ScrollView style={styles.scrollMore} horizontal={true} showsHorizontalScrollIndicator={false}>

        <View style={styles.areaWeight}>

          <Text style={styles.txtInfoWeight}>Peso Inicial</Text>
          <Text style={styles.txtWeightKg}>Kg</Text>
          <Text style={styles.txtLabelInitialWeight}>{userProfile.weight}</Text>

          <Text style={styles.txtInfoWeight}>Objetivo</Text>
          <Text style={styles.txtWeightKg}>Kg</Text>
          <Text style={styles.txtLabelGoalWeight}>{userProfile.weightGoal}</Text>

          <Text style={styles.txtInfoWeight}>Peso Atual</Text>
          <Text style={styles.txtWeightKg}>Kg</Text>
          {/* <Text style={styles.txtLabelCurrentWeight}></Text> */}

          <TextInput
            style={styles.txtLabelCurrentWeight}
            value={currentWeight}
            onChangeText={(text) => {
              setCurrentWeight(text)
            }}
          />

          {/* <View style={styles.containerConfirmButton}>
            <TouchableOpacity 
              style={styles.confirmButton}
              >
              <Text style={styles.txtConfirmButton}>
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>
     */}
        </View>

      <View style={styles.areaWaterConsume}>
        {/* <Text style={styles.txtInformBodyMensure}>Informe as suas medidas:</Text> */}

        <Text style={styles.txtWaterConsume}>{`Consumo de \nágua diário`}</Text>
        <Text style={styles.txtGoalConsumeWaterL}>L</Text>
        <Text style={styles.txtInfoWaterConsume}></Text>
        <Text style={styles.txtWaterConsume}>{`Total de água \njá consumida\nno dia`}</Text>
        <Text style={styles.txtConsumeWaterL}>L</Text>

        <TextInput style={styles.txtInputWaterConsumed}></TextInput>

      </View>

      <View style={styles.viewSpace}>
      </View>

    </ScrollView>
  </View>

    )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#fafafa',
  },

  labelYourProgress:{
    fontSize: 25,
    color: '#000',
    marginStart: 10,

  },

  scrollMore:{

      // maxHeight: 700,
      marginBottom: 14,
      marginTop: 18,
      paddingEnd: 14,
      paddingStart: 14,
  },

  areaWeight:{
      // flex: 2,
      backgroundColor: '#004aad',
      width: 340,
      borderRadius: 25,
      fontWeight: 'bold',
      marginEnd: 10,
      height: 550
  },

  txtInfoWeight:{
      fontSize: 25,
      color: '#FFF',
      marginStart: 25,
      marginTop: 25

  },

  txtLabelInitialWeight:{
    backgroundColor: '#004aad',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: 45,
    height: 45,
    marginStart: 230,
    bottom: 75,
    borderColor: '#FFF',
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',


  },

  txtLabelGoalWeight: {
    backgroundColor: '#004aad',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: 45,
    height: 45,
    marginStart: 230,
    bottom: 75,
    borderColor: '#FFF',
    textAlign: 'center',
    fontSize: 30,
    color: '#FFF',
  },

  txtLabelCurrentWeight:{
    backgroundColor: '#004aad',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: 45,
    height: 45,
    marginStart: 230,
    bottom: 75,
    borderColor: '#FFF',
    textAlign: 'center',
    fontSize: 25,
    color: '#FFF',
  },


  txtWeightKg:{
      fontSize: 25,
      color: '#FFF',
      marginStart: 290,
      // top: 130
      bottom: 35
  },

  areaWaterConsume:{
      backgroundColor: '#390052',
      width: 340,
      borderRadius: 25,
      height: 550
  },

  txtWaterConsume:{
      fontSize: 25,
      color: "#FFF",
      marginTop: 80,
      marginStart: 10
  },

  txtConsumeWaterL:{
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
    marginStart: 300,
    bottom: 60,
  },

  txtGoalConsumeWaterL:{
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
    marginStart: 300,
    bottom: 50,
  },

  txtInfoWaterConsume:{
    backgroundColor: '#390052',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: 45,
    height: 45,
    marginStart: 230,
    bottom: 90,
    borderColor: '#FFF',
    textAlign: 'center'


  },

  txtInputWaterConsumed:{
    backgroundColor: '#390052',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: 45,
    height: 45,
    marginStart: 230,
    bottom: 100,
    borderColor: '#FFF'
  },

  viewSpace:{
      marginStart: 30
  },
  
  containerConfirmButton:{
    // backgroundColor: '#000',
    // marginBottom: 10
    marginTop: 50
  },

  confirmButton:{
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#136f8a',
      borderRadius: 25,
      margin: 10
  },

  txtConfirmButton:{
      color:'#FFF',
      fontSize: 20,
      fontWeight: 'bold'
      
  }
})