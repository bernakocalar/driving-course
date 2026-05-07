import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const columnWidth = (width - 45) / 2;

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header 
        variant="green" 
        leftType="info" 
        rightType="cube" 
      />

      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.banner}>
          <MaterialCommunityIcons name="bullhorn-outline" size={24} color="#fff" style={styles.bannerIcon} />
          <Text style={styles.bannerText}>
            Her dönem şehit, gazi yakınlarına ve yoksul ve muhtaç olanlara ücretsiz eğitim verilir.
          </Text>
        </View>

        <View style={styles.gridContainer}>
          <View style={styles.leftColumn}>
            <TouchableOpacity style={styles.card} onPress={() => router.push('/exams')}>
              <MaterialCommunityIcons name="application-outline" size={28} color="#41B036" />
              <Text style={styles.cardTitle}>Online E-Sınav</Text>
              <Text style={styles.cardSubtitle}>Kayıtlı kursiyerlerimiz için online E-Sınav.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => router.push('/test')}>
              <MaterialCommunityIcons name="format-list-checks" size={28} color="#41B036" />
              <Text style={styles.cardTitle}>Online Test</Text>
              <Text style={styles.cardSubtitle}>Testi çözüp soruları cevaplayın.</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rightColumn}>
            <TouchableOpacity style={[styles.card, styles.tallCard]} onPress={() => router.push('/calendar')}>
              <MaterialCommunityIcons name="calendar-month-outline" size={28} color="#41B036" />
              <Text style={styles.cardTitle}>Randevu Sistemi</Text>
              <Text style={[styles.cardSubtitle, { marginBottom: 20 }]}>
                Kayıtlı kursiyerlerimiz, randevu sistemini kullanarak eğitim/sınav günleri ve saatlerine, araç ve eğitmenlere karar verebilirler.
              </Text>
              <View style={styles.arrowButton}>
                <MaterialCommunityIcons name="chevron-right" size={24} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.fullCard} onPress={() => Alert.alert('Bilgi', 'E-Kitap özelliği yakında eklenecektir.')}>
          <View>
            <Text style={styles.cardTitle}>E-Kitap</Text>
            <Text style={styles.cardSubtitle}>Online Sürücü Kitabı</Text>
          </View>
          <MaterialCommunityIcons name="book-open-page-variant" size={36} color="#41B036" />
        </TouchableOpacity>

        <View style={styles.newsSection}>
          <View style={styles.newsHeader}>
            <MaterialCommunityIcons name="book-open-blank-variant" size={24} color="#000" />
            <Text style={styles.newsTitle}>Haberler</Text>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.newsScroll}>
            <View style={[styles.newsCard, { backgroundColor: '#78909C' }]} />
            <View style={[styles.newsCard, { backgroundColor: '#41B036', padding: 2 }]}>
              <View style={{ flex: 1, backgroundColor: '#D7CCC8', borderRadius: 10 }} />
            </View>
            <View style={[styles.newsCard, { backgroundColor: '#212121' }]} />
          </ScrollView>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    padding: 15,
    paddingBottom: 40,
  },
  banner: {
    backgroundColor: '#3b719f', // From image: blue/slate color
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerIcon: {
    marginRight: 10,
  },
  bannerText: {
    color: '#fff',
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  leftColumn: {
    width: columnWidth,
    justifyContent: 'space-between',
  },
  rightColumn: {
    width: columnWidth,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 15,
  },
  tallCard: {
    flex: 1,
    marginBottom: 0,
    position: 'relative',
  },
  cardTitle: {
    color: '#41B036',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  cardSubtitle: {
    color: '#888',
    fontSize: 12,
    lineHeight: 18,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#61D835',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 25,
  },
  newsSection: {
    marginTop: 5,
  },
  newsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  newsScroll: {
    gap: 15,
  },
  newsCard: {
    width: 140,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
