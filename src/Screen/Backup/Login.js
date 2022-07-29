import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const LoginForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signin = () => {
    navigation.navigate('Home', {email: email});
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.signin}>SIGN IN</Text>
      </View>
      <View style={styles.InputBox}>
        <TextInput
          // value={email}
          onChangeText={e => setEmail(e)}
          type="email"
          value={email}
          style={styles.inputs}
          placeholder="Email"
          placeholderTextColor="#000"></TextInput>
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          placeholder="password"
          // value={password}
          onChangeText={e => setPassword(e)}
          placeholderTextColor="#000"></TextInput>
        <View style={styles.rememberBox}></View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.forget} onPress={() => Linking.openURL('')}>
            Remember me
          </Text>
          <Text style={styles.rememberBox} onPress={() => Linking.openURL('')}>
            Forget the Password
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={signin}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 50,
          }}
          onFocus={''}>
          <Text style={styles.touch}> SIGN IN </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text>Don't have Account ?</Text>
          <TouchableOpacity>
            <Text style={{color: '#0080ff'}}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    opacity: 0.7,
  },

  inputs: {
    // margin: 15,
    fontSize: 13,
    fontWeight: 'normal',
    borderWidth: 0.8,
    borderColor: '#ffff',
    color: '#000',
    margin: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  InputBox: {
    width: '80%',
    // height: '100%',
    justifyContent: 'center',
    // color: '#',

    padding: 10,
    fontSize: 15,
    // margin: 50,
  },
  rememberBox: {
    color: '#000',
    marginLeft: 40,

    marginTop: 15,
  },
  forget: {
    marginTop: 15,
    color: '#000',

    marginEnd: 10,
  },
  touch: {
    fontSize: 15,
    fontWeight: 'bold',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#219ebc',
    padding: 10,
    borderRadius: 20,
    width: 200,
    height: 40,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  textBox: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  Text: {
    color: '#fff',
    margin: 10,
  },
  Text1: {
    color: '#2cdb72',

    margin: 10,
  },
  signin: {
    color: '#000',

    fontWeight: 'bold',
    fontSize: 25,
  },
});
