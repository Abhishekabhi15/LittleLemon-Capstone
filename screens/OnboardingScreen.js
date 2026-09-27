import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Simple validation: all fields must be non-empty
  // Email must contain @ and phone must have at least 7 digits
  const isFormValid =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    email.trim().length > 0 &&
    email.includes('@') &&
    phone.trim().length >= 7;

  const handleNext = async () => {
    if (!isFormValid) return;

    try {
      await AsyncStorage.setItem('firstName', firstName.trim());
      await AsyncStorage.setItem('lastName', lastName.trim());
      await AsyncStorage.setItem('email', email.trim());
      await AsyncStorage.setItem('phone', phone.trim());

      navigation.replace('Home');
    } catch (error) {
      Alert.alert('Error', 'Could not save your information. Please try again.');
      console.log('AsyncStorage error:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Top Bar */}
        <View style={styles.topBar}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoEmoji}>🍋</Text>
          </View>
          <Text style={styles.brandName}>Little Lemon</Text>
        </View>

        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <Text style={styles.heroTitle}>Welcome!</Text>
          <Text style={styles.heroSubtitle}>
            Let's get to know you before we serve the best Mediterranean food.
          </Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Personal Details</Text>
          <Text style={styles.formSubtitle}>
            Please fill in all fields to continue.
          </Text>

          {/* First Name */}
          <Text style={styles.label}>First Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            placeholderTextColor="#AAAAAA"
            value={firstName}
            onChangeText={setFirstName}
            autoCapitalize="words"
            returnKeyType="next"
            accessibilityLabel="First Name"
          />

          {/* Last Name */}
          <Text style={styles.label}>Last Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            placeholderTextColor="#AAAAAA"
            value={lastName}
            onChangeText={setLastName}
            autoCapitalize="words"
            returnKeyType="next"
            accessibilityLabel="Last Name"
          />

          {/* Email */}
          <Text style={styles.label}>Email Address *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#AAAAAA"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            accessibilityLabel="Email Address"
          />

          {/* Phone */}
          <Text style={styles.label}>Phone Number *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#AAAAAA"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            returnKeyType="done"
            accessibilityLabel="Phone Number"
          />

          {/* Next Button */}
          <TouchableOpacity
            style={[
              styles.nextButton,
              !isFormValid && styles.nextButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={!isFormValid}
            accessibilityLabel="Next"
            accessibilityRole="button"
            accessibilityState={{ disabled: !isFormValid }}
          >
            <Text
              style={[
                styles.nextButtonText,
                !isFormValid && styles.nextButtonTextDisabled,
              ]}
            >
              Next →
            </Text>
          </TouchableOpacity>

          {!isFormValid && (
            <Text style={styles.hintText}>
              Please fill in all fields with a valid email to continue.
            </Text>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFEE',
  },
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#495E57',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoEmoji: {
    fontSize: 22,
  },
  brandName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#495E57',
  },
  heroBanner: {
    backgroundColor: '#495E57',
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#F4CE14',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 15,
    color: '#EDEFEE',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 280,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 4,
  },
  formSubtitle: {
    fontSize: 13,
    color: '#888888',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495E57',
    marginBottom: 6,
    marginTop: 4,
  },
  input: {
    height: 50,
    borderWidth: 1.5,
    borderColor: '#EDEFEE',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#333333',
    backgroundColor: '#F9F9F9',
    marginBottom: 14,
  },
  nextButton: {
    backgroundColor: '#F4CE14',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#F4CE14',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  nextButtonDisabled: {
    backgroundColor: '#EDEFEE',
    shadowOpacity: 0,
    elevation: 0,
  },
  nextButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333333',
    letterSpacing: 0.3,
  },
  nextButtonTextDisabled: {
    color: '#AAAAAA',
  },
  hintText: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 10,
  },
});
