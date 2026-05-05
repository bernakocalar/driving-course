import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import { useRouter } from 'expo-router';

export default function CalendarScreen() {
  const router = useRouter();
  const [tc, setTc] = useState('');

  const handleLogin = () => {
    if (tc.length !== 11 || !/^\d+$/.test(tc)) {
      Alert.alert('Hata', 'Lütfen 11 haneli geçerli bir T.C. Kimlik Numarası giriniz.');
      return;
    }
    router.push('/randevu');
  };

  return (
    <View style={styles.container}>
      <Header 
        variant="green" 
        title="Randevu Sistemi" 
        leftType="none" 
        rightType="close" 
        onRightPress={() => router.push('/')}
      />

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.logoContainer}>
            <Logo />
            <Text style={styles.cardTitle}>Randevu Sistemi</Text>
          </View>
          
          <View style={styles.colorBar}>
            <View style={[styles.colorSegment, { backgroundColor: '#C5DFA0' }]} />
            <View style={[styles.colorSegment, { backgroundColor: '#FDF1C2' }]} />
            <View style={[styles.colorSegment, { backgroundColor: '#F9D18D' }]} />
            <View style={[styles.colorSegment, { backgroundColor: '#F39C81' }]} />
            <View style={[styles.colorSegment, { backgroundColor: '#E4A2AC' }]} />
            <View style={[styles.colorSegment, { backgroundColor: '#D2AFE1' }]} />
            <View style={[styles.colorSegment, { backgroundColor: '#A4BCE1' }]} />
            <View style={[styles.colorSegment, { backgroundColor: '#7AC9E3' }]} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="TC Kimlik Numarası"
                placeholderTextColor="#666"
                keyboardType="number-pad"
                maxLength={11}
                value={tc}
                onChangeText={setTc}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#F5F7F8', // Slightly different from background or just white
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#F2F4F5',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#34495e',
    marginTop: 20,
  },
  colorBar: {
    flexDirection: 'row',
    height: 6,
  },
  colorSegment: {
    flex: 1,
  },
  cardBody: {
    padding: 24,
    backgroundColor: '#fff',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#E0E4E8',
    borderRadius: 6,
    height: 54,
    paddingHorizontal: 16,
    marginBottom: 20,
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#3EA832',
    borderRadius: 6,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
