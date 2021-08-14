import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Quiz = ({navigation}) => {
  const {text, container, options, bottom, button, answerButton, buttonText} =
    styles;
  return (
    <View style={container}>
      <View style={bottom}>
        <Text style={text}>Who has a puppy named Cody?</Text>
      </View>
      <View style={options}>
        <TouchableOpacity style={answerButton}>
          <Text style={text}>Margareth</Text>
        </TouchableOpacity>
        <TouchableOpacity style={answerButton}>
          <Text style={text}>Iris</Text>
        </TouchableOpacity>
        <TouchableOpacity style={answerButton}>
          <Text style={text}>Tika</Text>
        </TouchableOpacity>
        <TouchableOpacity style={answerButton}>
          <Text style={text}>Jess</Text>
        </TouchableOpacity>
      </View>
      <View style={bottom}>
        <TouchableOpacity style={button}>
          <Text style={buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={button}>
          <Text
            style={buttonText}
            onPress={() => navigation.navigate('Results')}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: 'americantypewriter',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: 'rgb(241, 231, 221)',
  },
  answerButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: 'rgb(246, 242, 240)',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'rgb(246, 242, 240)',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'americantypewriter',
  },
});
