import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function Header({ showProfile, onProfilePress }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo / Brand Name */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoLetter}>🍋</Text>
          </View>
          <View style={styles.logoTextContainer}>
            <Text style={styles.logoName}>Little Lemon</Text>
            <Text style={styles.logoTagline}>Mediterranean Kitchen</Text>
          </View>
        </View>

        {/* Profile Button */}
        {showProfile && (
          <TouchableOpacity
            style={styles.profileButton}
            onPress={onProfilePress}
            accessibilityLabel="Go to Profile"
            accessibilityRole="button"
          >
            <View style={styles.profileAvatar}>
              <Text style={styles.profileAvatarText}>👤</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFEE',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#495E57',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoLetter: {
    fontSize: 24,
  },
  logoTextContainer: {
    justifyContent: 'center',
  },
  logoName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#495E57',
    letterSpacing: 0.5,
  },
  logoTagline: {
    fontSize: 11,
    color: '#888888',
    letterSpacing: 0.3,
  },
  profileButton: {
    padding: 4,
  },
  profileAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F4CE14',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#495E57',
  },
  profileAvatarText: {
    fontSize: 22,
  },
});
