import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const PDetails = ({navigation, route}) => {
  console.log(route.params.oneValue);
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TextBox: {
    // flex: 2,
    backgroundColor: '#fff',
    width: '100%',
    height: '70%',
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    // alignItems: 'center',

    // justifyContent: 'space-around',
    // margin: 15,
    borderTopWidth: 0.5,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 11,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 14.78,
    // elevation: 22,
  },
  ImageBox: {
    width: '100%',
    height: '30%',
  },
  tandC: {
    // justifyContent: 'center',
    margin: 15,
  },
  title: {
    margin: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  Cata: {
    fontSize: 14,
    margin: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#e63946',
    marginHorizontal: 15,
    // textShadowOffset: {width: 1, height: 3},
    // textShadowRadius: 25,
    // textShadowColor: '#000',
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

    elevation: 12,
  },
  DT: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    // color: '#e63946',
  },
  Description: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    width: '95%',
    height: 220,
    // alignItems: 'center',
    // margin: 10,
    padding: 10,
    margin: 10,
    borderRadius: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  des: {
    fontSize: 15,
  },
  buyButton: {
    // borderWidth: 1,
    borderRadius: 30,
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e63946',
    margin: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
});
