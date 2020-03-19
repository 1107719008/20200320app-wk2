import React from "react";
import { View } from "react-native";
import Header from "./Header";
import AlbumList from "./AlbumList";

const App = () => {
  return (
    <View>
      <Header />
      <AlbumList />
    </View>
  );
};

export default App;