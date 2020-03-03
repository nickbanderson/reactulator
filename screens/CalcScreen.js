'use strict';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CalcDisplay from '../components/CalcDisplay';
import CalcButtons from '../components/CalcButtons';
import Colors from '../constants/Colors';
import evaluate from '../util/evaluate.js'

export default function CalcScreen({}) {
  const [displayText, setDisplayText] = React.useState('');

  function handleInput(input) {
    switch(input) {
      case 'CLEAR':
        setDisplayText('');
        break;
      case '=':
        setDisplayText( evaluate(displayText) );
        break;
      default:
        setDisplayText( displayText.concat(input) );
    }
  }

  return (
    <View style={styles.masterContainer}>
      <CalcDisplay displayText={displayText} />
      <CalcButtons handleInput={handleInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  masterContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingTop: 24, // TODO magic status bar number
    backgroundColor: Colors.primary,
    
  },
  bigButtonContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: Colors.primary,
    
  },
  rowContainer: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  
});

CalcScreen.navigationOptions = {
  title:'Calc',//header: null,
};