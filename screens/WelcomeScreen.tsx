import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import colors from '../assets/colors';

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Get things done with TODO</Text>
    <Text style={styles.desc}>Plan and track your tasks easily.</Text>
    <Button title="Get Started" onPress={() => navigation.navigate('Home')} color={colors.lightOrange} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: colors.white,
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
  desc: {
    color: colors.cream,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
