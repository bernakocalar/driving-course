import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Merhaba, Ahmet!</Text>
        <Text style={styles.subGreeting}>TC: 123456***** Onaylı Üye</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Yaklaşan Randevunuz</Text>
        <View style={styles.appointmentBox}>
          <View>
            <Text style={styles.date}>12 Mayıs 2026, Perşembe</Text>
            <Text style={styles.time}>14:00 - 15:30</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Direksiyon</Text>
          </View>
        </View>
        <Text style={styles.instructor}>Eğitmen: Mehmet Yılmaz</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.smallCard, { backgroundColor: '#1e40af' }]}>
          <Text style={styles.smallCardValue}>2</Text>
          <Text style={styles.smallCardTitle}>Kalan{'\n'}Direksiyon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.smallCard, { backgroundColor: '#047857' }]}>
          <Text style={styles.smallCardValue}>%85</Text>
          <Text style={styles.smallCardTitle}>E-Sınav{'\n'}Başarısı</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.smallCard, { backgroundColor: '#b45309' }]}>
          <Text style={styles.smallCardValue}>25</Text>
          <Text style={styles.smallCardTitle}>Mayıs{'\n'}Sınavı</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sonuç Açıklandı</Text>
        <Text style={styles.resultText}>Nisan Dönemi E-Sınav sonucunuz açıklandı.</Text>
        <View style={styles.resultBox}>
          <Text style={styles.resultScore}>88 Puan</Text>
          <Text style={styles.resultStatus}>BAŞARILI</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  header: { padding: 24, backgroundColor: '#2563eb', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  greeting: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  subGreeting: { fontSize: 14, color: '#bfdbfe', marginTop: 4 },
  card: { backgroundColor: 'white', margin: 16, padding: 20, borderRadius: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#1e293b', marginBottom: 16 },
  appointmentBox: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  date: { fontSize: 16, fontWeight: '600', color: '#334155' },
  time: { fontSize: 14, color: '#64748b', marginTop: 4 },
  badge: { backgroundColor: '#dbeafe', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  badgeText: { color: '#1e40af', fontWeight: '600', fontSize: 12 },
  instructor: { fontSize: 14, color: '#475569', borderTopWidth: 1, borderTopColor: '#e2e8f0', paddingTop: 12 },
  row: { flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between' },
  smallCard: { flex: 1, marginHorizontal: 4, padding: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  smallCardValue: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  smallCardTitle: { fontSize: 12, color: 'white', textAlign: 'center', marginTop: 4, opacity: 0.9 },
  resultText: { fontSize: 14, color: '#475569', marginBottom: 12 },
  resultBox: { backgroundColor: '#ecfdf5', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  resultScore: { fontSize: 20, fontWeight: 'bold', color: '#065f46' },
  resultStatus: { fontSize: 14, fontWeight: 'bold', color: '#10b981' }
});
