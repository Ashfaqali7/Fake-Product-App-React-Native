import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import React from 'react';
import Detailsstyles from './Styles/DetailsStyle';

const PDetails = ({navigation, route}) => {
  // console.log(route.params.singleData);

  const {comingData} = route.params;
  console.log(route.params.singleData.description);
  // const {detail} = route.params.singleData;
  return (
    <View style={styles.container}>
      <View style={styles.ImageBox}>
        <Image
          style={{width: '100%', height: 210, resizeMode: 'contain'}}
          source={{uri: route.params.singleData.image}}
        />
      </View>
      <View style={styles.TextBox}>
        <View style={styles.tandC}>
          <Text style={styles.title}>{route.params.singleData.title}</Text>
          <Text style={styles.Cata}>{route.params.singleData.category}</Text>
        </View>

        <Text style={styles.price}>$ {route.params.singleData.price}</Text>
        <View style={styles.Description}>
          <Text style={styles.DT}>Description</Text>
          <Text style={styles.des}>{route.params.singleData.description} </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => alert('Thank You for using my app ')}>
            <Text style={{color: '#fff'}}>BUY NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PDetails;
const styles = StyleSheet.create(Detailsstyles);
