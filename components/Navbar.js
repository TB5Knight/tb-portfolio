import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <Button title="Home" onPress={() => navigation.navigate('Home')} buttonStyle={styles.button} />
      <Button title="About" onPress={() => navigation.navigate('About')} buttonStyle={styles.button} />
      <Button title="Projects" onPress={() => navigation.navigate('Projects')} buttonStyle={styles.button} />
      <Button title="Contact" onPress={() => navigation.navigate('Contact')} buttonStyle={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#274c77'
  },
button: {
    backgroundColor: '#274c77',
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5
  }
});

export default Navbar;