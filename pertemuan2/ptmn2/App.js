import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileIcon}>
            <Ionicons name="person" size={45} color="#ffffff" />
          </View>

          <Text style={styles.name}>Mifa Miftahul Falaah</Text>
        </View>

        {/* Data Diri */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Data Diri</Text>

          <View style={styles.infoItem}>
            <Ionicons name="person-outline" size={22} color="#2563eb" />
            <View>
              <Text style={styles.label}>Nama Lengkap</Text>
              <Text style={styles.value}>Mifa Miftahul Falaah</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="id-card-outline" size={22} color="#2563eb" />
            <View>
              <Text style={styles.label}>NIM</Text>
              <Text style={styles.value}>2488010072</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="school-outline" size={22} color="#2563eb" />
            <View>
              <Text style={styles.label}>Asal Sekolah</Text>
              <Text style={styles.value}>SMAN 3 KUNINGAN</Text>
            </View>
          </View>
        </View>

        {/* Cita-cita */}
        <View style={styles.card}>
          <View style={styles.titleRow}>
            <Ionicons name="rocket-outline" size={24} color="#2563eb" />
            <Text style={styles.sectionTitle}>Cita-cita</Text>
          </View>

          <Text style={styles.goal}>
            Menjadi Web Developer
          </Text>
        </View>

        {/* Rencana */}
        <View style={styles.card}>
          <View style={styles.titleRow}>
            <Ionicons name="map-outline" size={24} color="#2563eb" />
            <Text style={styles.sectionTitle}>
              Rencana Mencapai Cita-cita
            </Text>
          </View>

          <View style={styles.planItem}>
            <View style={styles.number}>
              <Text style={styles.numberText}>1</Text>
            </View>
            <Text style={styles.planText}>
              Memperkuat dasar pemrograman dan logika.
            </Text>
          </View>

          <View style={styles.planItem}>
            <View style={styles.number}>
              <Text style={styles.numberText}>2</Text>
            </View>
            <Text style={styles.planText}>
              Mempelajari frontend dan backend development.
            </Text>
          </View>

          <View style={styles.planItem}>
            <View style={styles.number}>
              <Text style={styles.numberText}>3</Text>
            </View>
            <Text style={styles.planText}>
              Membuat berbagai proyek untuk menambah pengalaman.
            </Text>
          </View>

          <View style={styles.planItem}>
            <View style={styles.number}>
              <Text style={styles.numberText}>4</Text>
            </View>
            <Text style={styles.planText}>
              Terus belajar teknologi baru dan meningkatkan kemampuan.
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>
          © 2026 Mifa Miftahul Falaah
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },

  header: {
    backgroundColor: '#2563eb',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 35,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  profileIcon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#1d4ed8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  role: {
    fontSize: 15,
    color: '#dbeafe',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#ffffff',
    marginHorizontal: 18,
    marginTop: 18,
    padding: 20,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 18,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    gap: 14,
  },

  label: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 3,
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
  },

  goal: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2563eb',
    backgroundColor: '#eff6ff',
    padding: 15,
    borderRadius: 12,
  },

  planItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  number: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  numberText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  planText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#475569',
  },

  footer: {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: 12,
    marginVertical: 25,
  },
});