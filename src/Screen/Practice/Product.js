import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const MyProducts = ({navigation}) => {
  const [text, setText] = useState('');
  const [email, setemail] = useState('');
  const openDetails = () => {
    navigation.navigate('After', {mytext: text, email: email});
  };
  return (
    <>
      <View>
        <TextInput style={styles.Input} onChangeText={e => setText(e)} />
        <TextInput style={styles.Input} onChangeText={e => setemail(e)} />
        <Button title="next" onPress={openDetails} />
      </View>
    </>
  );
};

export default MyProducts;

const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
