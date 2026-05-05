import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const fakeAppointments = [
  {
    id: 1,
    date: '12 Mayıs 2026',
    time: '14:00 - 15:00',
    instructor: 'Ahmet Yılmaz',
    vehicle: 'Manuel - Renault Clio',
    status: 'Onaylandı',
  },
  {
    id: 2,
    date: '15 Mayıs 2026',
    time: '10:00 - 11:00',
    instructor: 'Ahmet Yılmaz',
    vehicle: 'Manuel - Renault Clio',
    status: 'Bekliyor',
  },
];

export default function RandevuListScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header 
        variant="green" 
        title="Randevularım" 
        leftType="back" 
        rightType="none" 
        onLeftPress={() => router.back()}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.pageTitle}>Gelecek Randevular</Text>

        {fakeAppointments.map((app) => (
          <View key={app.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.dateContainer}>
                <MaterialCommunityIcons name="calendar-month" size={20} color="#41B036" />
                <Text style={styles.dateText}>{app.date}</Text>
              </View>
              <View style={[styles.statusBadge, app.status === 'Onaylandı' ? styles.statusSuccess : styles.statusPending]}>
                <Text style={styles.statusText}>{app.status}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <MaterialCommunityIcons name="clock-outline" size={20} color="#666" />
              <Text style={styles.infoText}>{app.time}</Text>
            </View>

            <View style={styles.infoRow}>
              <MaterialCommunityIcons name="account-tie" size={20} color="#666" />
              <Text style={styles.infoText}>Eğitmen: {app.instructor}</Text>
            </View>

            <View style={styles.infoRow}>
              <MaterialCommunityIcons name="car-side" size={20} color="#666" />
              <Text style={styles.infoText}>Araç: {app.vehicle}</Text>
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>İptal Et</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  content: {
    padding: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusSuccess: {
    backgroundColor: '#E8F5E9',
  },
  statusPending: {
    backgroundColor: '#FFF3E0',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#41B036', // Or orange for pending, but green fits success
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 10,
  },
  actionRow: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  cancelButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FF5252',
  },
  cancelButtonText: {
    color: '#FF5252',
    fontSize: 13,
    fontWeight: '600',
  },
});
