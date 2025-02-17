# Celestial Gates

A mystical quiz game built with React Native that tests players' knowledge through an interactive drag-and-drop timeline interface.

## 🎮 Game Features

- **Timeline-based Quiz**: Test your knowledge by placing events before or after a given year
- **Interactive Drag & Drop**: Intuitive gesture-based interaction for answering questions
- **Lives System**: Players have 3 hearts to complete the quiz
- **Progress Tracking**: Track your score and remaining questions
- **Timer System**: Answer questions within a time limit
- **Visual Feedback**: Immediate feedback on correct/incorrect answers
- **Explanation System**: Learn from detailed explanations after correct answers

## 🛠 Technical Stack

- **React Native**
- **TypeScript**
- **React Navigation** - For screen management
- **React Native Gesture Handler** - For drag & drop functionality
- **React Native Reanimated** - For smooth animations
- **React Native Linear Gradient** - For visual effects
- **Zustand** - For state management

## 🏗 Project Structure

```

root/
├── components/
│ ├── default/
│ │ ├── Block.tsx # Reusable gradient block component
│ │ └── TextArea.tsx # Custom text input component
│ ├── AppNavigation.tsx # Navigation component
│ └── SafeWrapper.tsx # Safe area wrapper
├── screens/
│ └── Quiz/
│ └── Knowledge/
│ ├── KnowledgeAction.tsx # Main quiz game screen
│ └── common/
│ ├── ScaleYear.tsx # Timeline component
│ ├── Timer.tsx # Quiz timer component
│ ├── IncorrectAnswerModal.tsx
│ ├── ExplanationModal.tsx
│ └── ResultModal.tsx
└── state/
└── userStore.ts # Global state management

```

## 🎯 Game Flow

1. Player starts with 3 lives
2. Question appears with a draggable element
3. Player must drag the question to either "before" or "after" zones
4. Correct answers increase score and show explanation
5. Incorrect answers reduce lives and show feedback
6. Game ends when all questions are answered or lives run out

## 🎨 Visual Design

- Mystic/ethereal theme with gradient effects
- Dynamic color feedback for correct/incorrect answers
- Smooth animations for drag and drop interactions
- Custom modals for various game states

## 🔧 Development Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run start
   ```
4. Run on iOS/Android:
   ```bash
   npm run ios
   # or
   npm run android
   ```

## 📱 Supported Platforms

- iOS
- Android

## 🤝 Contributing

Feel free to submit issues and enhancement requests.
