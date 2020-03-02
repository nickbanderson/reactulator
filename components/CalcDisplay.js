'use strict';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function MainCalcDisplay({ displayText }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {displayText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: 60, // TODO magic number
    //borderColor: Colors.tertiary,
    //borderWidth: 3,
    backgroundColor: Colors.primary,
  },
  text: {
    textAlign: 'right',
    fontSize: 50,
    color: Colors.secondary,
    paddingVertical: 0,
    paddingHorizontal: 0,
    //borderWidth: 3,
    //backgroundColor: Colors.secondary,
  },
});
