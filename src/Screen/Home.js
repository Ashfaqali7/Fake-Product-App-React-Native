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

  // console.log(route.params);

  ///For getting data from Login page /////

  // for next page

  const nextpage = item => {
    navigation.navigate('Details', {singleData: item});
  };
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
                  onPress={() => nextpage(e)}>
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
