import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const CATEGORIES = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>ORDER FOR DELIVERY!</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <TouchableOpacity
              key={category}
              style={[styles.chip, isSelected && styles.chipSelected]}
              onPress={() => onSelectCategory(category)}
              accessibilityLabel={`Filter by ${category}`}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
            >
              <Text
                style={[styles.chipText, isSelected && styles.chipTextSelected]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#333333',
    paddingHorizontal: 16,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 4,
    gap: 10,
  },
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#EDEFEE',
    marginRight: 8,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  chipSelected: {
    backgroundColor: '#495E57',
    borderColor: '#495E57',
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495E57',
  },
  chipTextSelected: {
    color: '#F4CE14',
  },
  divider: {
    height: 1,
    backgroundColor: '#EDEFEE',
    marginTop: 12,
    marginHorizontal: 16,
  },
});
