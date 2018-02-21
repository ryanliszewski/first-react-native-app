import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, FlatList } from 'react-native';

import { COMMUNITY_MEMBERS } from './assets/constants'


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
        
          <FlatList
            style={styles.list}
            data={COMMUNITY_MEMBERS}
            renderItem={ ({item, separators}) => (
              <View style={styles.itemContainer}>
                <Image 
                  source={{uri: item.image}} 
                  style={
                    { width: 60, 
                      height: 60,
                      borderRadius: 30
                    }}
                />
                
                  <Text style={styles.itemName}> {item.name} </Text>
                  <Text style={styles.itemGitName}> {item.github_username} </Text>
                
              </View>
            )}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    list: {
    flex:1,
    backgroundColor: '#fff',
  },

  toggleContainer: {
    height: 300,
    alignContent: 'center',
    justifyContent: 'center'
  },

  toggleButton: {
  },

  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },

  itemTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  itemName: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
    fontSize: 15,
    backgroundColor:'#fff',
    padding: 0,
  },

  itemGitName:{
    fontSize: 10,
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
