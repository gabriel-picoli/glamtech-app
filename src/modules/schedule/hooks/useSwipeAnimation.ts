import { useRef, useCallback, useEffect } from 'react'

import { Animated } from 'react-native'
import { Gesture } from 'react-native-gesture-handler'

type UseSwipeAnimationParams = {
  threshold?: number
  resetKey?: number | null

  onSwipeLeft: () => void
  onSwipeRight: () => void
}

export function useSwipeAnimation({
  onSwipeLeft,
  onSwipeRight,
  threshold = 80,
  resetKey
}: UseSwipeAnimationParams) {
  const translateX = useRef(new Animated.Value(0)).current
  const opacity = useRef(new Animated.Value(1)).current
  const scale = useRef(new Animated.Value(1)).current
  const isAnimating = useRef(false)

  useEffect(() => {
    if (resetKey !== undefined) {
      // cancela qualquer animaçao em andamento
      translateX.stopAnimation()
      opacity.stopAnimation()
      scale.stopAnimation()

      // reseta os valores imediatamente
      translateX.setValue(0)
      opacity.setValue(1)
      scale.setValue(1)

      isAnimating.current = false
    }
  }, [resetKey, translateX, opacity, scale])

  const animateOutLeft = useCallback(
    (callback: () => void) => {
      isAnimating.current = true

      Animated.parallel([
        Animated.timing(translateX, {
          toValue: -400,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        })
      ]).start(() => {
        callback()

        translateX.setValue(0)
        opacity.setValue(1)
        scale.setValue(1)
        isAnimating.current = false
      })
    },
    [translateX, opacity, scale]
  )

  const animateOutRight = useCallback(
    (callback: () => void) => {
      isAnimating.current = true

      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 400,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        })
      ]).start(() => {
        callback()

        translateX.setValue(0)
        opacity.setValue(1)
        scale.setValue(1)
        isAnimating.current = false
      })
    },
    [translateX, opacity, scale]
  )

  const animateBack = useCallback(() => {
    Animated.parallel([
      Animated.spring(translateX, {
        toValue: 0,
        tension: 65,
        friction: 10,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      }),
      Animated.spring(scale, {
        toValue: 1,
        tension: 65,
        friction: 10,
        useNativeDriver: true
      })
    ]).start()
  }, [translateX, opacity, scale])

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      if (isAnimating.current) return

      translateX.setValue(event.translationX)
      const progress = Math.min(Math.abs(event.translationX) / 200, 1)
      opacity.setValue(1 - progress * 0.3)
      scale.setValue(1 - progress * 0.05)
    })
    .onEnd((event) => {
      if (isAnimating.current) return

      if (event.translationX < -threshold) {
        animateOutLeft(onSwipeLeft)
      } else if (event.translationX > threshold) {
        animateOutRight(onSwipeRight)
      } else {
        animateBack()
      }
    })

  return {
    gesture,
    animatedStyle: {
      transform: [{ translateX }, { scale }],
      opacity
    }
  }
}
