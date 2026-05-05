import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LogoProps {
  color?: 'black' | 'white';
}

export default function Logo({ color = 'black' }: LogoProps) {
  const isWhite = color === 'white';
  const textColor = isWhite ? '#fff' : '#000';
  
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={[styles.mainText, { color: textColor }]}>g</Text>
        <View style={styles.uContainer}>
          <Text style={[styles.mainText, { color: textColor }]}>u</Text>
          <View style={styles.trafficLights}>
            <View style={[styles.light, { backgroundColor: '#F44336' }]} />
            <View style={[styles.light, { backgroundColor: '#FFC107' }]} />
            <View style={[styles.light, { backgroundColor: '#4CAF50' }]} />
          </View>
        </View>
        <Text style={[styles.mainText, { color: textColor }]}>ven</Text>
      </View>
      <Text style={[styles.subText, { color: textColor }]}>S Ü R Ü C Ü   K U R S U</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    letterSpacing: -1,
  },
  uContainer: {
    position: 'relative',
    marginHorizontal: -2,
  },
  trafficLights: {
    position: 'absolute',
    top: 6,
    left: '50%',
    marginLeft: -2.5,
    flexDirection: 'column',
    gap: 1,
  },
  light: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  subText: {
    fontSize: 6,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: -5,
  },
});
