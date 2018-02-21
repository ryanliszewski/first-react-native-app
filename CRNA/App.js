import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, FlatList, TextInput } from 'react-native';

import { COMMUNITY_MEMBERS } from './assets/constants'


export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: '#303030',
      phrase: ''
    };
  }
 
  handlePress = () => {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

    this.setState({
      backgroundColor: randomColor,
      
    });
  };

  handleChange = () => {
    
    this.state.phrase = {phrase: event.target.value}
  }

  handleSubmit = () => {
    const { phrase } = this.state

    if(phrase === 'react'){
      console.log(success)
    }
  }

  render() {
    return (
      <ScrollView style={styles.scrollViewContainer} >
        
          <Image source={require('./assets/Prince.png')} style={styles.largeImage}/>
          <View style={styles.imageContainer}> 
            <Image 
              source={require('./assets/Prince.png')} 
              style={styles.smallImage}
            />
            <Image 
              source={require('./assets/Prince.png')} 
              style={styles.smallImage}
            />
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

          <View style={styles.secretContainer}>
            <TextInput
              style={styles.phraseInput}
              placeholder="Enter a secret phrase"
              value={this.state.phrase}
              onChange={this.handleChange.bind(this)}
              onKeyPress={this.hand}
            />
            

          </View>
        
          <FlatList
            style={styles.list}
            data={COMMUNITY_MEMBERS}
            renderItem={ ({item, separators}) => (
              <View style={styles.itemContainer}>
                
              <View style={styles.imageNameContainer}>
                <Image 
                  source={{uri: item.image}} 
                  style={
                    { 
                      width: 60, 
                      height: 60,
                      borderRadius: 30
                    }}
                />
                <View style={styles.textNameContainer}>
                  <Text style={styles.itemName}> {item.name} </Text>
                </View>
              </View>
                  <View style={styles.textGitContainer}>
                    <Text style={styles.itemGitName}> {item.github_username} </Text>
                  </View>
              </View>
            )}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    list: {
    flex: 1,
    backgroundColor: '#fff',
  },

  secretContainer:{
    height: 200,
    
  },

  toggleContainer: {
    height: 300,
    alignContent: 'center',
    justifyContent: 'center'
  },

  toggleButton: {
  },

  imageNameContainer:{
    flexDirection: 'row',
  },

  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },

  textNameContainer: {
    justifyContent: 'center',

  },

  textGitContainer: {
    justifyContent: 'center',
    
  },

  itemName: {
    fontSize: 15,
    backgroundColor:'#fff',
    padding: 0,
  },

  itemGitName:{
    fontSize: 10,
    alignContent: 'flex-end',
  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    backgroundColor: '#D8C0D8',
    padding: 10,
  },
  
  scrollViewContainer: {
    backgroundColor: '#604860',
    flexGrow: 1, 
    flex: 1,
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
