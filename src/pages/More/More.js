import React, {useState, useContext, useReducer} from "react";
import { 
   View, 
   StyleSheet,
   Text,
   ScrollView,
   TextInput,
   TouchableOpacity,
   Modal,
   Alert,
   FlatList} from "react-native";

import Header from "../../components/Header";
import { AuthContext } from "../../contexts/Authentication/Auth";

import {Picker} from '@react-native-picker/picker';

import DatePicker from "react-native-date-picker";


export default function More(){

    const [selectedActivity, setSelectedActivity] = useState("Musculação");
    const [modalVisible, setModalVisible] = useState(false);
    const [dayOfWeek, setDayOfWeek] = useState(" ");
    const [timeOfExercise, setTimeOfExercise] = useState(0);
    const [hourOfTraining, setHourOfTraining] = useState(new Date());
    const [nameOfExercise, setNameOfExercise] = useState("")
    const [allTrainingSheet, setAllTrainingSheet] = useState({})

    const [viewSheetTraining, setViewSheetTraining] = useState(false)

    const [timeFormated, setTimeFormated] = useState(" ");
    const [open, setOpen] = useState(false);

    const {setarFichaDeTreino, getAllTrainingSheetByUserProfileAndDayOfWeek,setarMedidasCorporais} = useContext(AuthContext)

    let allTrainingSheetByUserByDayOfWeek = []

    const changeSelectedTime = (date) => {
        setHourOfTraining(date);
        setOpen(!open);
        setTimeFormated((hourOfTraining.toString().split(" ")[4].split(":")[0]) + ":" + (hourOfTraining.toString().split(" ")[4].split(":")[1]))
    
    }

    function openModal(dayOfWeek){
        setModalVisible(!modalVisible);
        setDayOfWeek(dayOfWeek)
    }

    function saveTrainingSheet(){
        const timeFormatedAux = (hourOfTraining.toString().split(" ")[4].split(":")[0]) + ":" + (hourOfTraining.toString().split(" ")[4].split(":")[1]);
        setarFichaDeTreino(dayOfWeek.toUpperCase(), selectedActivity.toUpperCase(), timeOfExercise, timeFormatedAux, nameOfExercise);
        setTimeOfExercise(0);
        setTimeFormated(" ");
        setNameOfExercise("")
        setModalVisible(!modalVisible);

    }

    async function openViewSheetTraining(dayOfWeek){
        allTrainingSheetByUserByDayOfWeek = await getAllTrainingSheetByUserProfileAndDayOfWeek(dayOfWeek, selectedActivity.toUpperCase())
        console.log("allTrainingSheetByUserByDayOfWeek", allTrainingSheetByUserByDayOfWeek)
        setAllTrainingSheet(allTrainingSheetByUserByDayOfWeek)
        setDayOfWeek(dayOfWeek)
        setViewSheetTraining(!viewSheetTraining)

    }

    const initialState = [];

    const reducer = (bodyMensure, action) => {
         switch(action.type){
            case 'ADD':
                 return [...bodyMensure, action.item];
            case 'REMOVE':
                return bodyMensure.filter(item => {
                    return item.id !== action.id;
                });
            default:
                return bodyMensure;
        }
    };

    const [mensureModal, setMensureModal] = useState(false)


    const [bodyMensure, dispatch] = useReducer(reducer, initialState);

    const [bodyPart, setBodyPart] = useState("")
    const [mensure, setMensure] = useState(0)

    async function setarMedidas(){
        setarMedidasCorporais
    }

    async function saveBodyMensures(){
        dispatch({
            type: 'ADD', 
            item: { 
                bodyPart: bodyPart,
                mensure: mensure
            },
        });
        setarMedidasCorporais(bodyPart, mensure)
        setBodyPart('');
        setMensure(0);
        setMensureModal(false);
       
    }


    return(

    <View style={styles.container}>
        <Header />

        <ScrollView style={styles.scrollMore} horizontal={true} showsHorizontalScrollIndicator={false}>

            <View style={styles.areaTrainingSheet}>

                <Text style={styles.txtActivitySelection}>Selecione a atividade</Text>

                <Picker
                    selectedValue={selectedActivity}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedActivity(itemValue) 
                    }}
                    style={styles.pickerComponent}>

                    <Picker.Item label="Musculação" value="Musculação"/>
                    <Picker.Item label="Ciclismo" value="Ciclismo"/>
                    <Picker.Item label="Luta" value="Luta"/>
                    <Picker.Item label="Natação" value="Natação"/>
                    <Picker.Item label="Basquete" value="Basquete"/>
                    <Picker.Item label="Volei" value="Volei"/>
                    <Picker.Item label="Outros" value="Outros"/>

                </Picker>
        
                <Text style={styles.txtTitleTrainingSheet}> Ficha de treino </Text>
                <ScrollView style={styles.scrollTrainingSheet} showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.viewMonday}>
                        <TouchableOpacity style={styles.btnDayOfWeek} onPress={() => openModal("Segunda")}>
                            <Text style={styles.txtDayOfWeekButtom}>Segunda</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.viewSheetTraining} onPress={() => openViewSheetTraining("Segunda")}>
                            <Text style={styles.txtViewSheetTraining}>Ver ficha</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.viewTuesday}>
                        <TouchableOpacity style={styles.btnDayOfWeek} onPress={() => openModal("Terça")}>
                            <Text style={styles.txtDayOfWeekButtom}>Terça</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.viewSheetTraining} onPress={() => openViewSheetTraining("Terça")}>
                            <Text style={styles.txtViewSheetTraining}>Ver ficha</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.viewWednesday}>
                        <TouchableOpacity style={styles.btnDayOfWeek} onPress={() => openModal("Quarta")}>
                            <Text style={styles.txtDayOfWeekButtom}>Quarta</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.viewSheetTraining} onPress={() => openViewSheetTraining("Quarta")}>
                            <Text style={styles.txtViewSheetTraining}>Ver ficha</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.viewThursday}>
                        <TouchableOpacity style={styles.btnDayOfWeek} onPress={() => openModal("Quinta")}>
                            <Text style={styles.txtDayOfWeekButtom}>Quinta</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.viewSheetTraining} onPress={() => openViewSheetTraining("Quinta")}>
                            <Text style={styles.txtViewSheetTraining}>Ver ficha</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.viewFriday}>
                        <TouchableOpacity style={styles.btnDayOfWeek} onPress={() => openModal("Sexta")}>
                            <Text style={styles.txtDayOfWeekButtom}>Sexta</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.viewSheetTraining} onPress={() => openViewSheetTraining("Sexta")}>
                            <Text style={styles.txtViewSheetTraining}>Ver ficha</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.viewSaturday}>
                        <TouchableOpacity style={styles.btnDayOfWeek} onPress={() => openModal("Sabado")}>
                            <Text style={styles.txtDayOfWeekButtom}>Sábado</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.viewSheetTraining} onPress={() => openViewSheetTraining("Sábado")}>
                            <Text style={styles.txtViewSheetTraining}>Ver ficha</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.viewSunday}>
                        <TouchableOpacity style={styles.btnDayOfWeek} onPress={() => openModal("Domingo")}>
                            <Text style={styles.txtDayOfWeekButtom}>Domingo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.viewSheetTraining} onPress={() => openViewSheetTraining("Domingo")}>
                            <Text style={styles.txtViewSheetTraining}>Ver ficha</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.txtDayOfWeek}>
                                        {dayOfWeek} - {selectedActivity}
                                    </Text>

                                    <Text style={styles.txtTimeOfExercise}>Tempo do exercício(m)</Text>
                                    <TextInput 
                                        style={styles.inputTimeOfExercise}
                                        value={timeOfExercise}
                                        keyboardType="numeric"
                                        onChangeText={text => {
                                            setTimeOfExercise(text);
                                        }}
                                    />

                                    <Text style={styles.txtHourOfTraining}>Horário do treino</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setOpen(!open);
                                        }}
                                        style={styles.buttomHourOfTraining}
                                    >
                                        <Text style={styles.txtHourTraining}>{"Horário"}</Text>
                                    </TouchableOpacity>
                                    <DatePicker 
                                        modal
                                        open={open}
                                        date={hourOfTraining}
                                        mode='time'
                                        locale='pt-BR'
                                        title="Horário dos treinos"
                                        timeZoneOffsetInMinutes={-180}
                                        is24hourSource="locale"
                                        confirmText="Confirmar"
                                        cancelText="Cancelar"
                                        onConfirm={(date) => changeSelectedTime(date)}
                                        onCancel={() => {
                                            setOpen(false)
                                        }}
                                    />

                                    <TextInput 
                                        style={styles.inputNameOfExercise}
                                        value={nameOfExercise}
                                        placeholder ="Nome do Exercício"
                                        placeholderTextColor='#a2a2a2'
                                        onChangeText={(text) => {
                                            setNameOfExercise(text)
                                        }}
                                        />

                                    <TouchableOpacity
                                        style={[styles.buttonSaveSheet, styles.buttonOpenSaveSheet]}
                                        onPress={() => saveTrainingSheet()}
                                    >
                                        <Text style={styles.textStyle}>Salvar ficha de treino</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.buttonBackSheet, styles.buttonBackSheetColor]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Voltar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Modal>
                    </View>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={viewSheetTraining}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.txtDayOfWeek}>
                                        {dayOfWeek} - {selectedActivity}
                                    </Text>
                                    <View style={styles.containerTitle}>
                                        <Text style={styles.txtNameOfExercise2}>Exercício</Text>
                                        <Text style={styles.txtTime}>Tempo(m)</Text>
                                        <Text style={styles.txtHourOfTrainig2}>Horário</Text>
                                    </View>

                                    <FlatList
                                        data={allTrainingSheet}
                                        renderItem={({item}) => {
                                            return(
                                                <View style={styles.itensContainer}>
                                                    <Text style={styles.txtNameExerciseStyle}>{item.nameOfExercise}</Text>
                                                    <Text style={styles.txtTimeStyle}>{item.time}</Text>
                                                    <Text style={styles.txtHourOfTrainingStyle}>{item.hourOfTraining}</Text> 
                                                    
                                                </View>
                                            )
                                        }}
                                    />
                                    <TouchableOpacity
                                        style={[styles.buttonBackSheet2, styles.buttonBackSheetColor2]}
                                        onPress={() => setViewSheetTraining(!viewSheetTraining)}
                                    >
                                        <Text style={styles.textStyle}>Voltar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Modal>
                    </View>

                </ScrollView>

            </View>

            <View style={styles.areaBodyMensure}>
                <Text style={styles.txtInformBodyMensure}>Medidas Corporais</Text>
                

                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.txtInputNameMeal} 
                            placeholder="Ex: Braço esquerdo"
                            placeholderTextColor={"#a1a1a1"}
                            value={bodyPart}
                            onChangeText={(text) => {
                                setBodyPart(text)
                            }}
                        />
                        <TouchableOpacity 
                            style={styles.addButton}
                            onPress={() => setMensureModal(true)}
                            
                            >
                            <Text style={styles.addButtonText}>+</Text>
                            
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={mensureModal}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.bodyMensureModalView}>
                                    <Text style={styles.txtDayOfWeek}>Informe as medidas em cm:</Text>
                                    <TextInput
                                        placeholder="36"
                                        keyboardType="numeric"
                                        style={styles.inputBodyMensures}
                                        value={mensure}
                                        onChangeText={(text) => {
                                            setMensure(text)
                                        }}
                                    >

                                    </TextInput>
                                    <TouchableOpacity
                                        style={[styles.buttonSaveMensure, styles.buttonOpenSaveMensure]}
                                        onPress={() => saveBodyMensures()}
                                    >
                                        <Text style={styles.textStyle}>Salvar medida</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.buttonBackMensure, styles.buttonBackMensureColor]}
                                        onPress={() => setMensureModal(false)}
                                    >
                                        <Text style={styles.textStyle}>Voltar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Modal>

                    </View>
                    <FlatList
                        data={bodyMensure}
                        renderItem={({item}) => {
                            return(
                                <View style={styles.itensContainer}>
                                    <Text style={styles.txtItens}>{item.bodyPart}</Text>
                                    
                                      <Text style={styles.txtHourButton}>{item.mensure} Cm</Text>
        
                                </View>
                            )
                        }}
                    />                   
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

    scrollMore:{

        // maxHeight: 500,
        marginBottom: 80,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },

    pickerComponent:{
        color: '#fff',
    },

    txtActivitySelection:{
        fontSize: 25,
        color: '#FFF',
        margin: 10
    },
    areaTrainingSheet:{
        flex: 1,
        backgroundColor: '#008037',
        width: 365,
        borderRadius: 25,
        marginEnd: 10,
    },

    txtTitleTrainingSheet:{
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },

    viewMonday:{
        backgroundColor: '#45c2a0',
        height: 80,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },

    viewTuesday:{
        backgroundColor: '#03989e',
        height: 80,
    },

    viewWednesday:{
        backgroundColor: '#00c2cb',
        height: 80,
    },

    viewThursday:{
        backgroundColor: '#45c2a0',
        height: 80,
    },

    viewFriday:{
        backgroundColor: '#03989e',
        height: 80,
    },

    viewSaturday:{
        backgroundColor: '#00c2cb',
        height: 80,
    },

    viewSunday:{
        backgroundColor: '#45c2a0',
        height: 80,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },

    btnDayOfWeek:{
        marginStart: 20,
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: 110,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45
    },

    txtDayOfWeekButtom:{
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    },

    areaBodyMensure:{
        backgroundColor: '#390052',
        width: 365,
        borderRadius: 25,    
    },

    txtInformBodyMensure:{
        marginTop: 15,
        // marginStart: 15,
        fontSize: 22,
        alignSelf: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    },


    viewSpace:{
        marginStart: 30
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

    buttonBackSheet:{
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginStart: 220,
        bottom: 40
        // marginTop: 65
    },

    buttonBackSheetColor:{
        backgroundColor: "#F194FF",
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    txtDayOfWeek: {
        marginTop: 20,
        marginBottom: 15,
        textAlign: "center",
        fontSize: 25,
    },

    txtTimeOfExercise:{
        marginRight: 200,
        fontSize: 16,
        top: 18
        // bottom: 50
    },

    inputTimeOfExercise:{
        marginStart: 240,
        borderBottomWidth: 2.5,
        borderTopWidth: 2,
        fontSize: 20,
        borderColor: '#136f8a',
        bottom: 30,
    },

    txtHourOfTraining:{
        marginRight: 170,
        fontSize: 16,
        top: 18
    },

    buttomHourOfTraining:{
        marginStart: 230,
        borderWidth: 2,
        borderRadius: 7,
        padding: 7,
        bottom: 15,
        borderColor: '#136f8a',
        width: 70,
        alignItems: 'center'
    },

    txtHourTraining:{
        color: '#000'
    },

    inputNameOfExercise:{
        top: 20,
        borderBottomWidth: 2,
        borderTopWidth: 2.3,
        color: '#000',
        borderColor: '#136f8a',
        fontSize: 20,
        textAlign: 'center',
    },

    viewSheetTraining:{
        marginStart: 280,
        bottom: 30,
        borderBottomWidth: 1.0,
        alignItems: 'center',
        width: 70,
        borderBottomColor: '#136f8a'
    },

    txtViewSheetTraining:{
        color: '#555555',
        fontSize: 16
    },


    containerTitle:{
        flexDirection: 'row',
        marginBottom: 20
    },

    txtTime:{
        color: '#000',
        marginLeft: 40,
        fontSize: 18,
        width: 100,
    },

    txtNameOfExercise2:{
        color: '#000',
        fontSize: 18,
        width: 100,
    },

    txtHourOfTrainig2:{
        color: '#000',
        marginLeft: 15,
        fontSize: 18,
    },

    buttonBackSheet2:{
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        // marginTop: 170
    },

    buttonBackSheetColor2:{
        backgroundColor: "#F194FF",
    },


    itensContainer:{
        borderTopWidth: 2,
        borderTopColor: '#136f8a'
    },

    txtNameExerciseStyle:{
        fontSize: 20,
        color: '#000',
        marginStart: 20
    },

    txtTimeStyle:{
        fontSize: 20,
        color: '#000',
        paddingStart: 180,
        bottom: 25
    },

    txtHourOfTrainingStyle:{
        fontSize: 20,
        color: '#000',
        paddingStart: 280,
        bottom: 52,
    },


    inputContainer:{
        flexDirection: 'row',
        marginTop: 50,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 10
    },

    txtInputNameMeal:{
        flex: 1,
        fontSize: 30,
        color: "#FFF",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#FFF", 
    },

    addButton:{
        marginHorizontal: 5,
        alignItems: 'center',
        alignSelf: 'center',
    },

    addButtonText:{
        color: '#38b000',
        fontSize: 60,
    },

    inputBodyMensures:{
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: '#136f8a',
        marginTop: 35,
        fontSize: 60

    },

    bodyMensureModalView:{
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        // padding: 35,
        height: 300,
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

    buttonBackMensure:{
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginStart: 220,
        bottom: 40
        // marginTop: 65
    },

    buttonBackMensureColor:{
        backgroundColor: "#F194FF",
    },

    itensContainer:{
        flexDirection: 'row'
    },

    txtItens:{
        fontSize: 25,
        color: "#FFF",
        flex: 1,
        marginVertical: 3,
        marginHorizontal: 5,
        // backgroundColor: '#aaaaaa',
        marginStart: 10
        
    },

    txtHourButton:{
        fontSize: 18,
        color: '#0eb1d2',
        marginEnd: 10,
        marginTop: 5
    },

})