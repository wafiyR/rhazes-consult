import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logo-rhazes.jpg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // width: 110,
    // height: 110,
    marginBottom: 8, // make some space between the image and the text inputs
    aspectRatio: 1.05, // aspectRatio is just width/height (width divide by height)
    resizeMode: 'contain', // ["center","contain","cover","repeat","stretch"]
  },
})
