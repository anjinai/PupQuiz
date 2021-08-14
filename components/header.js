import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  let {header, text} = styles;
  return (
    <View style={header}>
      <Text style={text}>GH Stackathon Quiz</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'rgb(2, 62, 138)',
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
});
