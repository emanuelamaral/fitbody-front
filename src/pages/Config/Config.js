import React from "react";
import { 
   View, 
   StyleSheet} from "react-native";

import Header from "../../components/Header";

export default function Config(){

    return(

      <View style={styles.container}>
        <Header />


      <View style={styles.containerMenu}>

      </View>

      </View>

    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa',
  },
  containerMenu:{
    flex: 1,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
  
})