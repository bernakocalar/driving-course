import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface ExamResult {
  examName: string;
  date: string;
  score: number;
  status: 'Geçti' | 'Kaldı';
}

export default function ExamsScreen() {
  const router = useRouter();
  const [tc, setTc] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ExamResult | null>(null);

  const handleSearch = () => {
    if (tc.length !== 11 || !/^\d+$/.test(tc)) {
      Alert.alert('Hata', 'Lütfen 11 haneli geçerli bir T.C. Kimlik Numarası giriniz.');
      return;
    }
    setLoading(true);
    setResult(null);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Fake Data Logic
      if (tc === '11111111111') {
        setResult({
          examName: 'Direksiyon Sınavı',
          date: '12 Mayıs 2026',
          score: 45,
          status: 'Kaldı',
        });
      } else {
        setResult({
          examName: 'Direksiyon Sınavı',
          date: '12 Mayıs 2026',
          score: 85,
          status: 'Geçti',
        });
      }
    }, 1500);
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
            onChangeText={(text) => {
              setTc(text);
              if (result) setResult(null);
            }}
          />
        </View>

        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]} 
          onPress={handleSearch}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sorgula</Text>
          )}
        </TouchableOpacity>

        {result && (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>Sınav Sonucu</Text>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Sınav Türü:</Text>
              <Text style={styles.resultValue}>{result.examName}</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Sınav Tarihi:</Text>
              <Text style={styles.resultValue}>{result.date}</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Puan:</Text>
              <Text style={styles.resultValue}>{result.score}</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Durum:</Text>
              <View style={[styles.statusBadge, result.status === 'Geçti' ? styles.statusSuccess : styles.statusFailed]}>
                <Text style={[styles.statusText, result.status === 'Geçti' ? styles.statusTextSuccess : styles.statusTextFailed]}>
                  {result.status}
                </Text>
              </View>
            </View>
          </View>
        )}
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
  buttonDisabled: {
    backgroundColor: '#95D58D',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resultCard: {
    marginTop: 32,
    padding: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#111827',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 8,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  resultLabel: {
    fontSize: 15,
    color: '#4B5563',
    fontWeight: '500',
  },
  resultValue: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '700',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusSuccess: {
    backgroundColor: '#DCFCE7',
  },
  statusFailed: {
    backgroundColor: '#FEE2E2',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusTextSuccess: {
    color: '#166534',
  },
  statusTextFailed: {
    color: '#991B1B',
  },
});
