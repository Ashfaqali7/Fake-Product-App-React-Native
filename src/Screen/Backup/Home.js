import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  ///For getting data from Login page /////

  // console.log(route.params);
  ///For getting data from Login page /////

  ////For Api Fetch.....///////
  const [data, setData] = useState([]);
  const [index, setindex] = useState();
  const [oneValue, setoneValue] = useState([]);

  // for netx page
  const nextpage = (e, i) => {
    // setindex(i);
    setoneValue(e);
    // console.log(e);
    navigation.navigate('Details', {oneValue: oneValue});
  };
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(responce => {
      setData(responce.data);
    });
  });
  ////For Api Fetch.....///////
  return (
    <>
      <ScrollView>
        {data.map((e, i) => (
          <View key={i} style={styles.container}>
            <View style={styles.Box}>
              <View style={{width: '100%'}}>
                <Image source={{uri: e.image}} style={styles.image} />
              </View>
              <View style={styles.TextBox}>
                <Text style={styles.price}>$ {e.price}</Text>
                <Text style={styles.title}>{e.title} </Text>
                <TouchableOpacity
                  style={styles.buyButton}
                  value="1"
                  onPress={() => nextpage(e, i)}>
                  <Text style={{color: '#fff'}}>BUY NOW</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: '70%',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  Box: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      // height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
    // justifyContent: 'space-evenly',
    width: '80%',
    height: 350,

    alignItems: 'center',
    margin: 15,
    borderRadius: 15,
  },
  TextBox: {
    // flex: 2,
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 1,
    shadowRadius: 14.78,
    elevation: 22,
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#000',
  },
  buyButton: {
    borderWidth: 1,
    borderRadius: 30,
    width: '30%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#264653',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  title: {
    fontSize: 15,
  },
});

export default HomeScreen;
