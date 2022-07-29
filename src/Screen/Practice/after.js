import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const After = ({navigation, route}) => {
  console.log(route.params);
  const data = route.params;

  return (
    <View>
      <Text>{data.mytext}</Text>
      <Text>{data.email}</Text>
    </View>
  );
};

export default After;

const styles = StyleSheet.create({});
