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
  // console.log(route.params.oneValue);
  // const {detail} = route.params.oneValue;
  return (
    <View style={styles.container}>
      <View style={styles.ImageBox}>
        <Image
          style={{width: '100%', height: 210, resizeMode: 'contain'}}
          source={{uri: route.params.oneValue.image}}
        />
      </View>
      <View style={styles.TextBox}>
        <View style={styles.tandC}>
          <Text style={styles.title}>{route.params.oneValue.title}</Text>
          <Text style={styles.Cata}>{route.params.oneValue.category}</Text>
        </View>

        <Text style={styles.price}>$ {route.params.oneValue.price}</Text>
        <View style={styles.Description}>
          <Text style={styles.DT}>Description</Text>
          <Text style={styles.des}>{route.params.oneValue.description}</Text>
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
