import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import SearchBox from './components/SearchBox'
import Stories from './components/Stories'
import ChatList from './components/ChatList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <SearchBox />
        <Stories />
        <ChatList />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0A171F',
  },
})

export default App