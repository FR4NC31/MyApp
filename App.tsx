import { View, Text, Pressable } from 'react-native'
import React from 'react'
import './global.css'

export default function App() {

  const [buttonText, setButtonText] = React.useState('Press Me')

  const toogleText = () => {
    setButtonText(prev => prev === 'Press Me' ? 'Pressed!' : 'Press Me')
  }
  return (
    <View className='flex-1 items-center justify-center bg-blue-200'>
      <Text className='text-2xl text-white mb-4'>App</Text>
      <Pressable onPress={toogleText} className='bg-white px-4 py-2 rounded'>
        <Text>{buttonText}</Text>
      </Pressable>
    </View>
  )
}