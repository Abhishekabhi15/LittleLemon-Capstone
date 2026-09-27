import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Load saved profile data when screen mounts
  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const storedFirstName = await AsyncStorage.getItem('firstName');
      const storedLastName = await AsyncStorage.getItem('lastName');
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPhone = await AsyncStorage.getItem('phone');

      if (storedFirstName) setFirstName(storedFirstName);
      if (storedLastName) setLastName(storedLastName);
      if (storedEmail) setEmail(storedEmail);
      if (storedPhone) setPhone(storedPhone);
    } catch (error) {
      console.log('Error loading profile:', error);
    }
  };

  const handleSaveChanges = async () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      Alert.alert('Incomplete', 'Please fill in all fields before saving.');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    try {
      await AsyncStorage.setItem('firstName', firstName.trim());
      await AsyncStorage.setItem('lastName', lastName.trim());
      await AsyncStorage.setItem('email', email.trim());
      await AsyncStorage.setItem('phone', phone.trim());

      Alert.alert('Saved!', 'Your profile has been updated successfully.');
    } catch (error) {
      Alert.alert('Error', 'Could not save changes. Please try again.');
      console.log('Save error:', error);
    }
  };

  const handleLogOut = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out? Your profile data will be cleared.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.multiRemove([
                'firstName',
                'lastName',
                'email',
                'phone',
              ]);
              // Clear local state
              setFirstName('');
              setLastName('');
              setEmail('');
              setPhone('');
              // Navigate back to Onboarding and clear the stack
              navigation.reset({
                index: 0,
                routes: [{ name: 'Onboarding' }],
              });
            } catch (error) {
              Alert.alert('Error', 'Could not log out. Please try again.');
              console.log('Logout error:', error);
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Custom Header with Back Button */}
        <View style={styles.headerBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            accessibilityLabel="Go back"
            accessibilityRole="button"
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Profile Avatar */}
          <View style={styles.avatarSection}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarEmoji}>👤</Text>
            </View>
            <Text style={styles.avatarName}>
              {firstName || 'Your'} {lastName || 'Profile'}
            </Text>
            <Text style={styles.avatarEmail}>{email || ''}</Text>
          </View>

          {/* Personal Info Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Personal Information</Text>

            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor="#AAAAAA"
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
              returnKeyType="next"
              accessibilityLabel="First Name"
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last name"
              placeholderTextColor="#AAAAAA"
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
              returnKeyType="next"
              accessibilityLabel="Last Name"
            />

            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#AAAAAA"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              accessibilityLabel="Email Address"
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor="#AAAAAA"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              returnKeyType="done"
              accessibilityLabel="Phone Number"
            />
          </View>

          {/* Action Buttons */}
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveChanges}
              accessibilityLabel="Save Changes"
              accessibilityRole="button"
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogOut}
              accessibilityLabel="Log Out"
              accessibilityRole="button"
            >
              <Text style={styles.logoutButtonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFEE',
  },
  backButton: {
    paddingVertical: 4,
    paddingRight: 12,
  },
  backButtonText: {
    fontSize: 16,
    color: '#495E57',
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
  },
  headerSpacer: {
    width: 60,
  },
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  avatarSection: {
    backgroundColor: '#495E57',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F4CE14',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  avatarEmoji: {
    fontSize: 44,
  },
  avatarName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  avatarEmail: {
    fontSize: 14,
    color: '#EDEFEE',
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFEE',
    paddingBottom: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#495E57',
    marginBottom: 6,
    marginTop: 2,
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
  actionsContainer: {
    paddingHorizontal: 16,
    gap: 12,
  },
  saveButton: {
    backgroundColor: '#F4CE14',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#F4CE14',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    letterSpacing: 0.3,
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#495E57',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#495E57',
    letterSpacing: 0.3,
  },
});
