import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Voice from '@react-native-voice/voice';
import Lottie from 'lottie-react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const Speech = () => {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [recording, setRecording] = useState(false);
  Voice.onSpeechStart = () => setRecording(true);
  Voice.onSpeechEnd = () => setRecording(false);
  Voice.onSpeechError = err => setError(err.error);
  Voice.onSpeechResults = result => setResult(result.value[0]);
  const startR = async () => {
    try {
      setResult('');
      await Voice.start('en-US');
      if (result == '') {
        Alert();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const stopR = async () => {
    try {
      await Voice.stop();
      setRecording(false);
    } catch (e) {}
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Lottie
        source={require('./Animations/second.json')}
        style={{
          height: responsiveHeight(40),
          alignSelf: 'center',
          marginTop: responsiveHeight(3),
        }}
        autoPlay
      />
      {result ? (
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(3),
            marginTop: responsiveHeight(5),
            marginLeft: responsiveWidth(21),
          }}>
          {result}
        </Text>
      ) : null}
      <View style={{marginTop: responsiveHeight(7)}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#89CFF0',
            width: responsiveWidth(80),
            height: responsiveHeight(7),
            borderRadius: responsiveWidth(4),
            alignSelf: 'center',
          }}
          onPress={recording ? stopR : startR}>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              alignSelf: 'center',
              marginTop: responsiveHeight(1),
              fontWeight: '500',
            }}>
            {recording ? 'Stop' : 'Start'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Speech;
