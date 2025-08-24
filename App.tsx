import { View, Text, Animated } from 'react-native'
import React, { useRef, useEffect } from 'react'
import './global.css'

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
     <Animated.View style={{ opacity: fadeAnim }} className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-lg text-blue-500">Fade In Text!</Text>
    </Animated.View>
  )
}