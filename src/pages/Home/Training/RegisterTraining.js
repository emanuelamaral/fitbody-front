import React, {useState, useEffect, useContext} from "react";
import { 
   View, 
   KeyboardAvoidingView,
   Image, 
   TextInput,
   TouchableOpacity, 
   Text, 
   StyleSheet} from "react-native";

import CleanHeader from "../../../components/CleanHeader";
import { AuthContext } from "../../../contexts/Authentication/Auth";

export default function RegisterTraining({route}){

  const{setarAtividadeFisica} = useContext(AuthContext);

  // const[optionActivity, setOptionActivity] = useState(" ")

  const[time, setTime] = useState(0);
  const[calories, setCalories] = useState(0);

  let optionActivity = route.params.trainingOption;
  optionActivity.toString().toUpperCase();

  function verifyFields(){

    setarAtividadeFisica(optionActivity.toString().toUpperCase(), time, calories)
  }
    return(

      <View style={styles.container}>
        <CleanHeader/>
        

      <View style={styles.containerMain}>
        <Text style={styles.txtCurrentActiviy}>{route.params.trainingOption}</Text>

        <View style={styles.viewInputTimeActivities}>

            <Text style={styles.txtInfoInput}>Tempo</Text>
            <TextInput 
              style={styles.txtInput}
              onChangeText={(value) => setTime(value)}
            />
            <Text style={styles.txtFormat}>Minutos</Text>
        </View>

        <View style={styles.viewInputCaloriesActivities}>
            <Text style={styles.txtInfoInput}>Calorias Queimadas</Text>
            <TextInput
              style={styles.txtInput}
              onChangeText={(value) => setCalories(value)}
            />
            <Text style={styles.txtFormat}>Kcal</Text>

        </View>

        <View style={styles.viewConfirm}>
            <TouchableOpacity
              style={styles.btnConfirm}
              onPress={() => verifyFields()}
            >
                <Text style={styles.txtConfirm}>Confirmar</Text>
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

  txtCurrentActiviy:{
    fontSize: 26,
    color: "#000",
    marginTop: 30,
    marginBottom: 20
  },

  viewInputTimeActivities:{
    flex: 1,
    // backgroundColor: "#000",
    justifyContent: 'center'
  },

  viewInputCaloriesActivities:{
    flex: 1,

  },

  txtInfoInput:{
    color: '#000',
    fontSize: 20,
  },

  txtInput:{
    borderBottomWidth: 2,
    width: 120,
    borderColor: "#136f8a",
    height: 45,
    fontSize: 20,
    // marginBottom: 20
  },

  txtFormat:{
    marginStart: 130,
    bottom: 12,
    color: '#000'
  },

  viewConfirm:{
    // backgroundColor: '#000',
    flex: 0.7,

  },

  btnConfirm:{
    height: 60,
    backgroundColor: '#136f8a',
    borderRadius: 25,
    bottom: 20,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtConfirm:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }

})