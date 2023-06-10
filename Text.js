import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Lottie from 'lottie-react-native';
import Tts from 'react-native-tts';
import Speech from './Speech';

const Ts = ({navigation}) => {
  const [speech, setSpeech] = useState('');
  const start = () => {
    Tts.speak(speech, {
      androidParams: {
        KEY_PARAM_PAN: -1,
        KEY_PARAM_VOLUME: 0.5,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Lottie
        source={require('./Animations/Speech.json')}
        style={{
          height: responsiveHeight(40),
          alignSelf: 'center',
          marginTop: responsiveHeight(7),
        }}
        autoPlay
      />
      <View style={{marginTop: responsiveHeight(7)}}>
        <TextInput
          onChangeText={text => setSpeech(text)}
          value={speech}
          placeholder="Enter text"
          placeholderTextColor={'#454545'}
          style={{
            backgroundColor: '#F5F5F5',
            width: responsiveWidth(80),
            height: responsiveHeight(8),
            alignSelf: 'center',
            textAlign: 'left',
            paddingLeft: 5,
            borderRadius: responsiveWidth(7),
            color: 'black',
          }}
        />
      </View>
      <View style={{marginTop: responsiveHeight(3)}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#89CFF0',
            width: responsiveWidth(80),
            height: responsiveHeight(7),
            borderRadius: responsiveWidth(4),
            alignSelf: 'center',
          }}
          onPress={start}>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              alignSelf: 'center',
              marginTop: responsiveHeight(1),
              fontWeight: '500',
            }}>
            Speak
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: responsiveHeight(3)}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#89CFF0',
            width: responsiveWidth(80),
            height: responsiveHeight(7),
            borderRadius: responsiveWidth(4),
            alignSelf: 'center',
          }}
          onPress={() => navigation.navigate('Speech')}>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              alignSelf: 'center',
              marginTop: responsiveHeight(1),
              fontWeight: '500',
            }}>
            Try Speech to text
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ts;
