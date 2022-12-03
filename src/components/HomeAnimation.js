import React, {useState, useRef, useEffect} from "react";
import { 
   View, 
   StyleSheet,
   TouchableOpacity,
   Text} from "react-native";

import Lottie from 'lottie-react-native'

export default function HomeAnimation(){

  const[save, setSave] = useState(true);
  const animations = useRef(null)
  const firstRun = useRef(true)

  useEffect(() =>{
    if(firstRun.current){
      if(save){
        animations.current.play(16, 16);
      }else{
        animations.current.play(0, 0);
      }

      firstRun.current = false;
      
    }else if(save){
      animations.current.play(0, 16)
    }else{
      animations.current.play(16, 0)
    }
  }, [save])
    return(
        <View>
          <TouchableOpacity style={styles.teste} onPress={() => setSave(!save)}>
            <Lottie
              source={require('../../animations/home.json')}
              autoPlay={false}
              loop={false}
              style={{ width: 60, height: 60}}
              resizeMode='cover'
              ref={animations}


            />
            {/* <Text> o botao esta aqui</Text> */}
          </TouchableOpacity>

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
    marginBottom: 10,
    // backgroundColor: '#000',
  },
  teste:{
    alignSelf: 'center',
    // backgroundColor: '#000',
    width: 100,
    height: 100,
    marginTop: 200,
  }
  
})