import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

import Navbar from './Navbar';
import Footer from './Footer';
import background from './img/background.png';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>

          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Taylor Burdgess</Text>
          <Text style={styles.subtitle}>Designer</Text>

        </View>
      </ImageBackground>

      {/* FOOTER */}
      <Footer />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlay: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  backgroundColor: 'rgba(0,0,0,0.6)' 
},
title: {
  fontSize: 32,
  fontWeight: 'bold',
  color: '#E0E1DD',
  marginBottom: 10,
  textShadowColor: 'rgba(0,0,0,0.75)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 4,
},
subtitle: {
  fontSize: 18,
  color: '#E0E1DD',
  marginBottom: 5,
  textShadowColor: 'rgba(0,0,0,0.75)',
  textShadowOffset: { width: 0, height: 1 },
  textShadowRadius: 3,
},
});

export default Home;