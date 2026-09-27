# Little Lemon Food Ordering App

## Description

Little Lemon is a family-owned Mediterranean restaurant mobile app built with **React Native** and **Expo**. This app was created as a Coursera capstone project. It allows users to onboard, browse a menu with filtering and search, and manage their profile.

---

## Features

- ✅ **Onboarding** — First-launch registration screen with form validation
- ✅ **Persistent user profile** — Data saved with AsyncStorage, survives restarts
- ✅ **Home screen** — Branded header, hero section, food menu list
- ✅ **Search** — Real-time search filtering of menu items by name
- ✅ **Menu categories** — Filter menu by Starters, Mains, Desserts, Drinks
- ✅ **Food menu** — Scrollable FlatList with 13 Mediterranean menu items
- ✅ **Profile editing** — Edit personal details and save changes
- ✅ **Logout** — Clears all stored data, returns to Onboarding
- ✅ **Stack navigation** — React Navigation with back button support

---

## Technologies

- **React Native** — Mobile framework
- **Expo** (~49) — Development platform
- **JavaScript** — Programming language (no TypeScript)
- **React Navigation** — `@react-navigation/native` + `@react-navigation/native-stack`
- **AsyncStorage** — `@react-native-async-storage/async-storage`

---

## Project Structure

```
LittleLemon/
├── assets/                    # App icons, splash screen
├── components/
│   ├── Header.js              # Top navigation bar with logo + profile button
│   ├── Hero.js                # Hero section with description + search bar
│   ├── CategoryFilter.js      # Horizontal scrollable category chip buttons
│   └── MenuItem.js            # Individual food item card
├── screens/
│   ├── OnboardingScreen.js    # First launch registration form
│   ├── HomeScreen.js          # Main menu browsing screen
│   └── ProfileScreen.js       # User profile view/edit screen
├── navigation/
│   └── AppNavigator.js        # Stack navigator setup
├── data/
│   └── menuData.js            # 13 menu items with category/price/description
├── App.js                     # Entry point — checks login state
├── app.json                   # Expo configuration
├── babel.config.js            # Babel configuration
└── package.json               # Dependencies
```

---

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or later): https://nodejs.org
- **Expo CLI**: Install globally with:

```bash
npm install -g expo-cli
```

- **Expo Go app** on your phone (iOS App Store / Google Play Store)

---

### Step 1: Navigate to the project folder

```bash
cd LittleLemon
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Start the app

```bash
npx expo start
```

---

## Running the App

After running `npx expo start`, you will see a QR code in the terminal.

**On your phone:**
1. Open the **Expo Go** app
2. Scan the QR code
3. The app will load on your phone

**On a simulator/emulator:**
- Press `i` in the terminal to open iOS Simulator (Mac only)
- Press `a` to open Android Emulator (requires Android Studio)

---

## App Navigation Flow

```
First launch:
  Onboarding → Home → Profile

Returning user (data already saved):
  App opens directly on Home → Profile

Logout:
  Profile → (clears data) → Onboarding
```

---

## Design Colors

| Color       | Hex       | Usage                    |
|-------------|-----------|--------------------------|
| Dark Green  | `#495E57` | Primary brand color      |
| Yellow      | `#F4CE14` | Accent / CTA buttons     |
| White       | `#FFFFFF` | Cards, backgrounds       |
| Light Gray  | `#EDEFEE` | Page backgrounds, borders|
| Dark Text   | `#333333` | Body text                |

---

## Coursera Grading Checklist

| # | Requirement | Status |
|---|-------------|--------|
| 1 | Wireframe design on which app is based | ✅ See wireframe below |
| 2 | First launch shows Onboarding screen | ✅ App checks AsyncStorage on startup |
| 3 | Onboarding asks for personal details | ✅ First name, last name, email, phone |
| 4 | Next button disabled until details entered | ✅ Disabled prop + style when invalid |
| 5 | Home screen has Header, Hero, Menu breakdown, Food list | ✅ All 4 sections present |
| 6 | Profile screen populated with onboarding data | ✅ Loads from AsyncStorage on mount |
| 7 | Profile changes saved after restart | ✅ Saved to AsyncStorage |
| 8 | Log Out clears profile data | ✅ AsyncStorage.multiRemove() |
| 9 | Stack navigation with back button | ✅ React Navigation native-stack |
| 10 | Hero has description + search bar | ✅ Both present in Hero.js |
| 11 | Menu breakdown has selectable categories | ✅ CategoryFilter with All/4 categories |
| 12 | Food menu shows summarized items | ✅ FlatList with 13 items |
| 13 | Search filters menu | ✅ Real-time filtering in HomeScreen |
| 14 | Category selection filters menu | ✅ Works with search simultaneously |
| 15 | App runs with Expo | ✅ Standard Expo 49 setup |
