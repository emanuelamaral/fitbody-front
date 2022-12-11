import React, {createContext, useState} from 'react';

import api from '../../services/Api/Api'

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [user, setUser] = useState({});
    const [userRegister, setUserRegister] = useState({});
    const [userProfile, setUserProfile] = useState({});

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [currentWeight, setCurrentWeight] = useState("");
    const [nivelActivity, setNivelActivity] = useState("");
    const [birthday, setBirthday] = useState("");
    const [weightGoal, setWeightGoal] = useState(0);
    const [gender, setGender] = useState("");
    const [mealsProfile, setMealsProfile] = useState([]);
    const [goalWaterConsumePerDay, setGoalWaterConsume] = useState(0);
    const [waterConsumedPerDay, setWaterConsumedPerday] = useState(0);
    const [mealByName, setMealByName] = useState({})
    const [foodsForMeal, setFoodsForMeal] = useState({})
    const [foodsByUserProfile, setFoodsByUserProfile] = useState([])

    const [physicalActivity, setPhysicalActivity] = useState([])
    const [trainingSheet, setTrainingSheet] = useState({})

    const [bodyMensure, setBodyMensure] = useState([])

    const mealsFormData = new FormData();

    let userAux = {}
    let userRegisterAux = {}
    let userProfileAux = {}
    let goalWaterConsumePerDayAux = 0;
    let physicalActivityAux = {}
    let allPhysicalActivity = []
    let allPhysicalActivityAux = []
    let trainingSheetAux = {}
    let allTrainingSheetByUserByDayOfWeek = [{}]
    let bodyMensuresAux = {}
    let bodyMensureFormated = {}
    let mealProfile = [{}]
    let allMealProfile = []
    let allFoodsForMeal = []
    let allFoodsByUserProfile = []
    let allFoodsByUserProfileAux = []

    let mealByNameAux = {}


    async function logarUsuario (email, password){
        console.log("Entrou no logarUsuario")
        try{
            userAux = await api.post('/user/authentication', {
                email: email,
                password: password,
            })
            setUser(userAux.data);
            setUserProfile(userAux.data.userProfile_id);
            console.log("userAux:", userAux.data);


        }catch(error){
            console.log(error.message);
        }finally{
            if(userAux.data != {}){
                return true;
            }else{
                return false;
            }
        }
    }

    async function criarUsuario(name, userName, email, password){
        try{
            userRegisterAux = await api.post('/user', {
                name: name,
                userName: userName,
                email: email,
                password: password
            })
            setUserRegister(userRegisterAux.data);
        }catch(error){
            console.log(error.message);
        }
    }

    const setarAltura = (height) => {
        console.log(height)
        setHeight(height);
    }

    const setarPeso = (weight) => {
        console.log(weight)
        setWeight(weight);
    }

    const setarObjetivoPesoAtual = (currentWeight) => {
        console.log(currentWeight)
        setCurrentWeight(currentWeight);
    }

    const setarNivelAtividade = (nivelActivity) => {
        console.log(nivelActivity)
        setNivelActivity(nivelActivity);
    }

    const setarDataNascimento = (birthday) => {
        console.log(birthday)

        setBirthday(birthday);
    }

    const setarMetaPeso = (weightGoal) => {
        console.log(weightGoal)
        setWeightGoal(weightGoal);
    }

    const setarGenero = (gender) => {
        console.log(gender)
        setGender(gender);
    }

    const  setarMetaDeConsumoDeAgua = async (goalWaterConsumePerDay) => {
        // console.log(goalWaterConsumePerDay);
        setGoalWaterConsume(goalWaterConsumePerDay);
        goalWaterConsumePerDayAux = goalWaterConsumePerDay;
    }

    const setarAtividadeFisica = async (nameActivity, timeActivity, caloriesActivity) => {
        console.log("nameActivity", nameActivity)
        console.log("timeActivity", timeActivity)
        console.log("caloriesActivity", caloriesActivity)
        console.log("userProfile.userProfileId", userProfile.userProfileId)

        try{
            physicalActivityAux = await api.post('/physicalact', {
                typeOfActivity: nameActivity,
                time: timeActivity,
                calories: caloriesActivity,
                userProfile_id: userProfile.userProfileId
            })
            getAllAtividadesFisicas(userProfile.userProfileId); 
        }catch(error){
            console.log(error.message)
        }
    }

    const getAllAtividadesFisicas = async (id) => {
        try{
            allPhysicalActivity = await api.get(`/physicalact/getallby_userprofileid/${id}`);
            allPhysicalActivityAux = allPhysicalActivity.data;
            setPhysicalActivity(allPhysicalActivityAux);
        }catch(error){
            console.log(error.message);
        }

    }

    const getAllMealsByUserProfileId = async (id) => {
        try{
            allMealProfile = await api.get(`/meal/getallby_userprofileid/${id}`)
            setMealsProfile(allMealProfile.data)
            await getAllFoodByUserProfile()
        }catch(error){
            console.log(error.message)
        }
    }

    const setarFichaDeTreino = async (dayOfWeek, nameActivity, time, hourOfTraining, nameOfExercise) => {
        console.log("dayOfWeek", dayOfWeek)
        console.log("nameActivity", nameActivity)
        console.log("time", time)
        console.log("hourOfTraining", hourOfTraining)
        console.log("nameOfExercise", nameOfExercise)
        console.log("userProfile.userProfileId", userProfile.userProfileId)
        try{
            trainingSheetAux = await api.post('/training', {
                nameActivity: nameActivity,
                dayOfWeek: dayOfWeek,
                time: time,
                hourOfTraining: hourOfTraining,
                nameOfExercise: nameOfExercise,
                userProfile_id: userProfile.userProfileId
            })
            setTrainingSheet(trainingSheetAux.data)
        }catch(error){
            console.log(error.message)
        }
    }

    const getAllTrainingSheetByUserProfileAndDayOfWeek = async (dayOfWeek, nameActivity) =>{
        try{

            allTrainingSheetByUserByDayOfWeek = await api.get(`/training/gettrainingsheet/${userProfile.userProfileId}/${dayOfWeek}/${nameActivity}`)
            return allTrainingSheetByUserByDayOfWeek.data
        }catch(error){
            console.log(error.message)
        }
    }

    async function criarPerfilUsuario(){
        setUserProfile({
            height: height,
            weight: weight,
            currentWeight: currentWeight,
            nivelActivity: nivelActivity,
            birthday: birthday,
            weightGoal: weightGoal,
            gender: gender,
        })
        await alterarRelacionamentoUsuarioPerfil();
    }

    async function alterarRelacionamentoUsuarioPerfil(){
        try{
            userAux = await api.put(`/user/change_user_profileid/${userRegister.userId}`, {   
                height: height,
                weight: weight,
                currentWeight: currentWeight,
                nivelActivity: nivelActivity,
                birthday: birthday,
                weightGoal: weightGoal,
                gender: gender
            })
            setUser(userAux.data);
            // console.log("userAux(userProfileId):", userAux.data.userProfile_id.userProfileId)
            getPerfil(userAux.data.userProfile_id.userProfileId);
        }catch(error){
            console.log(error.message);
        }
    }

    async function getPerfil(id){
        try{
            userProfileAux = await api.get(`/user/profile/${id}`)
            setUserProfile(userProfileAux.data);
            alterarRelacionamentoPerfilEAgua(userAux.data.userProfile_id.userProfileId);
        }catch(error){
            console.log(error.message);
        }
    }

    const alterarRelacionamentoPerfilEMedidasCorporais = async (leftArm, rightArm, pectoral, leftTight, rightTight, leftCalfMuscle, rightCalfMuscle) => {
        try{
            userProfileAux = await api.put(`/user/profile/bodymensure_id/${userProfile.userProfileId}`, {
                leftArm:leftArm,
                rightArm:rightArm,
                pectoral:pectoral,
                leftTight:leftTight,
                rightTight:rightTight,
                leftCalfMuscle:leftCalfMuscle,
                rightCalfMuscle:rightCalfMuscle

            })
            console.log("userProfileAux.data", userProfileAux.data)
            setUserProfile(userProfileAux.data);
            getAllbodyMensures();
        }catch(error){
            console.log(error.message)
        }
    }

    const getAllbodyMensures = async () => {
        console.log("userProfileAux.data.bodyMensure.bodyMensureId", userProfileAux.data.bodyMensure.bodyMensureId)
        try{
            bodyMensuresAux = await api.get(`/bodymensure/${userProfileAux.data.bodyMensure.bodyMensureId}`);
            console.log("bodyMensuresAux.data", bodyMensuresAux.data)
            setBodyMensure(bodyMensuresAux.data);
            bodyMensureFormated = bodyMensuresAux.data
        }catch(error){
            console.log(error.message)
        }
    }

    const setarMedidasCorporais = async (bodyPart, mensure) => {
        try{
           /*  for (let i = 0; i < bodyMensure.length; i++) {
                const element = bodyMensure[i]; */
                console.log("element.bodyPart", bodyPart)
                console.log("element.mensure", mensure)
                bodyMensuresAux  = await api.post('/bodymensure', [{
                    bodyPart: bodyPart,
                    mensure: mensure,
                    userProfile_id: userProfile.userProfileId
            }])
            setBodyMensure(bodyMensuresAux.data)
        }catch(error){
            console.log(error.message)
        }
    }

    const alterarMedidasCorporaisExistentes = async (leftArm, rightArm, pectoral, leftTight, rightTight, leftCalfMuscle, rightCalfMuscle) => {
        try{
            bodyMensuresAux = await api.put(`/bodymensure/${userProfile.bodyMensure.bodyMensureId}`,{
                leftArm:leftArm,
                rightArm:rightArm,
                pectoral:pectoral,
                leftTight:leftTight,
                rightTight:rightTight,
                leftCalfMuscle:leftCalfMuscle,
                rightCalfMuscle:rightCalfMuscle
            });
            console.log("bodyMensuresAux.data", bodyMensuresAux.data)
            // getAllbodyMensures();
        }catch(error){
            console.log(error.message)
        }
    }

    async function alterarRelacionamentoPerfilEAgua(id){
        console.log("GoalWaterConsumePerDayAux: ",goalWaterConsumePerDayAux)
        try{
            userProfileAux = await api.put(`/user/profile/waterconsume_id/${id}`, {
                goalWaterConsumePerDay: goalWaterConsumePerDayAux
            })
            setUserProfile(userProfileAux.data);

        }catch(error){
            console.log(error.message);
        }
    }

    async function setarRefeicaoParaPerfil(meal){
        console.log("meal", meal)
        console.log(userProfile.userProfile_id)
        try{

            for (let i = 0; i < meal.length; i++) {
                const element = meal[i];
                console.log("element.mealName", element.mealName)
                console.log("element.mealTime", element.mealTime)
                mealProfile = await api.post('/meal', [{
                    mealName: element.mealName,
                    mealTime: element.mealTime,
                    userProfile_id: userProfile.userProfileId
            }])}
            
            setMealsProfile(mealProfile.data)

        }catch(error){
            console.log(error.message)
        }
    }

    const getRefeicaoPorNome = async (mealName) => {
        try{
            mealByNameAux = await api.get(`/meal/getbyname/${mealName}`)
            setMealByName(mealByNameAux.data)
        }catch(error){
            console.log(error.message)
        }
    }

    const setarFoodParaRefeicao = async (id, foods) => {
        try{

            for (let i = 0; i < foods.length; i++) {
                const element = foods[i];
                
                allFoodsForMeal = await api.post(`/food`, 
                [
                    {
                        foodName: element.foodName,
                        weightFood: element.weightFood,
                        meal_id: id,
                        userProfile_id: userProfile.userProfileId
                    }
                ])
            }
            getAllFoodByUserProfile()
        }catch(error){
            console.log(error.message)
        }
    }

    const getAllFoodsByMeal = async (id) => {
        try{
            allFoodsForMeal = await api.get(`/food/getallfoods_bymeal_id/${id}`)
            setFoodsForMeal(allFoodsForMeal.data)
        }catch(error){
            console.log(error)
        }
    }

    const getAllFoodByUserProfile = async () => {
        try{
            allFoodsByUserProfile = await api.get(`/food/getallfoods_byuserprofile_id/${userProfile.userProfileId}`)
            console.log("allFoodsByUserProfile.data", allFoodsByUserProfile.data)
            allFoodsByUserProfileAux = allFoodsByUserProfile.data
            setFoodsByUserProfile(allFoodsByUserProfile.data)
        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <AuthContext.Provider value={{ logarUsuario, user, criarUsuario, userRegister, setarAltura,
            setarPeso, setarObjetivoPesoAtual, setarNivelAtividade, setarDataNascimento, setarMetaPeso,
            setarGenero, criarPerfilUsuario,  userProfile, getPerfil,
            setarMetaDeConsumoDeAgua, setarAtividadeFisica, physicalActivity, getAllAtividadesFisicas,
            setarFichaDeTreino, getAllTrainingSheetByUserProfileAndDayOfWeek, alterarRelacionamentoPerfilEMedidasCorporais,
            bodyMensureFormated, alterarMedidasCorporaisExistentes, setarRefeicaoParaPerfil, setarMedidasCorporais,
            mealsProfile, getAllMealsByUserProfileId, getRefeicaoPorNome, mealByName, setarFoodParaRefeicao, foodsByUserProfile,
            allFoodsByUserProfileAux, foodsForMeal, getAllFoodsByMeal}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;
