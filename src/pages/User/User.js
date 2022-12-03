import React  from "react";
import { 
   View,
   Text,
   TextInput, 
   StyleSheet,
   TouchableOpacity,
   ScrollView} from "react-native";

import Header from "../../components/Header";
import { useContext } from "react";

import { AuthContext } from "../../contexts/Authentication/Auth";
import { FlatList } from "react-native-gesture-handler";

export default function User({navigation}){

  const {userProfile, bodyMensure} = useContext(AuthContext)

    return(

      <View style={styles.container}>
        <Header />

        <Text style={styles.txtYourData}>Seus dados</Text>
      
        <ScrollView horizontal={true}>
          <View style={styles.containerScroll}>
            {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}> */}
              <View style={styles.containerUserProfile1}>
                <Text style={styles.txtInfoUser}>O seu objetivo é: {userProfile.currentWeight}</Text>
                <Text style={styles.txtInfoUser}>Nivel de atividade física: {userProfile.nivelActivity}</Text>
                <Text style={styles.txtInfoUser}>Gênero: {userProfile.gender}</Text>
                <Text style={styles.txtInfoUser}>Data de nascimento: {userProfile.birthday}</Text>
                <Text style={styles.txtInfoUser}>Seu peso atual: {userProfile.weight} Kg</Text>
                <Text style={styles.txtInfoUser}>Seu objetivo de peso: {userProfile.weightGoal} Kg</Text>
                <Text style={styles.txtInfoUser}>Sua altura: {userProfile.height} cm</Text>

              </View>
            
            {/* </ScrollView> */}
          </View>

          <View style={styles.containerFlatBodyMensure}>
            <FlatList 
              data={bodyMensure}
              renderItem={({item}) => {
                return(
                  <View style={styles.itensContainer}>
                    <Text >{item.bodyPart}</Text>
                    <Text>{item.mensure}</Text>
                    <Text>
                      Esta funcionando
                    </Text>
                  </View>
                )
              }}
            />
        </View>
      </ScrollView>

      {/* <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.btnConfirm}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.txtConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View> */}

      </View>

    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa',

  },

  txtYourData:{
    color: "#000",
    fontSize: 25,
    marginStart: 20,
    marginTop: 20,

  },

  containerScroll:{
    marginTop: 30,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 10,
    height: 500,
    weight: 340,
    flex: 0.9,
    backgroundColor: '#004aad',
    borderRadius: 25
  },

  txtInfoUser:{
    color: '#FFF',
    fontSize: 22,
    marginStart: 20,
    marginEnd: 10,
    marginTop: 15,
    marginBottom: 20

  },

  containerFlatBodyMensure:{
    backgroundColor: '#000',
    height: 400,
    weight: 400
  },

  
  containerButton:{
    flex: 1,
    // backgroundColor: 'red',
  },

  btnConfirm:{
    backgroundColor: '#136f8a',
    // marginTop: 400,
    // marginBottom: ,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginStart: 10,
    marginEnd: 10,
  },

  txtConfirm:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  },

})