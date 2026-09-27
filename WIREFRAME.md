# Little Lemon — Wireframe Design Plan

> This document describes the wireframe for all 3 screens. It can be recreated in Figma following these layouts.

---

## Design Tokens

| Token | Value |
|---|---|
| Primary Color | `#495E57` (Dark Green) |
| Accent Color | `#F4CE14` (Yellow) |
| Background | `#EDEFEE` (Light Gray) |
| Card Background | `#FFFFFF` |
| Body Text | `#333333` |
| Secondary Text | `#888888` |
| Border Radius (cards) | 14–16px |
| Border Radius (buttons) | 10–12px |
| Border Radius (inputs) | 10px |

---

## Screen 1: Onboarding Screen

```
┌──────────────────────────────────────┐
│  [🍋] Little Lemon                   │  ← Top Bar (white, h=80)
├──────────────────────────────────────┤
│                                      │
│         Welcome!                     │  ← Hero Banner (dark green bg)
│   Let's get to know you before       │
│   we serve the best Mediterranean    │
│   food.                              │
│                                      │
├──────────────────────────────────────┤
│  ╔════════════════════════════════╗  │
│  ║  Personal Details              ║  │  ← Form Card (white, rounded)
│  ║  Please fill in all fields     ║  │
│  ║                                ║  │
│  ║  First Name *                  ║  │
│  ║  [ Enter your first name     ] ║  │  ← TextInput (rounded, gray bg)
│  ║                                ║  │
│  ║  Last Name *                   ║  │
│  ║  [ Enter your last name      ] ║  │
│  ║                                ║  │
│  ║  Email Address *               ║  │
│  ║  [ Enter your email          ] ║  │  ← keyboardType=email-address
│  ║                                ║  │
│  ║  Phone Number *                ║  │
│  ║  [ Enter your phone number   ] ║  │  ← keyboardType=phone-pad
│  ║                                ║  │
│  ║  ╔══════════════════════════╗  ║  │
│  ║  ║      Next →              ║  ║  │  ← Yellow button (disabled until valid)
│  ║  ╚══════════════════════════╝  ║  │
│  ║                                ║  │
│  ║  Please fill in all fields     ║  │  ← Hint text (hidden when valid)
│  ╚════════════════════════════════╝  │
└──────────────────────────────────────┘

Notes:
- Next button is GRAY (#EDEFEE) when form is invalid
- Next button turns YELLOW (#F4CE14) when all fields filled
- Email must contain @, phone must be ≥7 chars
```

---

## Screen 2: Home Screen

```
┌──────────────────────────────────────┐
│  [🍋] Little Lemon    [👤]           │  ← Header (white, with profile button)
│       Mediterranean Kitchen          │
├──────────────────────────────────────┤
│                                      │
│  Little Lemon          ┌──────────┐  │  ← Hero (dark green bg)
│  Chicago               │  🍽️     │  │
│                         └──────────┘  │
│  We are a family-owned                │
│  Mediterranean restaurant...          │
│                                      │
│  ╔══════════════════════════════════╗ │
│  ║ 🔍 Search our menu...           ║ │  ← Search bar (white, rounded)
│  ╚══════════════════════════════════╝ │
├──────────────────────────────────────┤
│  ORDER FOR DELIVERY!                  │  ← Section title
│                                      │
│  [All] [Starters] [Mains] [Desserts] [Drinks] →  ← Horizontal scroll chips
│  ─────────────────────────────────── │
│                                      │
│  ╔════════════════════════════════╗  │
│  ║ Greek Salad              [🥗]  ║  │  ← Menu Item Card (white, rounded)
│  ║ Fresh lettuce, tomatoes...     ║  │
│  ║ $12.99         [Starters]      ║  │
│  ╚════════════════════════════════╝  │
│                                      │
│  ╔════════════════════════════════╗  │
│  ║ Bruschetta               [🍞]  ║  │
│  ║ Toasted artisan bread...       ║  │
│  ║ $8.99          [Starters]      ║  │
│  ╚════════════════════════════════╝  │
│                                      │
│  ... (scrollable, FlatList) ...      │
└──────────────────────────────────────┘

Notes:
- Selected category chip = dark green bg + yellow text
- Unselected chip = light gray bg + green text
- Search + category filters work simultaneously
- Profile button (top right) navigates to Profile screen
```

---

## Screen 3: Profile Screen

```
┌──────────────────────────────────────┐
│  ← Back        Profile               │  ← Custom Header Bar (white)
├──────────────────────────────────────┤
│                                      │
│            ┌─────────┐               │  ← Avatar Section (dark green bg)
│            │   👤    │               │
│            └─────────┘               │
│          John Smith                  │
│       john@example.com               │
│                                      │
├──────────────────────────────────────┤
│  ╔════════════════════════════════╗  │
│  ║  Personal Information          ║  │  ← Card (white, rounded)
│  ║  ─────────────────────────     ║  │
│  ║  First Name                    ║  │
│  ║  [ John                      ] ║  │  ← Editable TextInput
│  ║                                ║  │
│  ║  Last Name                     ║  │
│  ║  [ Smith                     ] ║  │
│  ║                                ║  │
│  ║  Email Address                 ║  │
│  ║  [ john@example.com          ] ║  │
│  ║                                ║  │
│  ║  Phone Number                  ║  │
│  ║  [ +1 555 0100               ] ║  │
│  ╚════════════════════════════════╝  │
│                                      │
│  ╔══════════════════════════════╗    │
│  ║       Save Changes           ║    │  ← Yellow button
│  ╚══════════════════════════════╝    │
│                                      │
│  ╔══════════════════════════════╗    │
│  ║         Log Out              ║    │  ← Outlined button (green border)
│  ╚══════════════════════════════╝    │
└──────────────────────────────────────┘

Notes:
- Avatar shows first+last name from stored data
- All fields pre-populated from AsyncStorage
- Save → updates AsyncStorage, shows alert
- Log Out → confirmation dialog, then clears data, resets to Onboarding
```

---

## Figma Recreation Guide

To recreate this wireframe in Figma:

1. **Set frame size**: 390 × 844 (iPhone 14 Pro)
2. **Create a color style** for each design token above
3. **Onboarding**: Stack components top-to-bottom with Auto Layout
4. **Home**: Use a scrollable frame; hero section is fixed-height (≈280px)
5. **Profile**: Stack avatar section + card + buttons with 16px gaps
6. **Chips**: Use Auto Layout row with 8px gap, 18px horizontal padding, 10px vertical padding, 20px corner radius
7. **Cards**: 16px corner radius, 14px padding, 1px border `#EDEFEE`, shadow: y=2, blur=8, opacity=7%
8. **Buttons**: 12px corner radius, 16px vertical padding, 100% width
