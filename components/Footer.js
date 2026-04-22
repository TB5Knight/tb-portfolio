import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>TBurdgess Portfolio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#274c77',
    color: '#fff',
    padding: 20,
    alignItems: 'center'
  }
});

export default Footer;