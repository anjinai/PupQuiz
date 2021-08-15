import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const Results = ({route, navigation}) => {
  const {container, img, answerButton, buttonText, bottom, resultText} = styles;
  const {score, questionAmt} = route.params;
  return (
    <View style={container}>
      <Image
        style={img}
        source={{
          uri: 'https://image.freepik.com/free-vector/cute-shiba-inu-dog-cartoon-seamless-pattern-illustration_42750-741.jpg',
        }}
      />

      <View>
        <Text style={resultText}>Results </Text>
        <Text style={resultText}>{`${score}/${questionAmt}`} </Text>
      </View>
      <View style={bottom}>
        <TouchableOpacity style={answerButton}>
          <Text style={buttonText} onPress={() => navigation.navigate('Home')}>
            Try Again!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: 'rgb(243, 231, 228)',
  },
  resultText: {
    paddingTop: 20,
    textAlign: 'center',
    fontFamily: 'americantypewriter',
    fontSize: 60,
  },
  img: {
    width: 390,
    height: 200,
  },
  answerButton: {
    paddingVertical: 20,
    marginVertical: 16,
    backgroundColor: 'rgb(246, 242, 240)',
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'americantypewriter',
  },
  bottom: {
    justifyContent: 'center',
    marginBottom: 12,
    paddingVertical: 16,
    flexDirection: 'row',
  },
});
