import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function ExamsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Deneme Sınavları</Text>
        <Text style={styles.subtitle}>Gerçek sınav öncesi kendinizi test edin.</Text>
      </View>

      <Text style={styles.sectionTitle}>Aktif Denemeler</Text>
      
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Trafik ve Çevre Bilgisi</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Zor</Text>
          </View>
        </View>
        <Text style={styles.cardDesc}>50 Soru • 45 Dakika</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sınava Başla</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Motor ve Araç Tekniği</Text>
          <View style={[styles.badge, { backgroundColor: '#dcfce7' }]}>
            <Text style={[styles.badgeText, { color: '#166534' }]}>Orta</Text>
          </View>
        </View>
        <Text style={styles.cardDesc}>50 Soru • 45 Dakika</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sınava Başla</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Geçmiş Sonuçlarınız</Text>

      <View style={styles.resultCard}>
        <View>
          <Text style={styles.resultTitle}>Genel Deneme #1</Text>
          <Text style={styles.resultDate}>10 Mayıs 2026</Text>
        </View>
        <View style={styles.scoreCircle}>
          <Text style={styles.scoreText}>82</Text>
        </View>
      </View>

      <View style={styles.resultCard}>
        <View>
          <Text style={styles.resultTitle}>Trafik Kuralları #1</Text>
          <Text style={styles.resultDate}>5 Mayıs 2026</Text>
        </View>
        <View style={[styles.scoreCircle, { borderColor: '#ef4444' }]}>
          <Text style={[styles.scoreText, { color: '#ef4444' }]}>64</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  header: { padding: 24, backgroundColor: 'white', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1e293b' },
  subtitle: { fontSize: 14, color: '#64748b', marginTop: 8 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#334155', marginHorizontal: 16, marginTop: 8, marginBottom: 12 },
  card: { backgroundColor: 'white', marginHorizontal: 16, marginBottom: 16, borderRadius: 16, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 3 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#1e293b' },
  badge: { backgroundColor: '#fee2e2', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeText: { color: '#991b1b', fontSize: 12, fontWeight: 'bold' },
  cardDesc: { fontSize: 14, color: '#64748b', marginBottom: 16 },
  button: { backgroundColor: '#2563eb', padding: 14, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  resultCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', marginHorizontal: 16, marginBottom: 12, borderRadius: 12, padding: 16, borderLeftWidth: 4, borderLeftColor: '#2563eb' },
  resultTitle: { fontSize: 16, fontWeight: '600', color: '#1e293b', marginBottom: 4 },
  resultDate: { fontSize: 13, color: '#94a3b8' },
  scoreCircle: { width: 50, height: 50, borderRadius: 25, borderWidth: 3, borderColor: '#10b981', alignItems: 'center', justifyContent: 'center' },
  scoreText: { fontSize: 18, fontWeight: 'bold', color: '#10b981' }
});
