import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import CalcButton from '../components/CalcButton';


export default function CalcButtons({ handleInput }) {
  
  return (
    <View style={styles.bigButtonContainer}>
      
      <View style={styles.rowContainer}> 
        {['(', ')'].map(item =>{
          return (<CalcButton value={item} handleInput={handleInput} key={item} />);
        })}
        <CalcButton value={'CLEAR'} handleInput={handleInput} flexGrow={2} />
      </View> 

      <View style={styles.rowContainer}> 
        {['log10', 'log2', '^', '/'].map(item =>{
          return (<CalcButton value={item} handleInput={handleInput} key={item} /> );
        })}
      </View>

      <View style={styles.rowContainer}> 
        {['7', '8', '9', '*'].map(item =>{
          return (<CalcButton value={item} handleInput={handleInput} key={item} /> );
        })}
      </View> 

      <View style={styles.rowContainer}> 
        {['4', '5', '6', '-'].map(item =>{
          return (<CalcButton value={item} handleInput={handleInput} key={item} /> );
        })}
      </View> 

      <View style={styles.rowContainer}> 
        {['1', '2', '3', '+'].map(item =>{
          return (<CalcButton value={item} handleInput={handleInput} key={item} /> );
        })}
      </View> 

      <View style={styles.rowContainer}> 
        {['0', '.'].map(item =>{
            return (<CalcButton value={item} handleInput={handleInput} key={item} /> );
          })}
        <CalcButton value={'='} handleInput={handleInput} flexGrow={2} />
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
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
