import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const Home = ({navigation}) => {
  const {img, text, button, container} = styles;
  return (
    <View style={container}>
      <Image
        style={img}
        source={{
          uri: 'https://www.pinclipart.com/picdir/big/58-584845_shiba-inu-clipart.png',
        }}
      />
      <View>
        <Text style={text}>2106 GH PUP QUIZ</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
          <Text style={button}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    width: 390,
    height: 390,
    borderRadius: 100 / 2,
  },
  text: {
    fontSize: 30,
    fontFamily: 'americantypewriter',
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'rgb(231, 209, 201)',
  },
  button: {
    width: '100%',
    height: '40%',
    color: 'black',
    fontFamily: 'americantypewriter',
    backgroundColor: 'rgb(246, 242, 240)',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'americantypewriter',
  },
});
