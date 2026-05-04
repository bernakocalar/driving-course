import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginRequired({ children, title = 'Giriş Yapmanız Gerekiyor' }: { children?: React.ReactNode, title?: string }) {
  const { isAuthenticated, login } = useAuth();
  const [tc, setTc] = useState('');

  const handleLogin = () => {
    if (tc.length === 11) {
      login(tc);
    } else {
      Alert.alert('Hata', 'Lütfen 11 haneli TC Kimlik numaranızı giriniz.');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Bu sayfayı görüntülemek için kursiyer girişi yapmalısınız.</Text>
        
        <TextInput
          style={styles.input}
          placeholder="TC Kimlik No"
          keyboardType="numeric"
          maxLength={11}
          value={tc}
          onChangeText={setTc}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9', justifyContent: 'center', padding: 24 },
  card: { backgroundColor: 'white', padding: 24, borderRadius: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#1e293b', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#64748b', marginBottom: 24, textAlign: 'center', lineHeight: 20 },
  input: { borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 8, padding: 16, fontSize: 16, marginBottom: 16, backgroundColor: '#f8fafc' },
  button: { backgroundColor: '#2563eb', padding: 16, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});
