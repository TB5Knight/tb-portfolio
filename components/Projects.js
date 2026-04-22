import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking } from 'react-native';
import { Button } from '@rneui/themed';

import Navbar from './Navbar';
import Footer from './Footer';

import project1 from './img/excercise-app.png';
import project2 from './img/reminderpilot.png';
import project3 from './img/stayfitproject.png';

const Projects = () => {
  return (
    <View style={styles.container}>

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.title}>Projects</Text>

        {/* Exercise App */}
        <View style={styles.project}>
          <Image source={project1} style={styles.image} />
          <Text style={styles.projectTitle}>Exercise App</Text>
          <Text style={styles.projectDesc}>
            A exercise app designed to help users track their workouts and stay motivated.
          </Text>

          <View style={styles.buttonContainer}>
            <Button
              title="View the Link"
              onPress={() => Linking.openURL('https://tb5knight.github.io/fit-app/')}
              buttonStyle={styles.button}
            />
          </View>
        </View>

        {/* Reminder Pilot */}
        <View style={styles.project}>
          <Image source={project2} style={styles.image} />
          <Text style={styles.projectTitle}>Reminder Pilot</Text>
          <Text style={styles.projectDesc}>
            A reminder app designed to help users stay organized and on top of their tasks.
          </Text>

          <View style={styles.buttonContainer}>
            <Button
              title="View the Link"
              onPress={() => Linking.openURL('https://tb5knight.github.io/reminder-pilot/')}
              buttonStyle={styles.button}
            />
          </View>
        </View>

        {/* Stay Fit Project */}
        <View style={styles.project}>
          <Image source={project3} style={styles.image} />
          <Text style={styles.projectTitle}>Stay Fit Project</Text>
          <Text style={styles.projectDesc}>
            A fitness app designed to help users achieve their health and wellness goals.
          </Text>

          <View style={styles.buttonContainer}>
            <Button
              title="View the Link"
              onPress={() => Linking.openURL('https://tb5knight.github.io/stay-fit/')}
              buttonStyle={styles.button}
            />
          </View>
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
    padding: 30,
    alignItems: 'center'
  },
  title: {
    color: '#E0E1DD',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  project: {
    marginBottom: 30,
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
    borderRadius: 10
  },
  projectTitle: {
    color: '#E0E1DD',
    fontSize: 18,
    fontWeight: 'bold'
  },
  projectDesc: {
    color: '#E0E1DD',
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#14213d',
    borderRadius: 8
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%'
  }
});
export default Projects;