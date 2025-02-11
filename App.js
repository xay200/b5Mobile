import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  const green = () => {
    setBgColor('green');
  };
  const blue = () => {
    setBgColor('blue');
  };
  const brown = () => {
    setBgColor('brown');
  };
  const yellow = () => {
    setBgColor('yellow');
  };
  const red = () => {
    setBgColor('red');
  };
  const black = () => {
    setBgColor('black');
  };
 

  return (
    <View style={[styles.container, {backgroundColor: bgColor} ]}>
      <TouchableOpacity style={[styles.button, {backgroundColor:'green'}]}  onPress={green} >
        <Text style={styles.buttonText}>Green</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]} onPress={blue}>
        <Text style={styles.buttonText}>Blue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor:'brown'}]} onPress={brown}>
        <Text style={styles.buttonText}>Brown</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor:'yellow'}]} onPress={yellow}>
        <Text style={[styles.buttonText, {color:'black'}]}>Yellow</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor:'red'}]} onPress={red}>
        <Text style={styles.buttonText}>Red</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor:'black'}]} onPress={black}>
        <Text style={styles.buttonText}>Black</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,

  
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});