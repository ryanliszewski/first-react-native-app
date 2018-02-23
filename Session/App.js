import React from 'react';

// React Native Components
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, FlatList } from 'react-native';



export default class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      backgroundColor: '#F6F6F6',
      phrase: '',
    }
  }
  
  handleClick = () => {
    //Generate Random Color
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    
    //Changes state of background color
    this.setState({
      backgroundColor: randomColor
    })
  }

  handleSubmit = () => {
    //Display alert
    //https://facebook.github.io/react-native/docs/alert.html
  }

  render() {
    return (
      //ScrollView - Flex Column
      <ScrollView style={styles.scrollView}>

        {/* Big Image Container - Flex Row */}
        <View style={styles.bigImageContainer}>
          
          {/* Image is a React-Native Component */}
          <Image
            //Source is a prop of an Image Component 
            source={require('./Prince.png')}
            style={styles.bigImage}
          />
        </View>

        <View style={styles.smallImagesContainer}>
        <Image 
            source={require('./Prince.png')}
            style={styles.smallImage}
          />
          <Image 
            source={require('./Prince.png')}
            style={styles.smallImage}
          />
        </View> 

        <View 
          style={styles.toggleContainer}
          
          //State of Background state toggled by the button
          backgroundColor={this.state.backgroundColor}
        >
          <Button 
            style={styles.toggleButton}
            title="Change background color"
            //Calls handleClick func when user click's button
            onPress={this.handleClick}
          /> 
        </View> 

        <TextInput
          value={this.state.phrase} 
          onChangeText={(text) => this.setState({phrase: text})}
          // Call handleSubmit to display an alert
        />

      <FlatList 
        //Display Community-members data in a flat list
      />
      </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'blue',
    flexDirection: 'column',
  },

  bigImageContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  smallImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'red', 
  },

  bigImage: {
    flex: 1,
  },

  smallImage: {
    width: 150, 
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'white',
  },

  toggleContainer: {
    height: 200,
    justifyContent: 'center',
  },

  toggleButton: {
    flex: 1,
  }
});
