import { useEffect, useRef, useState } from 'react'

import { Animated, Modal, TouchableWithoutFeedback } from 'react-native'

import { SidebarContentProps } from './Sidebar.types'

import { useSidebarContext } from './SidebarContext'

import { Content, ContentWrapper, Overlay } from './Sidebar.styles'

import { useSafeArea } from '@hooks/useSafeArea'

export function SidebarContent({ children }: SidebarContentProps) {
  const [shouldRender, setShouldRender] = useState(false)

  const { isOpen, close } = useSidebarContext()

  const { top } = useSafeArea()

  const slideAnim = useRef(new Animated.Value(-280)).current
  const overlayAnim = useRef(new Animated.Value(0)).current

  const openAnimation = () =>
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(overlayAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      })
    ])

  const closeAnimation = () =>
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -280,
        duration: 250,
        useNativeDriver: true
      }),
      Animated.timing(overlayAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true
      })
    ])

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      openAnimation().start()

      return
    }

    if (shouldRender) {
      closeAnimation().start(() => setShouldRender(false))
    }
  }, [isOpen, shouldRender])

  if (!shouldRender) return null

  return (
    <Modal
      transparent
      visible={true}
      animationType="none"
      onRequestClose={close}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={close}>
        <Overlay style={{ opacity: overlayAnim }} />
      </TouchableWithoutFeedback>

      <ContentWrapper $topInset={top} style={{ transform: [{ translateX: slideAnim }] }}>
        <Content>{children}</Content>
      </ContentWrapper>
    </Modal>
  )
}
