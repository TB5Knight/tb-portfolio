import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>TBurdgess Portfolio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#274c77',
    padding: 20,
    alignItems: 'center'
  },
  footerText: {
    color: '#fff',
    fontSize: 16
  }
});

export default Footer;