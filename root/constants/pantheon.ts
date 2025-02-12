import {PantheonGod} from '@/models/root';

export const PANTHEON_GODS_IMAGES = {
  [PantheonGod.Zeus]: {
    image: require('@/assets/images/prediction/zeus.png'),
    title: 'Zeus',
  },
  [PantheonGod.Aphrodite]: {
    image: require('@/assets/images/prediction/aphrodite.png'),
    title: 'Aphrodite',
  },
  [PantheonGod.Poseidon]: {
    image: require('@/assets/images/prediction/poseidon.png'),
    title: 'Poseidon',
  },
  [PantheonGod.Odin]: {
    image: require('@/assets/images/pantheon/odin.png'),
    title: 'Odin',
  },
  [PantheonGod.Shiva]: {
    image: require('@/assets/images/pantheon/shiva.png'),
    title: 'Shiva',
  },
  [PantheonGod.Thor]: {
    image: require('@/assets/images/pantheon/thor.png'),
    title: 'Thor',
  },
  [PantheonGod.Apollo]: {
    image: require('@/assets/images/pantheon/apollo.png'),
    title: 'Apollo',
  },
  [PantheonGod.Ishtar]: {
    image: require('@/assets/images/pantheon/ishtar.png'),
    title: 'Ishtar',
  },
};

export const PANTHEON_TEXT = {
  [PantheonGod.Zeus]: {
    title: 'King of Olympus',
    role: 'Supreme god, ruler of the sky and thunder, king of Olympus.',
    symbols: 'Lightning bolt, eagle, throne, scepter.',
    character:
      'Just, but sometimes impulsive. Seen as the protector of order, though he can be fickle in love.',
    myths: [
      'Victory over the Titans, including his father Cronus, in a great war.',
      'Creation of Olympus as the home of the gods.',
      'His numerous affairs with both goddesses and mortals, leading to the birth of many famous heroes like Hercules and Perseus.',
    ],
    specialFeature:
      'As the ruler of the sky and thunder, Zeus embodies power and justice among gods and men. His symbols - lightning bolt and eagle - highlight his strength and grandeur.',
  },
  [PantheonGod.Aphrodite]: {
    title: 'Goddess of Love and Beauty',
    role: 'Goddess of love, beauty, passion, and fertility.',
    symbols: 'Pink flowers, doves, mirror, apple.',
    character:
      'Alluring and charming, Aphrodite easily attracts attention and influences gods and mortals. Her influence over love can sometimes lead to conflict and wars.',
    myths: [
      'Birth from the sea foam when Cronus castrated Uranus, whose genitals fell into the sea.',
      'Her role in the Trojan War after Paris chose her as the most beautiful goddess in exchange for Helen’s love.',
      'Her love for Adonis, a youth of incredible beauty who tragically dies.',
    ],
    specialFeature:
      'Aphrodite represents the irresistible power of love and beauty. Her charms can be both a blessing and a curse, as her influence sometimes causes conflict and tragedy.',
  },
  [PantheonGod.Poseidon]: {
    title: 'God of the Sea',
    role: 'God of the sea, earthquakes, and horses.',
    symbols: 'Trident, horses, waves, dolphins.',
    character:
      'Poseidon is a mighty and formidable deity whose power can both create and destroy. He is the guardian of the oceans and earthquakes.',
    myths: [
      'Contention with Athena over control of Athens, which he lost to her.',
      'Creation of the island of Atlantis and his role in various myths involving disasters.',
      'His wrath towards sailors who break maritime laws, causing storms and tempests.',
    ],
    specialFeature:
      'Poseidon represents the unpredictable and powerful forces of the sea. His trident and ability to cause earthquakes make him a crucial and influential deity over both the oceans and the earth.',
  },
  [PantheonGod.Odin]: {
    title: 'Allfather of the Norse Gods',
    role: 'God of wisdom, magic, war, death, and prophecy; supreme god of Asgard.',
    symbols:
      'Ravens (Huginn and Muninn), spear Gungnir, one eye, eight-legged horse Sleipnir.',
    character:
      'Known for his thirst for knowledge and willingness to make great sacrifices for wisdom. Mysterious, sometimes cunning and dangerous.',
    myths: [
      'Sacrificing his eye to gain wisdom from the well of Mimir.',
      'Journeys between worlds to obtain runic magic.',
      'His role in Ragnarok, where he fights the wolf Fenrir.',
    ],
    specialFeature:
      'Odin symbolizes wisdom gained through suffering and sacrifice. His image combines dark and light aspects of life: war and death against magic and knowledge.',
  },
  [PantheonGod.Shiva]: {
    title: 'The Destroyer and Transformer',
    role: 'God of destruction, transformation, and regeneration.',
    symbols: 'Trident (Trishul), drum (Damaru), snake around neck, third eye.',
    character:
      'Shiva is a dual deity: he can be both benevolent and meditative, as well as destructive and fearsome. His dance, Tandava, symbolizes destruction for renewal.',
    myths: [
      'Meditations on Mount Kailash, achieving supreme wisdom.',
      'The dance of destruction, Tandava, where Shiva destroys the world to recreate it.',
      'Drinking poison during the churning of the ocean to save the universe.',
    ],
    specialFeature:
      'Shiva symbolizes the cyclical nature of existence - destruction for creation. His power and wisdom are involved in the transformative processes of the universe.',
  },
  [PantheonGod.Thor]: {
    title: 'Defender of Asgard',
    role: 'God of thunder, lightning, protection, and war.',
    symbols:
      'Mjölnir (hammer), belt of strength, gloves, goats Tengri Nor and Tanngnjóstr.',
    character:
      'Thor is a powerful defender of gods and humans, always ready to fight giants and other foes. Known for his bravery, he is also straightforward and resolute.',
    myths: [
      'Battles with giants and monsters, including his fight with the Midgard Serpent during Ragnarok.',
      'Travels to Jotunheim (land of giants) seeking glory and trophies.',
      'Protecting humans and gods from threats from other worlds using his mighty hammer.',
    ],
    specialFeature:
      'Thor embodies strength and justice, serving as a protector of humanity and the gods. His hammer Mjölnir symbolizes not only weaponry but also protection and fertility.',
  },
  [PantheonGod.Apollo]: {
    title: 'God of Light and the Arts',
    role: 'God of the sun, music, arts, poetry, healing, and prophecy.',
    symbols: 'Lyre, laurel wreath, bow and arrows, solar disk.',
    character:
      'Harmonious and balanced, Apollo is the god of light in all its forms - both physical and spiritual. He brings inspiration and beauty.',
    myths: [
      'Slaying the dragon Python and establishing the Delphic Oracle.',
      'His involvement in the Trojan War on the side of the Trojans.',
      'His love for Daphne, who turned into a laurel tree to escape him.',
    ],
    specialFeature:
      'Apollo represents harmony and balance, combining light and the arts. He offers prophecies and healing, guiding people toward spiritual and physical well-being.',
  },
};
