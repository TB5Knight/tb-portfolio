import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Linking, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert('Please fill out all fields');
      return;
    }

    alert('Message sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>Contact Me</Text>

        {/* FORM */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <Button
          title="Send Message"
          onPress={handleSubmit}
          buttonStyle={styles.button}
        />

        {/* SOCIAL LINKS */}
        <Text style={styles.sectionTitle}>Connect With Me</Text>

        <Button
          title="GitHub"
          type="outline"
          onPress={() => Linking.openURL('https://github.com/TB5Knight')}
          containerStyle={styles.socialButton}
        />

        <Button
          title="LinkedIn"
          type="outline"
          onPress={() => Linking.openURL('https://www.linkedin.com/in/tripp-burdgess7')}
          containerStyle={styles.socialButton}
        />

        {/* CONTACT INFO */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>ta116473@ucf.edu</Text>
        </View>

      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#ffb703',
    borderRadius: 8,
    marginTop: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    textAlign: 'center'
  },
  socialButton: {
    marginVertical: 5
  },
  infoBox: {
    marginTop: 20,
    alignItems: 'center'
  },
  infoText: {
    fontSize: 16,
    marginTop: 5
  }
});

export default Contact;