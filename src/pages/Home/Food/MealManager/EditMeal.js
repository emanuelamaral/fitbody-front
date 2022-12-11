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

import CleanHeader from "../../../../components/CleanHeader";
import { AuthContext } from "../../../../contexts/Authentication/Auth";
import DatePicker from 'react-native-date-picker'

export default function EditMeal({navigation}){
  
    const {mealsProfile, foodsByUserProfile, getAllFoodByUserProfile} = useContext(AuthContext);

    const [open, setOpen] = useState(false)

    const [modalEditMeal, setModalEditMeal] = useState(false)

    const [newMealName, setNewMealName] = useState("")
    const [currentMealName, setCurrentMealName] = useState("")
    const [newMealTime, setNewMealTime] = useState("");
    const [currentMealTime, setCurrentMealTime] = useState(0)



    async function verifyFiels(){

    }

    const {getRefeicaoPorNome} = useContext(AuthContext);

    const [selectTime, setSelectTime]= useState(new Date())
    const [timeMeal, setTimeMeal] = useState("");
    const [timeFormated, setTimeFormated] = useState(" ")
    const changeSelectedTime = (date) => {
        setSelectTime(date);
        setOpen(false);
        console.log("selectTime", selectTime)
        console.log((selectTime.toString().split(" ")[4].split(":")[0]) + ":" + (selectTime.toString().split(" ")[4].split(":")[1]))
        setTimeFormated((selectTime.toString().split(" ")[4].split(":")[0]) + ":" + (selectTime.toString().split(" ")[4].split(":")[1]))
        let selectTimeAux = (selectTime.toString().split(" ")[4].split(":")[0]) + ":" + (selectTime.toString().split(" ")[4].split(":")[1])
        console.log("selectTimeAux", selectTimeAux)
        setNewMealTime(timeFormated)
        console.log("newMealTime", newMealTime)

     }


    function editMeals(currentMealName, currentMealTime){
        setCurrentMealName(currentMealName)
        setCurrentMealTime(currentMealTime)
        setModalEditMeal(true)
    }

    return(

        <View style={styles.container}>
        <CleanHeader/>
        <View style={styles.containerExplain}>
            <Text style={styles.txtExplain}>Clique na refeição para poder editá-la</Text>
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
                            <TouchableOpacity onPress={() => editMeals(item.mealName, item.mealTime)}>
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
                    <Text style={styles.txtAlterData}>Informe o novo nome e horário da sua refeição</Text>
                    <View style={styles.viewEditMeal}>
                        
                        <TextInput 
                            value={newMealName}
                            placeholder={currentMealName}
                            style={styles.txtInputMealName}
                        />
                        <TouchableOpacity 
                        style={styles.btnMealTime}
                        onPress={() => {
                            setOpen(true) 
                        }}>
                        <DatePicker 
                                modal
                                open={open}
                                date={selectTime}
                                mode='time'
                                locale='pt-BR'
                                title="Horário das refeições"
                                is24hourSource="locale"
                                confirmText="Confirmar"
                                cancelText="Cancelar"
                                onConfirm={(date) => changeSelectedTime(date)}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                    <Text style={styles.txtMealTimeBtn}>{timeFormated != " " ? timeFormated : currentMealTime}</Text>
                </TouchableOpacity>

                    </View>
                    
                    <TouchableOpacity
                        style={[styles.buttonSaveMensure, styles.buttonOpenSaveMensure]}
                    >
                        <Text style={styles.textStyle}>Salvar</Text>
                    </TouchableOpacity>
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
                    style={styles.btnBack}
                    onPress={() => verifyFiels()}
                    >
                    <Text style={styles.txtAddFood}>Voltar</Text>
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

  containerAddFood:{
    // backgroundColor: '#000',
    height: 220,
    marginTop: 30,
    justifyContent: 'center'
  },

  btnBack:{
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

  viewEditMeal:{
    //  backgroundColor: '#000',
     height: 300,
     width: 300,
     margin: 10,
     // alignItems: 'center',
    //  justifyContent: 'center'
  },

  btnMealTime:{
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
    top: 50

  },

  txtMealTimeBtn:{
    fontSize: 30
  },

  txtInputMealName:{
    fontSize: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#136f8a'
  },

  txtAlterData:{
    fontSize: 20,
    margin: 10
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

  buttonSaveMensure: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 35,
    marginEnd: 170,
},

buttonOpenSaveMensure: {
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