import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ContactScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header
        variant="green"
        leftType="back"
        rightType="none"
        onLeftPress={() => router.push('/')}
      />

      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.row}>
          <View style={styles.card}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="phone-in-talk" size={32} color="#41B036" />
            </View>
            <Text style={styles.cardTitle}>Telefon</Text>
            <Text style={styles.cardSubtitle}>Pazartesi - Cumartesi</Text>
            <Text style={styles.cardTime}>09:00 - 19:00</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.iconCircle}>
              <FontAwesome5 name="whatsapp" size={36} color="#41B036" />
            </View>
            <Text style={styles.cardTitle}>Whatsapp</Text>
            <Text style={styles.cardSubtitle}>Pazartesi - Cumartesi</Text>
            <Text style={styles.cardTime}>09:00 - 19:00</Text>
          </View>
        </View>

        <View style={styles.emailCard}>
          <View style={styles.emailIconBox}>
            <MaterialCommunityIcons name="email-outline" size={28} color="#fff" />
          </View>
          <View style={styles.emailTextContainer}>
            <Text style={styles.emailTitle}>E-posta</Text>
            <Text style={styles.emailAddress}>info@surucukursu.com.tr</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.line} />
          <Text style={styles.sectionTitle}>Bizi Takip Edin</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <View style={[styles.socialIcon, { backgroundColor: '#C13584' }]}>
            <MaterialCommunityIcons name="instagram" size={40} color="#fff" />
          </View>
          <View style={[styles.socialIcon, { backgroundColor: '#000' }]}>
            <FontAwesome5 name="twitter" size={32} color="#fff" />
          </View>
          <View style={[styles.socialIcon, { backgroundColor: '#FF0000', borderRadius: 15 }]}>
            <MaterialCommunityIcons name="youtube" size={40} color="#fff" />
          </View>
          <View style={[styles.socialIcon, { backgroundColor: '#3b5998', borderRadius: 8 }]}>
            <FontAwesome5 name="facebook-f" size={36} color="#fff" />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.line} />
          <Text style={styles.sectionTitle}>Şubeler</Text>
          <View style={styles.line} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.branchesContainer}>
          <View style={[styles.branchTab, styles.branchTabActive]}>
            <Text style={styles.branchTabTextActive}>Hepsi</Text>
          </View>
          <View style={styles.branchTab}>
            <Text style={styles.branchTabText}>Çınar (Merk...</Text>
          </View>
          <View style={styles.branchTab}>
            <Text style={styles.branchTabText}>Kampüs</Text>
          </View>
          <View style={styles.branchTab}>
            <Text style={styles.branchTabText}>Adalet</Text>
          </View>
        </ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingTop: 30,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },
  card: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 20,
    alignItems: 'center',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#41B036',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#555',
  },
  cardTime: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
    marginTop: 2,
  },
  emailCard: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  emailIconBox: {
    width: 48,
    height: 36,
    backgroundColor: '#00C853',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  emailTextContainer: {
    flex: 1,
  },
  emailTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  emailAddress: {
    fontSize: 14,
    color: '#000',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#41B036',
  },
  sectionTitle: {
    paddingHorizontal: 15,
    color: '#41B036',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  socialIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  branchesContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
    gap: 10,
  },
  branchTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
  },
  branchTabActive: {
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#41B036',
    borderRadius: 0,
  },
  branchTabText: {
    color: '#666',
    fontWeight: '500',
  },
  branchTabTextActive: {
    color: '#41B036',
    fontWeight: 'bold',
  },
});
