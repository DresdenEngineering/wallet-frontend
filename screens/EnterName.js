import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const EnterName = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const navigateToEnterEmail = () => {
    navigation.navigate('EnterEmail');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Cómo te llamas?</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
      />
      <Button theme="primary" label="Continuar" onPress={navigateToEnterEmail}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      width: 320,
      alignSelf: 'center',
    },
    text: {
      textAlign: 'left',
      width: 320,
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
      fontSize: 16,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 20,
      paddingHorizontal: 10,
      width: 320,
      marginBottom: 20,
    },
  });

export default EnterName;