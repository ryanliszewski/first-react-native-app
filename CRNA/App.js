import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: '#303030'
    };
  }
 
  handlePress = () => {

    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

    this.setState({
      backgroundColor: randomColor
    });
  };

  render() {
    return (
      <ScrollView style={styles.scrollViewContainer} >
        
          <Image source={require('./assets/Prince.png')} style={styles.largeImage}/>
          <View style={styles.imageContainer}> 
            <Image source={require('./assets/Prince.png')} style={styles.smallImage}/>
            <Image source={require('./assets/Prince.png')} style={styles.smallImage}/>
          </View>
          <View 
            style={styles.toggleContainer}
            backgroundColor={this.state.backgroundColor}
          >
            <Button 
                title="Change the background color"
                style={styles.toggleButton}
                onPress={this.handlePress}
              />
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

  toggleContainer: {
    height: 300,
    alignContent: 'center',
    justifyContent: 'center'
  },

  toggleButton: {
  },


  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#D8C0D8',
    padding: 10,
  },
  
  scrollViewContainer: {
    backgroundColor: '#604860',

  },

  smallImage: {
    flexDirection:'row',
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
