import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from '@rneui/themed';
import background from './img/background.png';

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={background} style={styles.background} resizeMode="cover">
      
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Taylor Burdgess</Text>
        <Text style={styles.subtitle}>Designer</Text>

        <Button
          title="View My Projects"
          onPress={() => navigation.navigate('Projects')}
        />

        <Button
          title="Learn More About Me"
          onPress={() => navigation.navigate('About')}
          containerStyle={{ marginTop: 10 }}
        />
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center'
  },
  overlay: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0000' 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5
  }
});

export default Home;