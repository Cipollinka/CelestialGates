import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type TUseNav = NativeStackNavigationProp<ScreensProps>;

export enum Screens {
  Home = 'Home',
  CreateAccount = 'CreateAccount',
  Welcome = 'Welcome',
  Bonus = 'Bonus',
  Library = 'Library',
  LibraryContent = 'LibraryContent',
  Main = 'Main',
  Knowledge = 'Knowledge',
  Settings = 'Settings',
  ScoreBoard = 'ScoreBoard',
  ScoreBoardMyResults = 'ScoreBoardMyResults',
  ScoreBoardTop5 = 'ScoreBoardTop5',
  Collection = 'Collection',
  AboutUs = 'AboutUs',
  Prediction = 'Prediction',
  PredictionCategory = 'PredictionCategory',
  PredictionAction = 'PredictionAction',
  Pantheon = 'Pantheon',

  GodInfo = 'GodInfo',
  Quiz = 'Quiz',
  QuizFight = 'QuizFight',
  QuizKnowledge = 'QuizKnowledge',
  QuizKnowledgeAction = 'QuizKnowledgeAction',
}

export type ScreensProps = {
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
  [Screens.PredictionCategory]: {god: PredictionAction};

  [Screens.PredictionAction]: {
    god: PredictionAction;
    category: EPredictionCategory;
    label: string;
  };

  [Screens.Pantheon]: undefined;
  [Screens.GodInfo]: {god: PantheonGod};
  [Screens.Quiz]: undefined;
  [Screens.QuizFight]: undefined;
  [Screens.QuizKnowledge]: undefined;
  [Screens.QuizKnowledgeAction]: {action: QuizKnowledgeAction};
};

export interface User {
  login: string;
  password: string;
}

export enum QuizKnowledgeAction {
  GreekGods = 'GreekGods',
  RomanGods = 'RomanGods',
  IndianGods = 'IndianGods',
  NorseGods = 'NorseGods',
}

export enum PredictionAction {
  Zeus = 'Zeus',
  Aphrodite = 'Aphrodite',
  Athena = 'Athena',
  Poseidon = 'Poseidon',
}

export enum EPredictionCategory {
  LOVE = 1,
  CAREER,
  HEALTH,
  WISDOM,
  TRAVELS,
  WEALTH,
}

export enum PantheonGod {
  Zeus = 'Zeus',
  Odin = 'Odin',
  Aphrodite = 'Aphrodite',
  Shiva = 'Shiva',
  Thor = 'Thor',
  Apollo = 'Apollo',
  Ishtar = 'Ishtar',
  Poseidon = 'Poseidon',
}

export enum BonusIds {
  ZeusKey = 'ZeusKey',
  IsisTablet = 'IsisTablet',
  OdinHelm = 'OdinHelm',
  RahuAmulet = 'RahuAmulet',
  TonatiuhSphere = 'TonatiuhSphere',
  PhoenixSeal = 'PhoenixSeal',
  AmiriCrystal = 'AmiriCrystal',
}

export enum LibraryBooks {
  ZeusKey = 'ZeusKey',
  IsisTablet = 'IsisTablet',
  OdinHelm = 'OdinHelm',
  RahuAmulet = 'RahuAmulet',
  TonatiuhSphere = 'TonatiuhSphere',
}
