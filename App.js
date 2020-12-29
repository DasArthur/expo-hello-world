import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        style={{
          flex: 1,
          width: "100%",
          height: "100%"
        }}
        resizeMode={"cover"}
        source={{uri: "https://api.time.com/wp-content/uploads/2015/05/elon-musk.jpg"}}
      >

      <View style={styles.container}>
        <Text style={{
          fontSize: 110,
          fontWeight: "bold",
          color: "white",
          marginBottom: 20,
          lineHeight: 110,
        }}>Hello,{"\n"}Elon!</Text>

        <View
          style={{
            width: "100%",
            height: 15,
            backgroundColor: "white",
            marginBottom: "40%"
          }}
        ></View>
      </View>

      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "flex-end",
  },
});
