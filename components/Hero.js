import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function Hero({ searchText, onSearchChange }) {
  return (
    <View style={styles.heroContainer}>
      {/* Restaurant Info */}
      <View style={styles.heroContent}>
        <View style={styles.heroTextSection}>
          <Text style={styles.restaurantName}>Little Lemon</Text>
          <Text style={styles.restaurantLocation}>Chicago</Text>
          <Text style={styles.restaurantDescription}>
            We are a family-owned Mediterranean restaurant focused on traditional
            recipes served with a modern twist. Fresh ingredients, bold flavors,
            and a warm atmosphere — every visit feels like home.
          </Text>
        </View>
        {/* Decorative emoji image */}
        <View style={styles.heroImageContainer}>
          <Text style={styles.heroEmoji}>🍽️</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search our menu..."
          placeholderTextColor="#888888"
          value={searchText}
          onChangeText={onSearchChange}
          returnKeyType="search"
          clearButtonMode="while-editing"
          accessibilityLabel="Search menu items"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    backgroundColor: '#495E57',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 28,
  },
  heroContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  heroTextSection: {
    flex: 1,
    paddingRight: 10,
  },
  restaurantName: {
    fontSize: 32,
    fontWeight: '800',
    color: '#F4CE14',
    marginBottom: 2,
  },
  restaurantLocation: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  restaurantDescription: {
    fontSize: 13,
    color: '#EDEFEE',
    lineHeight: 20,
  },
  heroImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(244,206,20,0.4)',
  },
  heroEmoji: {
    fontSize: 52,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333333',
    padding: 0,
  },
});
