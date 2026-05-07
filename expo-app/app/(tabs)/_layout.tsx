import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#41B036',
        tabBarInactiveTintColor: '#A0A0A0',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}>
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Randevu',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="calendar-edit" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="exams"
        options={{
          title: 'Sınav/Sonuç',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-star-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.centerButton, focused && styles.centerButtonActive]}>
              <Text style={styles.centerButtonText}>Ö</Text>
              <View style={styles.smile} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          title: 'Online Test',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="format-list-checks" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'İletişim',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="headset" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  centerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#3EA832',
    justifyContent: 'center',
    alignItems: 'center',
    top: -15,
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  centerButtonActive: {
    backgroundColor: '#359929',
  },
  centerButtonText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -5,
  },
  smile: {
    width: 16,
    height: 8,
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
    borderLeftWidth: 3,
    borderLeftColor: '#fff',
    borderRightWidth: 3,
    borderRightColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: -2,
  }
});
