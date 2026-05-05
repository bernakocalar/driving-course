import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ExamsScreen() {
  const router = useRouter();
  const [tc, setTc] = useState('');

  const handleSearch = () => {
    if (tc.length !== 11 || !/^\d+$/.test(tc)) {
      Alert.alert('Hata', 'Lütfen 11 haneli geçerli bir T.C. Kimlik Numarası giriniz.');
      return;
    }
    Alert.alert('Başarılı', 'Sonuç sorgulanıyor...');
  };

  return (
    <View style={styles.container}>
      <Header 
        variant="green" 
        title="Sınav Sonucu Sorgula" 
        leftType="none" 
        rightType="close" 
        onRightPress={() => router.push('/')}
      />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="traffic-cone" size={32} color="#F2A900" />
            <MaterialCommunityIcons name="arrow-up-right" size={24} color="#41B036" style={styles.arrowIcon} />
            <MaterialCommunityIcons name="traffic-cone" size={20} color="#888" style={styles.smallCone} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              <Text style={styles.titleGreen}>Direksiyon </Text>
              sınav{'\n'}sonucunuz
            </Text>
          </View>
        </View>

        <Text style={styles.description}>
          T.C. kimlik numaranız ile direksiyon sınav sonucunuzu öğrenin.
        </Text>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="account-circle" size={24} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="T.C. kimlik numaranız"
            placeholderTextColor="#888"
            keyboardType="number-pad"
            maxLength={11}
            value={tc}
            onChangeText={setTc}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Sorgula</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  iconContainer: {
    width: 60,
    height: 60,
    position: 'relative',
    marginRight: 16,
  },
  arrowIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  smallCone: {
    position: 'absolute',
    bottom: 5,
    right: 0,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#000',
    lineHeight: 32,
  },
  titleGreen: {
    color: '#41B036',
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 32,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E4E8',
    borderRadius: 8,
    height: 54,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#41B036',
    borderRadius: 8,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
