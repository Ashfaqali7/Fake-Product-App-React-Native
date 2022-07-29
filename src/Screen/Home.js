import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import axios from 'axios';
import Homestyle from './Styles/HomeStyle';

const HomeScreen = ({navigation}) => {
  ///For getting data from Login page /////

  // console.log(route.params.email);

  ///For getting data from Login page /////

  // for next page
  const [oneValue, setoneValue] = useState([]);
  async function nextpage(e) {
    setoneValue(e);
    console.log(e.price);
    console.log(oneValue);
    navigation.navigate('Details', {oneValue: oneValue});
  }
  // for next page end

  ////For Api Fetch start.....///////

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(responce => {
        setData(responce.data);
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  });
  ////For Api Fetch end.....///////
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
                  onPress={() => nextpage(e, i)}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Read more
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create(Homestyle);

export default HomeScreen;
