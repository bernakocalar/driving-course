import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const fakeQuestions = [
  {
    id: 1,
    question: 'Aşağıdakilerden hangisi trafik kazasında ilk yardımın temel uygulamalarından biridir?',
    options: ['A) Olay yerinin güvenliğini sağlamak', 'B) Yaralıya su içirmek', 'C) Yaralıyı ayağa kaldırmak', 'D) Ambulans gelmeden olay yerinden ayrılmak'],
    answer: 0,
  },
  {
    id: 2,
    question: 'Kırmızı ışıkta geçmenin cezası nedir?',
    options: ['A) Sadece uyarı', 'B) İdari para cezası ve ceza puanı', 'C) Ehliyete el konulması', 'D) Aracın bağlanması'],
    answer: 1,
  }
];

export default function OnlineTestScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (selectedOption === fakeQuestions[0].answer) setScore(score + 50);
      setSelectedOption(null);
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (selectedOption === fakeQuestions[1].answer) setScore(score + 50);
      setSelectedOption(null);
      setCurrentStep(4);
    } else {
      Alert.alert('Bilgi', 'Test tamamlandı! Yeni teste başlamak için devam edin.', [
        { text: 'Tamam', onPress: () => {
          setCurrentStep(1);
          setScore(0);
          setSelectedOption(null);
        }}
      ]);
    }
  };

  const currentQuestion = currentStep === 2 ? fakeQuestions[0] : currentStep === 3 ? fakeQuestions[1] : null;

  return (
    <View style={styles.container}>
      <Header 
        variant="white" 
        leftType="logo" 
        rightType="close" 
        onRightPress={() => router.push('/')} 
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        {currentStep === 1 && (
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="chat-question-outline" size={150} color="#000" />
            <MaterialCommunityIcons 
              name="chat-processing-outline" 
              size={100} 
              color="#48D1CC" 
              style={styles.secondIcon} 
            />
          </View>
        )}

        <View style={styles.stepsContainer}>
          {[1, 2, 3, 4].map((step) => (
            <View key={step} style={[styles.stepCircle, currentStep >= step && styles.activeStepCircle]}>
              <Text style={[styles.stepText, currentStep >= step && styles.activeStepText]}>
                {step}
              </Text>
            </View>
          ))}
        </View>

        {currentStep === 1 && (
          <>
            <Text style={styles.title}>Online Test</Text>
            <Text style={styles.description}>
              Ehliyet sınavına hazırlanmak için online testi çözebilir, pratiğinizi geliştirerek sınavda başarı oranınızı arttırabilirsiniz.
            </Text>
          </>
        )}

        {(currentStep === 2 || currentStep === 3) && currentQuestion && (
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.optionButton, selectedOption === index && styles.selectedOption]}
                onPress={() => setSelectedOption(index)}
              >
                <Text style={[styles.optionText, selectedOption === index && styles.selectedOptionText]}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {currentStep === 4 && (
          <View style={styles.resultContainer}>
            <MaterialCommunityIcons name="trophy-outline" size={100} color="#F2A900" />
            <Text style={styles.title}>Test Sonucu</Text>
            <Text style={styles.scoreText}>Puanınız: {score} / 100</Text>
            <Text style={styles.description}>
              {score === 100 ? 'Harika iş! Tüm soruları doğru bildiniz.' : 'Daha fazla pratik yapmaya devam edin!'}
            </Text>
          </View>
        )}

      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.button, (currentStep === 2 || currentStep === 3) && selectedOption === null && styles.buttonDisabled]} 
          onPress={handleNext}
          disabled={(currentStep === 2 || currentStep === 3) && selectedOption === null}
        >
          <Text style={styles.buttonText}>
            {currentStep === 4 ? 'Bitir' : 'Devam Et'}
          </Text>
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
  questionContainer: {
    width: '100%',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111',
  },
  optionButton: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E4E8',
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  selectedOption: {
    borderColor: '#41B036',
    backgroundColor: '#E8F5E9',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#166534',
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#41B036',
    marginBottom: 16,
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
  buttonDisabled: {
    backgroundColor: '#95D58D',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
