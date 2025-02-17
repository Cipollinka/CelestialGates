import {useEffect, useRef} from 'react';
import Sound from 'react-native-sound';
import {useUserStore} from '@/state/userStore';

Sound.setCategory('Playback');

export default function BackgroundMusic() {
  const music = useUserStore(state => state.music);
  const soundRef = useRef<Sound | null>(null);

  useEffect(() => {
    // Initialize sound
    soundRef.current = new Sound('bg_music.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }

      if (soundRef.current) {
        soundRef.current.setNumberOfLoops(-1); // Infinite loop
        soundRef.current.setVolume(music);
        soundRef.current.play();
      }
    });

    // Cleanup
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.release();
      }
    };
  }, []);

  // Update volume when music setting changes
  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.setVolume(music);
    }
  }, [music]);

  return null;
}
