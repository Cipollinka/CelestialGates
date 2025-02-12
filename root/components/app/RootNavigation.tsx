import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens, ScreensProps} from '@/models/root';
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

const Stack = createNativeStackNavigator<ScreensProps>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.Home}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.Home} component={HomeScreen} />
        <Stack.Screen name={Screens.CreateAccount} component={CreateAccount} />
        <Stack.Screen name={Screens.Welcome} component={Welcome} />
        <Stack.Screen name={Screens.Bonus} component={Bonus} />
        <Stack.Screen name={Screens.Main} component={Main} />
        <Stack.Screen name={Screens.Knowledge} component={Knowledge} />
        <Stack.Screen name={Screens.Settings} component={Settings} />
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
        <Stack.Screen name={Screens.Collection} component={Collection} />
        <Stack.Screen name={Screens.AboutUs} component={AboutUs} />
        <Stack.Screen name={Screens.Prediction} component={Prediction} />

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
        <Stack.Screen name={Screens.Quiz} component={Quiz} />
        {/* <Stack.Screen name={Screens.QuizFight} component={QuizFight} /> */}
        <Stack.Screen name={Screens.QuizKnowledge} component={QuizKnowledge} />
        <Stack.Screen
          name={Screens.QuizKnowledgeAction}
          component={QuizKnowledgeAction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
