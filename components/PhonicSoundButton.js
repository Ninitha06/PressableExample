import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { Audio } from 'expo-av';

import colors from '../colors';

const PhonicSoundButton = (props) => {
  
  const playSound = async (soundChunk) => {
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };

  return (
    <TouchableOpacity
      style={styles.chunkButton}
      onPress={() => {
        playSound(props.soundChunk);
      }}>
      <Text style={styles.text}> {props.wordChunk}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  chunkButton: {
    width: 60,
    height: 60,
    margin: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.burntSienna,
    borderRadius: 30,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default PhonicSoundButton;
