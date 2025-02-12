import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {MMKVLoader} from 'react-native-mmkv-storage';
import {BonusIds, QuizKnowledgeAction, User} from '@/models/root';

const MMKV = new MMKVLoader().initialize();

interface KnowledgeResults {
  [QuizKnowledgeAction.GreekGods]: number;
  [QuizKnowledgeAction.RomanGods]: number;
  [QuizKnowledgeAction.IndianGods]: number;
  [QuizKnowledgeAction.NorseGods]: number;
}

interface State {
  user: User;
  setUser: (user: User) => void;

  isFirstLogin: boolean;
  setIsFirstLogin: (isFirstLogin: boolean) => void;

  music: number;
  setMusic: (music: number) => void;

  vibration: number;
  setVibration: (vibration: number) => void;

  collectedBonuses: BonusIds[];
  setCollectedBonuses: (bonuses: BonusIds[]) => void;

  lastBonusClaim: string | null;
  setLastBonusClaim: (date: string) => void;

  knowledgeResults: KnowledgeResults;
  updateKnowledgeResult: (action: QuizKnowledgeAction, score: number) => void;

  resetProgress: () => void;
}

export const useUserStore = create(
  persist<State>(
    (set, get) => ({
      user: {
        login: 'You',
        password: '',
      },
      setUser: (user: User) => set({user}),

      isFirstLogin: false,
      setIsFirstLogin: isFirstLogin => set({isFirstLogin}),

      music: 0.5,
      setMusic: (music: number) => set({music}),

      vibration: 0.5,
      setVibration: (vibration: number) => set({vibration}),

      collectedBonuses: [],
      setCollectedBonuses: (bonuses: BonusIds[]) =>
        set({collectedBonuses: bonuses}),

      lastBonusClaim: null,
      setLastBonusClaim: (date: string) => set({lastBonusClaim: date}),

      knowledgeResults: {
        [QuizKnowledgeAction.GreekGods]: 0,
        [QuizKnowledgeAction.RomanGods]: 0,
        [QuizKnowledgeAction.IndianGods]: 0,
        [QuizKnowledgeAction.NorseGods]: 0,
      },

      updateKnowledgeResult: (action: QuizKnowledgeAction, score: number) =>
        set(state => ({
          knowledgeResults: {
            ...state.knowledgeResults,
            [action]: Math.max(state.knowledgeResults[action], score),
          },
        })),

      resetProgress: () => {
        set({
          user: {
            login: 'You',
            password: '',
          },
          music: 0.5,
          vibration: 0.5,
          collectedBonuses: [],
          lastBonusClaim: null,
          isFirstLogin: false,
          knowledgeResults: {
            [QuizKnowledgeAction.GreekGods]: 0,
            [QuizKnowledgeAction.RomanGods]: 0,
            [QuizKnowledgeAction.IndianGods]: 0,
            [QuizKnowledgeAction.NorseGods]: 0,
          },
        });
        MMKV.clearStore();
      },
    }),

    {
      storage: {
        getItem: (key: string) => MMKV.getMap(key) ?? null,
        setItem: (key: string, value: any) => MMKV.setMap(key, value),
        removeItem: (key: string) => MMKV.removeItem(key),
      },
      name: 'userstore',
    },
  ),
);
