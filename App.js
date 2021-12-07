/** @format */

import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

import db from "./localDb";
import colors from "./colors";
import PhonicSoundButton from "./components/PhonicSoundButton";

console.log(db["the"].chunks);
const App = () => {
  const [text, setText] = useState("");
  const [chunks, setChunks] = useState([]);
  const [phonicSounds, setPhonicSounds] = useState([]);
 

  console.log("state variable", chunks);
  console.log("Sounds state", phonicSounds);

  const checkWord = () => {
    if (db[text]) {
      setChunks(db[text].chunks);
      setPhonicSounds(db[text].phones);
     
    } else {
      console.log("no word");
      Alert.alert("Word does not exist in database");
    }
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <Header
        backgroundColor={"#9c8210"}
        centerComponent={{
          text: "Monkey-Chunky",
          style: { color: "#fff", fontSize: 22 },
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png",
        }}
      />
      <TextInput
        placeholder="Type any word"
        style={styles.input}
        value={text}
        onChangeText={setText}
      ></TextInput>
      <Pressable
        onPress={checkWord}
        style={({ pressed }) => [
          { backgroundColor: pressed ? colors.greenSheen : colors.charcoal },
          styles.pressableButton,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ textAlign: "center", color: "#fff" }}>
            {pressed ? "Pressed" : "Go"}
          </Text>
        )}
      </Pressable>
      {chunks.map((item, index) => {
        return (
          <PhonicSoundButton
            wordChunk={chunks[index]}
            soundChunk={phonicSounds[index]}
          />
        );
      })}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mintCream,
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignSelf: "center",
  },
  input: {
    marginTop: 50,
    width: "80%",
    height: 40,
    borderWidth: 4,
    alignSelf: "center",
    marginBottom: 20,
    textAlign: "center",
  },
  pressableButton: {
    borderRadius: 8,
    padding: 8,
    width: 100,
    alignSelf: "center",
  },
});

export default App;
