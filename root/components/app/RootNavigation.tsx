import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Animated, Easing} from 'react-native';
import HomeScreen from '@/screens/Home';
import CreateAccount from '@/screens/CreateAccount';
import Welcome from '@/screens/Welcome';
import Bonus from '@/screens/Bonus';
import Main from '@/screens/Main';
import Knowledge from '@/screens/Quiz/Knowledge';
import ScoreBoard from '@/screens/ScoreBoard';
import Collection from '@/screens/Collection';
import AboutUs from '@/screens/AboutUs';
import Prediction from '@/screens/Prediction';
import PredictionCategory from '@/screens/Prediction/Category';
import Pantheon from '@/screens/Pantheon';
import GodInfo from '@/screens/Pantheon/GodInfo';
import Quiz from '@/screens/Quiz';
import QuizFight from '@/screens/Quiz/Fight';
import QuizKnowledge from '@/screens/Quiz/Knowledge';
import Settings from '@/screens/Settings';
import QuizKnowledgeAction from '@/screens/Quiz/Knowledge/KnowledgeAction';
import PredictionAction from '@/screens/Prediction/PredictionAction';
import ScoreBoardMyResults from '@/screens/ScoreBoard/MyResults';
import ScoreBoardTop5 from '@/screens/ScoreBoard/Top5';
import Library from '@/screens/Library';
import LibraryContent from '@/screens/Library/LibraryContent';
import {
  EPredictionCategory,
  LibraryBooks,
  PantheonGod,
  PredictionAction as PredictionActionType,
  Screens,
  QuizKnowledgeAction as QuizKnowledgeActionType,
} from '@/models/root';

const Stack = createStackNavigator();

// Custom transition configurations
const fadeConfig = {
  animation: 'timing',
  config: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    useNativeDriver: true,
  },
};

const slideConfig = {
  animation: 'timing',
  config: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    useNativeDriver: true,
  },
};

// Custom transition for screens
const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
  cardStyleInterpolator: ({current, layouts}: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
  transitionSpec: {
    open: slideConfig,
    close: fadeConfig,
  },
};

// Custom navigation theme
const navigationTheme = {
  dark: true,
  colors: {
    primary: '#FFD700',
    background: '#1A0B2E',
    card: '#2A1B3D',
    text: '#FFF9F0',
    border: '#9F2B68',
    notification: '#FF4B4B',
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName={Screens.Home}
        screenOptions={{
          ...screenOptions,
          contentStyle: {
            backgroundColor: 'transparent',
          },
          animation: 'fade_from_bottom',
          headerStyle: {
            backgroundColor: '#1A0B2E',
          },
          headerTintColor: '#FFD700',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name={Screens.Home} component={HomeScreen} />
        <Stack.Screen name={Screens.CreateAccount} component={CreateAccount} />
        <Stack.Screen
          name={Screens.Welcome}
          component={Welcome}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name={Screens.Quiz}
          component={Quiz}
          options={{
            animation: 'slide_from_right',
            gestureDirection: 'horizontal',
            cardStyleInterpolator: forSlide,
          }}
        />
        <Stack.Screen
          name={Screens.QuizFight}
          component={QuizFight}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name={Screens.QuizKnowledge}
          component={QuizKnowledge}
          options={{
            animation: 'slide_from_right',
          }}
        />

        <Stack.Screen
          name={Screens.Collection}
          component={Collection}
          options={{
            animation: 'slide_from_bottom',
            gestureDirection: 'vertical',
            cardStyleInterpolator: ({current, layouts}: any) => ({
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                ],
              },
            }),
          }}
        />
        <Stack.Screen
          name={Screens.Bonus}
          component={Bonus}
          options={{
            animation: 'fade',
            cardStyleInterpolator: forFade,
          }}
        />
        <Stack.Screen
          name={Screens.Prediction}
          component={Prediction}
          options={{
            animation: 'slide_from_left',
            gestureDirection: 'horizontal-inverted',
            cardStyleInterpolator: ({current, layouts}: any) => ({
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-layouts.screen.width, 0],
                    }),
                  },
                ],
                opacity: current.progress.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 0.5, 1],
                }),
              },
            }),
          }}
        />
        <Stack.Screen
          name={Screens.Settings}
          component={Settings}
          options={{
            animation: 'slide_from_right',
            gestureDirection: 'horizontal',
            cardStyleInterpolator: forSlide,
          }}
        />

        <Stack.Screen name={Screens.Main} component={Main} />
        <Stack.Screen name={Screens.ScoreBoard} component={ScoreBoard} />
        <Stack.Screen name={Screens.Library} component={Library} />
        <Stack.Screen
          name={Screens.LibraryContent}
          component={LibraryContent}
        />
        <Stack.Screen
          name={Screens.ScoreBoardMyResults}
          component={ScoreBoardMyResults}
        />
        <Stack.Screen
          name={Screens.ScoreBoardTop5}
          component={ScoreBoardTop5}
        />
        <Stack.Screen name={Screens.AboutUs} component={AboutUs} />
        {/* <Stack.Screen name={Screens.Prediction} component={Prediction} /> */}

        <Stack.Screen
          name={Screens.PredictionCategory}
          component={PredictionCategory}
        />
        <Stack.Screen
          name={Screens.PredictionAction}
          component={PredictionAction}
        />
        <Stack.Screen name={Screens.Pantheon} component={Pantheon} />
        <Stack.Screen name={Screens.GodInfo} component={GodInfo} />
        {/* <Stack.Screen name={Screens.QuizKnowledge} component={QuizKnowledge} /> */}
        <Stack.Screen
          name={Screens.QuizKnowledgeAction}
          component={QuizKnowledgeAction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

// Custom animations for screen transitions
const forFade = ({current}: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const forSlide = ({current, next, layouts}: any) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: progress.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [layouts.screen.width, 0, -layouts.screen.width * 0.3],
            extrapolate: 'clamp',
          }),
        },
      ],
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  };
};

// Types for screens (you might want to move this to a separate file)
declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [Screens.Home]: undefined;
      [Screens.CreateAccount]: undefined;
      [Screens.Welcome]: undefined;
      [Screens.Bonus]: undefined;
      [Screens.Main]: undefined;
      [Screens.Knowledge]: undefined;
      [Screens.Settings]: undefined;
      [Screens.ScoreBoard]: undefined;
      [Screens.ScoreBoardMyResults]: undefined;
      [Screens.ScoreBoardTop5]: undefined;
      [Screens.Collection]: undefined;
      [Screens.Library]: undefined;
      [Screens.LibraryContent]: {book: LibraryBooks};
      [Screens.AboutUs]: undefined;
      [Screens.Prediction]: undefined;
      [Screens.PredictionCategory]: {god: PredictionActionType};

      [Screens.PredictionAction]: {
        god: PredictionActionType;
        category: EPredictionCategory;
        label: string;
      };

      [Screens.Pantheon]: undefined;
      [Screens.GodInfo]: {god: PantheonGod};
      [Screens.Quiz]: undefined;
      [Screens.QuizFight]: undefined;
      [Screens.QuizKnowledge]: undefined;
      [Screens.QuizKnowledgeAction]: {action: QuizKnowledgeActionType};
    }
  }
}
