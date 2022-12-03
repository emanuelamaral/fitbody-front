import React, { useContext } from "react";
import { 
   View, 
   StyleSheet,
   TextInput,
   Text,
   ScrollView,
   TouchableOpacity} from "react-native";
import CleanHeader from "../../../components/CleanHeader";
import { AuthContext } from "../../../contexts/Authentication/Auth";

export default function Training({navigation}){

  const{userProfile, getAllAtividadesFisicas} = useContext(AuthContext)

  async function verifyFields(){
      await getAllAtividadesFisicas(userProfile.userProfileId)
      navigation.navigate('MyPhysicalActivitites')
  }

    return(

      <View style={styles.container}>
        <CleanHeader/>


      <View style={styles.containerMain}>
        <Text style={styles.txtChooseActivity}>Escolha a atividade:</Text>
        <ScrollView style={styles.scrollViewActivities}>
          <View style={styles.viewActivity}>
            <TouchableOpacity 
              style={styles.btnActivity}
              onPress={() => navigation.navigate('RegisterTraining', {
                trainingOption: 'Musculação'
              })}
              >

              <Text style={styles.txtActivity}>Musculação</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewActivity}>
            <TouchableOpacity 
              style={styles.btnActivity}
              onPress={() => navigation.navigate('RegisterTraining', {
                trainingOption: 'Ciclismo'
              })}
              >
              <Text style={styles.txtActivity}>Ciclismo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewActivity}>
            <TouchableOpacity 
              style={styles.btnActivity}
              onPress={() => navigation.navigate('RegisterTraining', {
                trainingOption: 'Luta'
              })}
              >
              <Text style={styles.txtActivity}>Luta</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewActivity}>
            <TouchableOpacity 
              style={styles.btnActivity}
              onPress={() => navigation.navigate('RegisterTraining', {
                trainingOption: 'Natação'
              })}
              >
              <Text style={styles.txtActivity}>Natação</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewActivity}>
            <TouchableOpacity 
              style={styles.btnActivity}
              onPress={() => navigation.navigate('RegisterTraining', {
                trainingOption: 'Basquete'
              })}
              >
              <Text style={styles.txtActivity}>Basquete</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewActivity}>
            <TouchableOpacity 
              style={styles.btnActivity}
              onPress={() => navigation.navigate('RegisterTraining', {
                trainingOption: 'Volei'
              })}
              >
              <Text style={styles.txtActivity}>Volei</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewActivity}>
            <TouchableOpacity 
              style={styles.btnActivity}
              onPress={() => navigation.navigate('RegisterTraining', {
                trainingOption: 'Outros'
              })}
              >
              <Text style={styles.txtActivity}>Outros</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

        <View style={styles.containerMyActivity}>
          <TouchableOpacity
           style={styles.btnMyActivity}
           onPress={() => verifyFields()}>
            <Text style={styles.txtMyActivty}>Minhas atividades</Text>
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
  containerInputActivity:{
    height: 150,
    justifyContent: 'center'
  },
  txtinputActivity:{
    color: '#000',
    fontSize: 23,
  },

  inputActivity:{
    height: 45,
    backgroundColor: "#a8a8a8",
    fontSize: 18
  },

  txtChooseActivity:{
    fontSize: 23,
    color: '#000',
    top: 30
  },

  scrollViewActivities:{
    marginTop: 80

  },

  viewActivity:{
    marginBottom: 50,
    justifyContent: 'center'
  },

  btnActivity: {
    borderBottomWidth: 3,
    borderColor: "#136f8a",
    alignItems: 'center'
  },

  txtActivity:{
    color: '#000',
    fontSize: 22
  },

  containerMyActivity:{
    height: 80,
    justifyContent: 'center'
  },

  btnMyActivity:{
    height: 60,
    backgroundColor: '#136f8a',
    borderRadius: 25,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtMyActivty:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
  
})