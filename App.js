import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lower,setLower] = useState(0);
  const [upper,setUpper] = useState(0);

  function calculate(text) {
    setAge(text);
    setLower((220-text) * 0.65);
    setUpper((220-text) * 0.85);
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput value={age} onChangeText={text => calculate(text)}></TextInput>
      <Text>Hr limits</Text>
      <Text>{lower.toFixed(0)} - {upper.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 10,
  },
});
