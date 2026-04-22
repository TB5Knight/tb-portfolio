import React from 'react';
import {View, Text, StyleSheet, ScrollView,Image,Linking} from 'react-native';
import { Button } from '@rneui/themed';
import project1 from './components/img/excercise-app.png';
import project2 from './components/img/reminderpilot.png';
import project3 from './components/img/stayfitproject.png';

const Projects = ({ innerRef }) => {
  return (
    <ScrollView ref={innerRef} style={styles.container}>
      <Text style={styles.title}>Projects</Text>

      {/* Exercise App */}
        <View style={styles.project}>
            <Image source={project1} style={styles.image} />
            <Text style={styles.projectTitle}>excerciseApp</Text>
            <Text style={styles.projectDesc}>A excercise app designed to help users track their workouts and stay motivated. This was designed with React.</Text>
            <Button title="View the Link" onPress={() => Linking.openURL('https://tb5knight.github.io/fit-app/')} />
        </View>

      {/* Reminder Pilot */}
        <View style={styles.project}>
            <Image source={project2} style={styles.image} />
            <Text style={styles.projectTitle}>Reminder Pilot</Text>
            <Text style={styles.projectDesc}>A reminder app designed to help users stay organized and on top of their tasks. This was designed with React native.</Text>
            <Button title="View the Link" onPress={() => Linking.openURL('https://tb5knight.github.io/reminder-pilot/')} />
        </View>

        {/* Stay Fit Project */}
        <View style={styles.project}>
            <Image source={project3} style={styles.image} />
            <Text style={styles.projectTitle}>Stay Fit Project</Text>
            <Text style={styles.projectDesc}>A fitness app designed to help users achieve their health and wellness goals. This was designed with React native</Text>
            <Button title="View the Link" onPress={() => Linking.openURL('https://tb5knight.github.io/stay-fit/')} />
        </View>
    </ScrollView>
    );
    };

const styles = StyleSheet.create({
  container: { padding: 30 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  project: { marginBottom: 30, alignItems: 'center' },
  image: { width: 300, height: 200, marginBottom: 10 },
  projectTitle: { fontSize: 18, fontWeight: 'bold' },
  projectDesc: { textAlign: 'center', marginBottom: 10 }
});

export default Projects;