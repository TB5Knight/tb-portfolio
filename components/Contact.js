import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Linking, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';

import Navbar from './Navbar';
import Footer from './Footer';

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
    <View style={styles.container}>

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.title}>Contact Me</Text>

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

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>ta116473@ucf.edu</Text>
        </View>

      </ScrollView>

      {/* FOOTER */}
      <Footer />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778DA9'
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center'
  },
  title: {
    color: '#E0E1DD',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
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
    color: '#E0E1DD',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    textAlign: 'center'
  },
  socialButton: {
    backgroundColor: '#E0E1DD',
    marginVertical: 5,
    width: '80%'
  },
  infoBox: {
    color: '#E0E1DD',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center'
  },
  infoText: {
    color: '#E0E1DD',
    fontSize: 16,
    marginTop: 5
  }
});

export default Contact;