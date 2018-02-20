import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollViewContainer} >
        
          <Image source={require('./assets/Prince.png')} style={styles.largeImage}/>
          <View style={styles.imageContainer}> 
            <Image source={require('./assets/Prince.png')} style={styles.smallImage}/>
            <Image source={require('./assets/Prince.png')} style={styles.smallImage}/>
          </View>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
 
    flexDirection: 'column',
    paddingTop: 50,
  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
    flex: 1,
    padding: 10,
    
  },
  
  scrollViewContainer: {
    backgroundColor: '#604860',
  },

  smallImage: {
    height: 150,
    width: 150,
    borderColor: '#483048',
    borderWidth: 2,
    borderRadius: 50,
  },

  largeImage: {
    height: 300,
    width: 400,
    flexDirection: 'row',
  },
});
