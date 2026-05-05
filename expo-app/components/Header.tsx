import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Logo from './Logo';

interface HeaderProps {
  variant?: 'white' | 'green';
  title?: string;
  leftType?: 'logo' | 'back' | 'info' | 'none';
  rightType?: 'close' | 'cube' | 'none';
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

export default function Header({ 
  variant = 'green', 
  title, 
  leftType = 'logo', 
  rightType = 'close',
  onLeftPress,
  onRightPress
}: HeaderProps) {
  const isWhite = variant === 'white';
  
  const content = (
    <View style={styles.headerContent}>
      <View style={styles.leftContainer}>
        {leftType === 'logo' && <Logo color={isWhite ? 'black' : 'white'} />}
        {leftType === 'back' && (
          <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color={isWhite ? '#000' : '#fff'} />
          </TouchableOpacity>
        )}
        {leftType === 'info' && (
          <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
            <Ionicons name="information-circle-outline" size={28} color={isWhite ? '#000' : '#fff'} />
          </TouchableOpacity>
        )}
        {title && leftType !== 'logo' && (
          <Text style={[styles.title, { color: isWhite ? '#000' : '#fff' }]}>{title}</Text>
        )}
      </View>

      {leftType === 'back' || leftType === 'info' ? (
         !title ? (
           <View style={styles.centerContainer}>
             <Logo color={isWhite ? 'black' : 'white'} />
           </View>
         ) : null
      ) : null}

      <View style={styles.rightContainer}>
        {rightType === 'close' && (
          <TouchableOpacity onPress={onRightPress} style={styles.iconButton}>
            <Ionicons name="close" size={32} color={isWhite ? '#41B036' : '#fff'} style={{ fontWeight: 'bold' }} />
          </TouchableOpacity>
        )}
        {rightType === 'cube' && (
          <TouchableOpacity onPress={onRightPress} style={styles.iconButton}>
            <MaterialCommunityIcons name="cube-outline" size={28} color={isWhite ? '#41B036' : '#fff'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  if (isWhite) {
    return (
      <SafeAreaView style={{ backgroundColor: '#fff' }}>
        <View style={styles.container}>
          {content}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <LinearGradient
      colors={['#61D835', '#41B036']}
      style={styles.gradientContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          {content}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  container: {
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  centerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  iconButton: {
    padding: 4,
  },
});
