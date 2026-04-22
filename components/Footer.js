import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>TBKnight5 Portfolio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    alignItems: 'center'
  }
});

export default Footer;