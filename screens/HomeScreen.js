import React, { useState, useMemo } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData';

export default function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Derived filtered list — recomputed only when search/category changes
  const filteredMenu = useMemo(() => {
    let items = menuData;

    // Filter by category
    if (selectedCategory !== 'All') {
      items = items.filter((item) => item.category === selectedCategory);
    }

    // Filter by search text (case-insensitive, on name)
    const query = searchText.trim().toLowerCase();
    if (query.length > 0) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
    }

    return items;
  }, [searchText, selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  // Render the top part of the list (Header + Hero + CategoryFilter)
  const ListHeader = () => (
    <>
      <Header showProfile onProfilePress={handleProfilePress} />
      <Hero searchText={searchText} onSearchChange={handleSearchChange} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
    </>
  );

  // Render when no items match filters
  const ListEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>🍽️</Text>
      <Text style={styles.emptyTitle}>No items found</Text>
      <Text style={styles.emptySubtitle}>
        Try a different search term or category.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItem item={item} />}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={ListEmpty}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  emptyEmoji: {
    fontSize: 56,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    lineHeight: 20,
  },
});
