import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// If I can get firebase to work, use this.
import db from '../src/config.js';
// If I can't use the question data in the below data file.
import {data} from '../src/quizdata.js';

const Quiz = ({navigation}) => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const questionAmt = allQuestions.length;

  const {text, container, bottom, button, answerButton, buttonText} = styles;

  const displayQuestion = () => {
    return (
      <View style={bottom}>
        <Text style={text}>{allQuestions[currentQuestionIndex].question}</Text>
      </View>
    );
  };

  const checkAnswer = clickedChoice => {
    let answer = allQuestions[currentQuestionIndex].correctAnswer;
    if (clickedChoice === answer) {
      setScore(score + 1);
    }
    console.log(score);
    if (currentQuestionIndex === allQuestions.length - 1) {
      navigation.navigate('Results', {score: score, questionAmt: questionAmt});
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const displayChoices = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex].choices.map(choice => (
          <TouchableOpacity
            onPress={() => checkAnswer(choice)}
            key={choice}
            style={answerButton}>
            <Text style={text}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={container}>
      <Text> {displayQuestion()}</Text>
      <Text>{displayChoices()}</Text>
      <View style={bottom}>
        <TouchableOpacity style={button}>
          <Text style={buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={button}>
          <Text
            style={buttonText}
            onPress={() =>
              navigation.navigate('Results', {
                score: score,
                questionAmt: questionAmt,
              })
            }>
            End Quiz
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
    width: 345,
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
