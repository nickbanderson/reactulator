'use strict';
import React from 'react';
import { Text, View, Button, StyleSheet, ShadowPropTypesIOS, TouchableHighlight } from 'react-native';
import Colors from '../constants/Colors';

export default function CalcButton({ value, handleInput, flexGrow=1 }) {

  return (
    <TouchableHighlight 
      style={ [styles.container, { flexGrow: flexGrow }] }
      onPress={ ()=>handleInput(value) }
    >
      <Text style={styles.text}>
        {value}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.secondary,
    borderWidth: 1,
    backgroundColor: Colors.primary,
  },
  text: {
    fontSize: 30,
    color: Colors.secondary,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});
