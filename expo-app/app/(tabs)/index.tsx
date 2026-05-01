import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const { isAuthenticated, userTc } = useAuth();
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {isAuthenticated ? (
        <>
          <View style={styles.header}>
            <Text style={styles.greeting}>Merhaba Kursiyer!</Text>
            <Text style={styles.subGreeting}>TC: {userTc} • Onaylı Üye</Text>
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
            <TouchableOpacity style={[styles.smallCard, { backgroundColor: '#1e40af' }]} onPress={() => router.push('/calendar')}>
              <Text style={styles.smallCardValue}>2</Text>
              <Text style={styles.smallCardTitle}>Kalan{'\n'}Direksiyon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.smallCard, { backgroundColor: '#047857' }]} onPress={() => router.push('/exams')}>
              <Text style={styles.smallCardValue}>%85</Text>
              <Text style={styles.smallCardTitle}>E-Sınav{'\n'}Başarısı</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Güvenli Sürüşün Adresi</Text>
          <Text style={styles.heroSubtitle}>Sürücü kursumuza hoş geldiniz. Kursiyerlerimiz TC Kimlik ile sisteme giriş yaparak eğitim takvimlerine ulaşabilirler.</Text>
        </View>
      )}

      {/* Public Content - Visible to everyone */}
      <Text style={styles.sectionTitle}>Hakkımızda & Duyurular</Text>
      
      <View style={styles.card}>
        <Text style={styles.newsTitle}>Yeni Araç Filomuz Geldi!</Text>
        <Text style={styles.newsText}>Eğitimlerimizde kullanılmak üzere 2026 model yeni güvenlik donanımlı araçlarımız filomuza katılmıştır. Eğitim kalitemizi her geçen gün artırıyoruz.</Text>
        <TouchableOpacity>
          <Text style={styles.readMore}>Devamını Oku &rarr;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.newsTitle}>E-Sınav İçin İpuçları (Blog)</Text>
        <Text style={styles.newsText}>Elektronik ehliyet sınavında dikkat etmeniz gereken 5 altın kural. Sınav stresiyle başa çıkmak ve ilk seferde geçmek için uzmanlarımızın tavsiyeleri...</Text>
        <TouchableOpacity>
          <Text style={styles.readMore}>Blog Yazısına Git &rarr;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.newsTitle}>İletişim & Hakkımızda</Text>
        <Text style={styles.newsText}>15 yıllık tecrübemiz ve uzman eğitmen kadromuzla trafikte bilinçli sürücüler yetiştiriyoruz. Bize ulaşmak için 0850 123 45 67 numarasını arayabilirsiniz.</Text>
        <Text style={styles.newsText}>Adres: Merkez Mahallesi, Atatürk Bulvarı No: 123</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  header: { padding: 24, backgroundColor: '#2563eb', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  greeting: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  subGreeting: { fontSize: 14, color: '#bfdbfe', marginTop: 4 },
  heroSection: { padding: 32, backgroundColor: '#2563eb', alignItems: 'center', borderBottomLeftRadius: 24, borderBottomRightRadius: 24, marginBottom: 16 },
  heroTitle: { fontSize: 28, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 12 },
  heroSubtitle: { fontSize: 16, color: '#e0e7ff', textAlign: 'center', lineHeight: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#334155', marginHorizontal: 16, marginTop: 24, marginBottom: 12 },
  card: { backgroundColor: 'white', marginHorizontal: 16, marginBottom: 16, padding: 20, borderRadius: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#1e293b', marginBottom: 16 },
  appointmentBox: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  date: { fontSize: 16, fontWeight: '600', color: '#334155' },
  time: { fontSize: 14, color: '#64748b', marginTop: 4 },
  badge: { backgroundColor: '#dbeafe', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  badgeText: { color: '#1e40af', fontWeight: '600', fontSize: 12 },
  instructor: { fontSize: 14, color: '#475569', borderTopWidth: 1, borderTopColor: '#e2e8f0', paddingTop: 12 },
  row: { flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', marginBottom: 16 },
  smallCard: { flex: 1, marginHorizontal: 4, padding: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  smallCardValue: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  smallCardTitle: { fontSize: 12, color: 'white', textAlign: 'center', marginTop: 4, opacity: 0.9 },
  newsTitle: { fontSize: 18, fontWeight: 'bold', color: '#1e293b', marginBottom: 8 },
  newsText: { fontSize: 14, color: '#475569', lineHeight: 22, marginBottom: 12 },
  readMore: { color: '#2563eb', fontWeight: '600', fontSize: 14 }
});
