import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="About" onPress={() => navigation.navigate('About')} />
      <Button title="Projects" onPress={() => navigation.navigate('Projects')} />
      <Button title="Contact" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#274c77'
  }
});

export default Navbar;