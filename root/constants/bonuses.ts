import {BonusIds} from '@/models/root';

export const BONUSES = [
  {
    id: BonusIds.ZeusKey,
    image: require('@/assets/images/bonuses/zeus_key.png'),
    title: 'Zeus Key',
    description: 'A mysterious key that opens doors to Greek myths.',
    fact: 'Zeus is the chief god of the Greek pantheon, ruler of the sky and thunder.',
  },

  {
    id: BonusIds.IsisTablet,
    image: require('@/assets/images/bonuses/isis_tablet.png'),
    title: "Isis's Tablet",
    description: 'An ancient tablet with inscriptions about Egyptian magic.',
    fact: 'Isis was the goddess of magic, motherhood, and rebirth in Egyptian mythology.',
  },
  {
    id: BonusIds.OdinHelm,
    image: require('@/assets/images/bonuses/odin_helm.png'),
    title: 'Odin’s Helm',
    description: 'A magical helmet that grants wisdom and knowledge.',
    fact: 'Odin is the chief god of Norse mythology, patron of war and wisdom.',
  },

  {
    id: BonusIds.RahuAmulet,
    image: require('@/assets/images/bonuses/rahu_amulet.png'),
    title: 'Rahu’s Amulet',
    description:
      'An amulet that protects against evil forces, derived from Vedic mythology.',
    fact: 'Rahu is a demon in Hindu mythology known for eclipsing the Sun and Moon.',
  },

  {
    id: BonusIds.TonatiuhSphere,
    image: require('@/assets/images/bonuses/tonatiuh.png'),
    title: 'Tonatiuh Sphere',
    description:
      'A sacred sphere symbolizing connection with the cosmos and time.',
    fact: 'Tonatiuh was the Aztec god of the cosmos and time.',
  },
  {
    id: BonusIds.PhoenixSeal,
    image: require('@/assets/images/bonuses/phoenix_seal.png'),
    title: 'Phoenix’s Seal',
    description: 'A seal symbolizing rebirth and immortality.',
    fact: 'The Phoenix is a mythical bird that regenerates from its own ashes.',
  },
  {
    id: BonusIds.AmiriCrystal,
    image: require('@/assets/images/bonuses/amiri_crystal.png'),
    title: 'Amiri’s Crystal',
    description: 'A crystal reflecting wisdom and ancient knowledge.',
    fact: 'Amiri is the goddess of wisdom and prophecy in ancient Eastern mythology.',
  },
];
