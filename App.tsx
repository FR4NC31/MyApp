import { View, Text, Alert, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import './global.css'

export default function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    Alert.alert('Login', `Username: ${userName}\nPassword: ${password}`)
  }
  return (
    <View className='flex-1 items-center justify-center bg-gray-900'>
      <Text className='text-2xl text-white'>Login</Text>
      <TextInput 
        placeholder='Username'
        className='text-white border border-gray-700 bg-gray-800 rounded-md px-4 py-2 mt-4 w-3/4'
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput 
        placeholder='Password'
        className='text-white border border-gray-700 bg-gray-800 rounded-md px-4 py-2 mt-4 w-3/4'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable className='bg-blue-600 rounded-md px-4 py-2 mt-4 w-3/4 items-center' onPress={handleLogin}>
        <Text>Login</Text>
      </Pressable>
    </View>
  )
}