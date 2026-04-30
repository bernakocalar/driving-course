import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function CalendarScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Takvim & Randevular</Text>
        <Text style={styles.subtitle}>Sınav takviminizi ve ders randevularınızı buradan takip edebilirsiniz.</Text>
      </View>

      <Text style={styles.sectionTitle}>Gelecek Randevular</Text>
      
      <View style={styles.card}>
        <View style={styles.dateBadge}>
          <Text style={styles.dateDay}>12</Text>
          <Text style={styles.dateMonth}>MAY</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.itemTitle}>Direksiyon Dersi</Text>
          <Text style={styles.itemTime}>14:00 - 15:30</Text>
          <Text style={styles.itemInstructor}>Eğitmen: Mehmet Yılmaz</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.dateBadge}>
          <Text style={styles.dateDay}>15</Text>
          <Text style={styles.dateMonth}>MAY</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.itemTitle}>Teorik Ders (İlkyardım)</Text>
          <Text style={styles.itemTime}>18:00 - 20:00</Text>
          <Text style={styles.itemInstructor}>Eğitmen: Zeynep Hoca</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Sınav Takvimi</Text>

      <View style={[styles.card, { borderLeftWidth: 4, borderLeftColor: '#ef4444' }]}>
        <View style={styles.cardInfo}>
          <Text style={styles.itemTitle}>E-Sınav (Teorik)</Text>
          <Text style={styles.itemTime}>25 Mayıs 2026, Pazartesi - 10:00</Text>
          <Text style={styles.itemInstructor}>Milli Eğitim Merkezi</Text>
        </View>
      </View>

      <View style={[styles.card, { borderLeftWidth: 4, borderLeftColor: '#10b981' }]}>
        <View style={styles.cardInfo}>
          <Text style={styles.itemTitle}>Direksiyon Sınavı</Text>
          <Text style={styles.itemTime}>02 Haziran 2026, Pazar - 09:30</Text>
          <Text style={styles.itemInstructor}>Sınav Başlangıç Alanı</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Yeni Randevu Talebi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  header: { padding: 24, backgroundColor: 'white', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1e293b' },
  subtitle: { fontSize: 14, color: '#64748b', marginTop: 8 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#334155', marginHorizontal: 16, marginTop: 16, marginBottom: 8 },
  card: { flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 16, marginBottom: 12, borderRadius: 12, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
  dateBadge: { backgroundColor: '#f1f5f9', width: 60, height: 60, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  dateDay: { fontSize: 20, fontWeight: 'bold', color: '#2563eb' },
  dateMonth: { fontSize: 12, fontWeight: '600', color: '#64748b' },
  cardInfo: { flex: 1, justifyContent: 'center' },
  itemTitle: { fontSize: 16, fontWeight: '600', color: '#1e293b', marginBottom: 4 },
  itemTime: { fontSize: 14, color: '#475569', marginBottom: 4 },
  itemInstructor: { fontSize: 13, color: '#94a3b8' },
  button: { backgroundColor: '#2563eb', margin: 24, padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});
