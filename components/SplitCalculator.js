import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SplitCalculator() {
  const [total, setTotal] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const totalVal = parseFloat(total);
    const peopleVal = parseInt(people);
    const tipVal = parseFloat(tip) || 0;

    if (!totalVal || !peopleVal || peopleVal <= 0) return;

    const totalWithTip = totalVal + (totalVal * tipVal / 100);
    const perPerson = totalWithTip / peopleVal;
    setResult(perPerson.toFixed(2));
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Valor total da conta"
        keyboardType="numeric"
        value={total}
        onChangeText={setTotal}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de pessoas"
        keyboardType="numeric"
        value={people}
        onChangeText={setPeople}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de serviço (%) - opcional"
        keyboardType="numeric"
        value={tip}
        onChangeText={setTip}
      />
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {result && (
        <Text style={styles.result}>
          Cada pessoa deve pagar: R$ {result}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#E63946',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
