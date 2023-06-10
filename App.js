import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Ts from './Text';
import Speech from './Speech';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Ts" component={Ts} />
        <Stack.Screen name="Speech" component={Speech} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  //   <View style={{flex: 1, backgroundColor: 'white'}}>
  //     <Lottie
  //       source={require('./Animations/Speech.json')}
  //       style={{
  //         height: responsiveHeight(40),
  //         alignSelf: 'center',
  //         marginTop: responsiveHeight(7),
  //       }}
  //       autoPlay
  //     />
  //     <View style={{marginTop: responsiveHeight(7)}}>
  //       <TextInput
  //         onChangeText={text => setSpeech(text)}
  //         value={speech}
  //         placeholder="Enter text"
  //         placeholderTextColor={'#454545'}
  //         style={{
  //           backgroundColor: '#F5F5F5',
  //           width: responsiveWidth(80),
  //           height: responsiveHeight(8),
  //           alignSelf: 'center',
  //           textAlign: 'left',
  //           paddingLeft: 5,
  //           borderRadius: responsiveWidth(7),
  //           color: 'black',
  //         }}
  //       />
  //     </View>
  //     <View style={{marginTop: responsiveHeight(3)}}>
  //       <TouchableOpacity
  //         style={{
  //           backgroundColor: '#89CFF0',
  //           width: responsiveWidth(80),
  //           height: responsiveHeight(7),
  //           borderRadius: responsiveWidth(4),
  //           alignSelf: 'center',
  //         }}
  //         onPress={start}>
  //         <Text
  //           style={{
  //             fontSize: responsiveFontSize(3),
  //             alignSelf: 'center',
  //             marginTop: responsiveHeight(1),
  //             fontWeight: '500',
  //           }}>
  //           Speak
  //         </Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
};

export default App;
