import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MenuItem({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.textSection}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription} numberOfLines={2}>
            {item.description}
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
          </View>
        </View>
        <View style={styles.emojiContainer}>
          <Text style={styles.itemEmoji}>{item.emoji}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EDEFEE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSection: {
    flex: 1,
    paddingRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 19,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#495E57',
  },
  categoryBadge: {
    backgroundColor: '#EDEFEE',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  categoryText: {
    fontSize: 11,
    color: '#495E57',
    fontWeight: '600',
  },
  emojiContainer: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EDEFEE',
  },
  itemEmoji: {
    fontSize: 36,
  },
});
