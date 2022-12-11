import * as React  from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BottomSheet from '@gorhom/bottom-sheet'

import Lottie from 'lottie-react-native';

import { Image, Pressable, TouchableOpacity, View, Text} from 'react-native';

import AuthProvider from './src/contexts/Authentication/Auth';

import LogIn from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import UserRegister from './src/pages/Register/UserRegister';
import Password from './src/pages/Register/Password';
import ForgotPassword from './src/pages/Register/ForgotPassword';
import Wellcome from './src/pages/Wellcome/Wellcome';
import { StatusBar, StyleSheet } from 'react-native';
import CurrentGoalWeight from './src/pages/Profile/CurrentGoalWeight';
import NivelActivty from './src/pages/Profile/NivelActivity';
import Birthday from './src/pages/Profile/Birthday';
import Gender from './src/pages/Profile/Gender';
import Weight from './src/pages/Profile/Weight';
import Height from './src/pages/Profile/Height';
import GoalWeight from './src/pages/Profile/GoalWeight';
import Meal from './src/pages/Profile/Meal';
import User from './src/pages/User/User';
import Progress from './src/pages/Progress/Progress';
import Config from './src/pages/Config/Config';
import Food from './src/pages/Home/Food/Food.js';
import More from './src/pages/More/More';
import Training from './src/pages/Home/Training/Training';
import RegisterTraining from './src/pages/Home/Training/RegisterTraining';
import Water from './src/pages/Profile/Water';
import MyPhysicalActivitites from './src/pages/Home/Training/MyPhysicalActivities';
import MyMeals from './src/pages/Home/Food/MyMeals';
import AddFood from './src/pages/Home/Food/AddFood';
import FullMeals from './src/pages/Home/Food/FullMeals';
import EditMeal from './src/pages/Home/Food/MealManager/EditMeal';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs(){
  return (
    <Tab.Navigator
      initialRouteName='HomePage'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle:{
          position: 'absolute',
          backgroundColor: '#edf2f4',
          borderTopWidth: 0,
          height: 55,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }
      }}
    >
      <Tab.Screen 
        name="HomePage" 
        component={Home}
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused }) => {
             if(focused){
              
              return <Image source={require("./src/assets/home.png")} />
            }
              return <Image source={require("./src/assets/home-outline.png")} />
          }
        }}  
      />


      <Tab.Screen 
        name="User" 
        component={User} 
        options={{ 
          headerShown: false,
          tabBarIcon:({ focused }) => {
            if(focused){
              return <Image source={require('./src/assets/accessibility.png')}/>
            }

              return <Image source={require('./src/assets/accessibility-outline.png')} />

          }
        }}
      />

      <Tab.Screen 
        name="More" 
        component={More} 
        options={{ 
          headerShown: false,
          tabBarIcon:({ focused }) => {
            if(focused){
              return (
              <View>
                <Image source={require('./src/assets/add-circle.png')}/>
              </View>)
            }

              return <Image source={require('./src/assets/add-circle-outline.png')} />

          }
        }}
      />


      <Tab.Screen 
        name="Progress" 
        component={Progress} 
        options={{ 
          headerShown: false,
          tabBarIcon:({ focused }) => {
            if(focused){
              return <Image source={require('./src/assets/cellular.png')}/>
            }

              return <Image source={require('./src/assets/cellular-outline.png')} />

          }
        }}
      />

      <Tab.Screen 
        name="Config" 
        component={Config} 
        options={{ 
          headerShown: false,
          tabBarIcon:({ focused }) => {
            if(focused){
              return <Image source={require('./src/assets/cog.png')}/>
            }

              return <Image source={require('./src/assets/cog-outline.png')} />

          }
        }}
      />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer> 
      <StatusBar backgroundColor='#136f8a' barStyle="light-content" />
      <AuthProvider>
        <Stack.Navigator >
        
       <Stack.Screen
          name="Wellcome"
          component={Wellcome}
          options={{ headerShown: false }}
          
        />

          <Stack.Screen
            name="Login" 
            component={LogIn} 
            options={{ headerShown: false }}
            />

          <Stack.Screen 
            name='UserRegister' 
            component={UserRegister} 
            options={{ headerTransparent: true,
                headerTitle: "Primeiros Passos",
                headerTitleStyle: {fontSize: 28,
                                  color: '#FFF'},
                headerTitleAlign: "center"}}
            />

          <Stack.Screen 
            name='Password' 
            component={Password} 
            options={{ headerTransparent: true,
              headerTitle: "Primeiros Passos",
              headerTitleStyle: {fontSize: 28,
                                 color: '#FFF'},
              headerTitleAlign: "center"}}
            />

          <Stack.Screen 
            name='ForgotPassword' 
            component={ForgotPassword} 
            options={{ headerTransparent: true, headerTitle: " "}}
            />
            
          <Stack.Screen 
            name='CurrentGoalWeight' 
            component={CurrentGoalWeight} 
            options={{ headerShown: false }}
            />

          <Stack.Screen
            name='NivelActivity'
            component={NivelActivty}
            options={{ headerTransparent: true, headerTitle: " "}}

          />

          <Stack.Screen
            name='Birthday'
            component={Birthday}
            options={{ headerTransparent: true, headerTitle: " "}}

          />

          <Stack.Screen 
            name='Gender'
            component={Gender}
            options={{ headerTransparent: true, headerTitle: " "}}
          />

          <Stack.Screen 
            name='Weight'
            component={Weight}
            options={{ headerTransparent: true, headerTitle: " "}}
          />
          
          <Stack.Screen 
            name='Height'
            component={Height}
            options={{ headerTransparent: true, headerTitle: " "}}
          />

          <Stack.Screen 
            name='GoalWeight'
            component={GoalWeight}
            options={{ headerTransparent: true, headerTitle: " "}}
          />

          <Stack.Screen 
            name='Meal'
            component={Meal}
            options={{ headerTransparent: true, headerTitle: " "}}
          />

          <Stack.Screen 
            name='Water'
            component={Water}
            options={{ headerTransparent: true, headerTitle: " "}}
          />

          <Stack.Screen 
            name="Home" 
            component={Tabs} 
            options={{ headerShown: false }}
            /> 

          <Stack.Screen 
            name="Food"
            component={Food}
            options={{ 
              headerTransparent: true,
              headerTitle: "Alimentação", 
              headerTintColor:"#FFF",
            }}
          />

          <Stack.Screen 
            name="Training"
            component={Training}
            options={{ 
              headerTransparent: true,
              headerTitle: "Treino", 
              headerTintColor:"#FFF"
            }}
          />

          <Stack.Screen
            name="RegisterTraining"
            component={RegisterTraining}
            options={{ 
              headerTransparent: true,
              headerTitle: "Treino", 
              headerTintColor:"#FFF"
            }}
          />

          
          <Stack.Screen
            name="MyPhysicalActivitites"
            component={MyPhysicalActivitites}
            options={{ 
              headerTransparent: true,
              headerTitle: "Minhas Atividades Físicas", 
              headerTintColor:"#FFF"
            }}
          />
            
          <Stack.Screen
            name="MyMeals"
            component={MyMeals}
            options={{ 
              headerTransparent: true,
              headerTitle: "Minhas Refeições", 
              headerTintColor:"#FFF"
            }}
          />
          
          <Stack.Screen
            name="AddFood"
            component={AddFood}
            options={{ 
              headerTransparent: true,
              headerTitle: "Adicionar Alimentos", 
              headerTintColor:"#FFF"
            }}
          />

          <Stack.Screen
            name="FullMeals"
            component={FullMeals}
            options={{ 
              headerTransparent: true,
              headerTitle: "Refeições completas", 
              headerTintColor:"#FFF"
            }}
          />
          
          <Stack.Screen
            name="EditMeal"
            component={EditMeal}
            options={{ 
              headerTransparent: true,
              headerTitle: "Editar Refeições", 
              headerTintColor:"#FFF"
            }}
          />

        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({

})
