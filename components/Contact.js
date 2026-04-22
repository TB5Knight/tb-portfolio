import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from '@rneui/themed';

const Contact = ({ innerRef }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!name || !email) {
      alert('Please fill all fields');
      return;
    }
    alert('Message sent!');
  };

  return (
    <View ref={innerRef} style={styles.container}>
      <Text style={styles.title}>Contact</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <Button title="Send" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 40 },
  title: { fontSize: 22, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 10
  }
});

export default Contact;