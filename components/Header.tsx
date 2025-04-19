import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../assets/colors';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>TODO</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: colors.black },
  title: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
