import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AY</Text>
        </View>
        <Text style={styles.name}>Ahmet Yılmaz</Text>
        <Text style={styles.tc}>TC: 123456*****</Text>
        <View style={styles.verifiedBadge}>
          <Text style={styles.verifiedText}>Kimlik Doğrulandı</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Kurum Bilgileri</Text>
      
      <View style={styles.menuGroup}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Hakkımızda</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>İletişim & Konum</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Blog & Duyurular</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Hesap Yönetimi</Text>
      
      <View style={styles.menuGroup}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Şifre Değiştir</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuText, { color: '#ef4444' }]}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.version}>Sürücü Kursu v1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  profileHeader: { padding: 32, backgroundColor: 'white', alignItems: 'center', borderBottomLeftRadius: 24, borderBottomRightRadius: 24, marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#dbeafe', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  avatarText: { fontSize: 32, fontWeight: 'bold', color: '#1e40af' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#1e293b' },
  tc: { fontSize: 16, color: '#64748b', marginTop: 4 },
  verifiedBadge: { marginTop: 12, backgroundColor: '#dcfce7', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  verifiedText: { color: '#166534', fontWeight: 'bold', fontSize: 12 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#64748b', marginHorizontal: 24, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
  menuGroup: { backgroundColor: 'white', marginHorizontal: 16, borderRadius: 16, marginBottom: 24, paddingVertical: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, paddingHorizontal: 20 },
  menuText: { fontSize: 16, fontWeight: '500', color: '#1e293b' },
  menuArrow: { fontSize: 24, color: '#cbd5e1' },
  divider: { height: 1, backgroundColor: '#f1f5f9', marginHorizontal: 20 },
  version: { textAlign: 'center', color: '#94a3b8', fontSize: 12, marginBottom: 32 }
});
