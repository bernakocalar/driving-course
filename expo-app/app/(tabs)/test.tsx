import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function OnlineTestScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header 
        variant="white" 
        leftType="logo" 
        rightType="close" 
        onRightPress={() => router.push('/')} 
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="chat-question-outline" size={150} color="#000" />
          <MaterialCommunityIcons 
            name="chat-processing-outline" 
            size={100} 
            color="#48D1CC" 
            style={styles.secondIcon} 
          />
        </View>

        <View style={styles.stepsContainer}>
          {[1, 2, 3, 4].map((step, index) => (
            <View key={step} style={[styles.stepCircle, step === 1 && styles.activeStepCircle]}>
              <Text style={[styles.stepText, step === 1 && styles.activeStepText]}>
                {step}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.title}>Online Test</Text>
        
        <Text style={styles.description}>
          Ehliyet sınavına hazırlanmak için online testi çözebilir, pratiğinizi geliştirerek sınavda başarı oranınızı arttırabilirsiniz.
        </Text>

      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Devam Et</Text>
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
    alignItems: 'flex-start',
  },
  iconContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 40,
    position: 'relative',
  },
  secondIcon: {
    position: 'absolute',
    right: -40,
    bottom: -20,
    zIndex: -1,
  },
  stepsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 12,
  },
  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0E4E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStepCircle: {
    backgroundColor: '#41B036',
  },
  stepText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  activeStepText: {
    color: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    fontWeight: '500',
  },
  footer: {
    padding: 24,
    paddingBottom: 30,
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
