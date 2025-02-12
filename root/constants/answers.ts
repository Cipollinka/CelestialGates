import {EPredictionCategory, PredictionAction} from '@/models/root';

export const GOD_ANSWERS = {
  [EPredictionCategory.LOVE]:
    "Love is not only a feeling, but also an art. Allow yourself to be vulnerable and don't be afraid to give your heart",
  [EPredictionCategory.CAREER]:
    'A career is a journey, not a destination. Be patient and accept challenges as part of your journey',
  [EPredictionCategory.HEALTH]:
    'Your internal balance determines health. Listen to your body the same way you listen to music - with respect and attention',
  [EPredictionCategory.WISDOM]:
    "Travel opens the door to new opportunities. Don't hesitate to hit the road - every adventure teaches you something important",
  [EPredictionCategory.TRAVELS]:
    'Choice is power. Make decisions with wisdom, and every path will lead you to your goal',
  [EPredictionCategory.WEALTH]:
    'Wealth is harmony between work and spiritual balance. Happiness comes to those who are open to prosperity',
};

export const GOD_IMAGES = {
  [PredictionAction.Zeus]: require('@/assets/images/prediction/zeus.png'),
  [PredictionAction.Aphrodite]: require('@/assets/images/prediction/aphrodite.png'),
  [PredictionAction.Athena]: require('@/assets/images/prediction/athena.png'),
  [PredictionAction.Poseidon]: require('@/assets/images/prediction/poseidon.png'),
};
