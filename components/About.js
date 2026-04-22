import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Navbar from './Navbar';
import Footer from './Footer';
import profile from './img/profile.jpg';

const About = () => {
  return (
    <View style={styles.container}>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <View style={styles.content}>

        <Text style={styles.title}>About Me</Text>

        <Image source={profile} style={styles.image} />

        <Text style={styles.text}>
          My name is Taylor Burdgess. I was born and raised in Tampa, Florida.
          I currently attend the University of Central Florida. This portfolio
          showcases school design projects I’ve completed to highlight my creativity,
          skills, and passion for becoming a designer.
        </Text>

        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.list}>- Creative Thinking</Text>
        <Text style={styles.list}>- Adobe Photoshop</Text>
        <Text style={styles.list}>- Figma</Text>
        <Text style={styles.list}>- HTML, CSS, and Javascript</Text>

        <Text style={styles.sectionTitle}>Interests</Text>
        <Text style={styles.list}>• Graphic Design</Text>
        <Text style={styles.list}>• Digital Art</Text>
        <Text style={styles.list}>• Mobile App Design</Text>
        <Text style={styles.list}>• Creative Projects</Text>

      </View>

      {/* FOOTER */}
      <Footer />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6096ba'
  },
  content: {
    flex: 1,
    padding: 30,
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15
  },
  list: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5
  }
});

export default About;