import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text>Edit Content:</Text>
      <TextInput
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;