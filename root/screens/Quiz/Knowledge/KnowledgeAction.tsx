import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {QuizKnowledgeAction, Screens, TUseNav} from '@/models/root';
import SafeWrapper from '@/components/SafeWrapper';
import AppNavigation from '@/components/AppNavigation';
import Block from '@/components/default/Block';
import LinearGradient from 'react-native-linear-gradient';
import ScaleYear from './common/ScaleYear';
import Timer from './common/Timer';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import knowledgeData from '@/constants/knowledge.json';
import IncorrectAnswerModal from './common/IncorrectAnswerModal';
import ExplanationModal from './common/ExplanationModal';
import ResultModal from './common/ResultModal';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useUserStore} from '@/state/userStore';
import {runOnJS} from 'react-native-reanimated';

export default function KnowledgeAction({route}: any) {
  const action = route.params.action as QuizKnowledgeAction;
  const navigation = useNavigation<TUseNav>();
  const updateKnowledgeResult = useUserStore(
    state => state.updateKnowledgeResult,
  );

  // Get quiz data for selected god
  const quizData =
    knowledgeData.topics.find(quiz => quiz.id === action)?.questions || [];

  // Game state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [showIncorrectModal, setShowIncorrectModal] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [isGameEnd, setIsGameEnd] = useState(false);

  // Drop zone state
  const [droppedQuestion, setDroppedQuestion] = useState<{
    text: string;
    zone: 'before' | 'after' | null;
  }>({text: '', zone: null});

  // Animation values
  const pan = useRef(new Animated.ValueXY()).current;
  const questionOpacity = useRef(new Animated.Value(1)).current;

  const currentQuestion = quizData[currentQuestionIndex];
  const yearOnScale = 500;

  const [dropZoneHighlight, setDropZoneHighlight] = useState<{
    before: string;
    after: string;
  }>({before: '#E5C78F', after: '#E5C78F'});

  const beforeZoneRef = useRef<View>(null);
  const afterZoneRef = useRef<View>(null);

  const [dropZones, setDropZones] = useState<{
    before: {x: number; y: number; width: number; height: number} | null;
    after: {x: number; y: number; width: number; height: number} | null;
  }>({before: null, after: null});

  useEffect(() => {
    beforeZoneRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setDropZones(prev => ({
        ...prev,
        before: {x: pageX, y: pageY, width, height},
      }));
    });

    afterZoneRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setDropZones(prev => ({
        ...prev,
        after: {x: pageX, y: pageY, width, height},
      }));
    });
  }, []);

  const handleGesture = (event: {
    translationX: number;
    translationY: number;
  }) => {
    if (!isGameActive || droppedQuestion.zone !== null) return;

    setIsDragging(true);
    pan.setValue({
      x: event.translationX,
      y: event.translationY,
    });
  };

  const isInDropZone = (x: number, y: number, zone: 'before' | 'after') => {
    const dropZone = dropZones[zone];
    if (!dropZone) return false;

    return (
      x >= dropZone.x &&
      x <= dropZone.x + dropZone.width &&
      y >= dropZone.y &&
      y <= dropZone.y + dropZone.height
    );
  };

  const handleDragEnd = (event: {absoluteX: number; absoluteY: number}) => {
    if (!isGameActive || droppedQuestion.zone !== null) return;

    setIsDragging(false);

    const isBeforeZone = isInDropZone(
      event.absoluteX,
      event.absoluteY,
      'before',
    );
    const isAfterZone = isInDropZone(event.absoluteX, event.absoluteY, 'after');

    if (!isBeforeZone && !isAfterZone) {
      resetQuestionPosition();
      return;
    }

    const droppedZone = isBeforeZone ? 'before' : 'after';
    const isCorrect = (droppedZone === 'before') === currentQuestion.isBefore;

    setDroppedQuestion({
      text: currentQuestion.question,
      zone: droppedZone,
    });

    setDropZoneHighlight({
      before: isBeforeZone ? (isCorrect ? '#4CAF50' : '#FF5252') : '#E5C78F',
      after: isAfterZone ? (isCorrect ? '#4CAF50' : '#FF5252') : '#E5C78F',
    });

    questionOpacity.setValue(0);

    if (isCorrect) {
      setExplanation(currentQuestion.explanation);
      setScore(prev => prev + 1);
    } else {
      setHearts(prev => prev - 1);
      setShowIncorrectModal(true);
      if (hearts - 1 <= 0) {
        setIsGameEnd(true);
        setIsGameActive(false);
        return;
      }
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setDroppedQuestion({text: '', zone: null});
        setDropZoneHighlight({before: '#E5C78F', after: '#E5C78F'});
        resetQuestionPosition();
      } else {
        setIsGameActive(false);
      }
    }, 1500);
  };

  const resetQuestionPosition = () => {
    pan.setValue({x: 0, y: 0});

    Animated.sequence([
      Animated.timing(questionOpacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(questionOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTimeEnd = () => {
    if (isGameActive) {
      setHearts(prev => prev - 1);
      if (hearts - 1 <= 0) {
        setIsGameEnd(true);
        setIsGameActive(false);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
        resetQuestionPosition();
      }
    }
  };

  const handleCloseIncorrectModal = () => {
    setShowIncorrectModal(false);
  };

  useEffect(() => {
    if (!isGameActive) {
      updateKnowledgeResult(action, score);
    }
  }, [isGameActive, score, action, updateKnowledgeResult]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setIsGameActive(true);
        setCurrentQuestionIndex(0);
        setHearts(3);
        setScore(0);
        setDroppedQuestion({text: '', zone: null});
        setDropZoneHighlight({before: '#E5C78F', after: '#E5C78F'});
        resetQuestionPosition();
      };
    }, []),
  );

  return (
    <SafeWrapper>
      <ResultModal
        visible={isGameEnd}
        onClose={() => {
          setIsGameEnd(false);
          setTimeout(() => {
            navigation.navigate(Screens.QuizKnowledge);
          }, 0);
        }}
        result={score}
      />

      <ExplanationModal
        visible={!!explanation}
        onClose={() => setExplanation('')}
        explanation={explanation}
      />

      <IncorrectAnswerModal
        visible={showIncorrectModal}
        onClose={handleCloseIncorrectModal}
        lives={hearts}
      />

      <ScrollView
        className="mt-4 mb-4 pb-4"
        showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between w-full items-center">
          <View className="rounded-2xl overflow-hidden">
            <LinearGradient
              colors={['#FFF327', '#F47015']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              className={
                'flex-1 w-[94px] rounded-3xl items-center justify-center'
              }>
              <View className="items-center justify-center w-[94px] h-[94px]">
                <Text className="text-2xl font-bold">
                  {currentQuestionIndex + 1}/{quizData.length}
                </Text>
              </View>
            </LinearGradient>
          </View>

          <View className="rounded-2xl overflow-hidden relative">
            <Image source={require('@/assets/images/heart_bg.png')} />
            <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Text className="text-2xl font-bold">{hearts}</Text>
            </View>
          </View>
        </View>

        <View className="flex-row gap-4 mt-4">
          <ScaleYear year={yearOnScale} />

          <View className="gap-4">
            <View
              ref={beforeZoneRef}
              id="dropZone1-before"
              style={[
                styles.shadow,
                {backgroundColor: dropZoneHighlight.before},
              ]}
              className="w-[232px] h-[152px] rounded-3xl items-center justify-center">
              {droppedQuestion.zone === 'before' && (
                <Text className="text-2xl font-bold text-center p-4">
                  {droppedQuestion.text}
                </Text>
              )}
            </View>
            <View
              ref={afterZoneRef}
              id="dropZone2-after"
              style={[
                styles.shadow,
                {backgroundColor: dropZoneHighlight.after},
              ]}
              className="w-[232px] h-[152px] rounded-3xl items-center justify-center">
              {droppedQuestion.zone === 'after' && (
                <Text className="text-2xl font-bold text-center p-4">
                  {droppedQuestion.text}
                </Text>
              )}
            </View>
          </View>
        </View>

        {(!droppedQuestion.zone || isDragging) && (
          <GestureDetector
            gesture={Gesture.Pan()
              .onUpdate(event => {
                'worklet';
                runOnJS(handleGesture)({
                  translationX: event.translationX,
                  translationY: event.translationY,
                });
              })
              .onEnd(event => {
                'worklet';
                runOnJS(handleDragEnd)({
                  absoluteX: event.absoluteX,
                  absoluteY: event.absoluteY,
                });
              })}>
            <Animated.View
              id="question-to-drag"
              style={{
                transform: [{translateX: pan.x}, {translateY: pan.y}],
                opacity: questionOpacity,
                zIndex: 1000,
              }}
              className="mx-auto rounded-3xl overflow-hidden mt-10">
              <LinearGradient
                colors={['#FFF327', '#F47015']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                className={'flex-1 rounded-3xl items-center justify-center'}>
                <View className="items-center justify-center p-3">
                  <Text className="text-2xl font-bold">
                    {currentQuestion.question}
                  </Text>
                </View>
              </LinearGradient>
            </Animated.View>
          </GestureDetector>
        )}

        <Timer onTimeEnd={handleTimeEnd} />
      </ScrollView>

      <AppNavigation />
    </SafeWrapper>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#FEDD20',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
});
