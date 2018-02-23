import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, TextInput, Alert, TouchableHighlight, WebView } from 'react-native';
import { Button } from 'react-native-elements';

import { COMMUNITY_MEMBERS } from './assets/constants'


export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: '#303030',
      phrase: '',
    };

 
  }
 
  handlePress = () => {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

    this.setState({
      backgroundColor: randomColor,
    });
  };

  handleTouch = () => {
    return (
      <WebView
        source={{uri: 'https://www.github.com/'}}
        styles={{flex: 1}}
      />
    );
  }

  handleSubmit = () => {
    const { phrase } = this.state
    
    if(phrase === 'react' || phrase === 'React'){
      Alert.alert(
        'Success',
        'You knew that this was react ;)',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false })
    }
  }

  renderSeperator = () => {
    return(
      <View
        style={{
          height: 1,
          width: '86%',
          marginLeft: '14%',
          backgroundColor: '#000'
        }}
      />
    );
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
          <TouchableHighlight onPress={this.handleTouch.bind(this)}>
            <Button 
                raised 
                icon={{name: 'fingerprint'}}
                title="Change the background color"
                style={styles.toggleButton}
                onPress={this.handleTouch}
                borderRadius= '10'
                backgroundColor= '#604860'
              />
              </TouchableHighlight>
          </View> 

          <View style={styles.secretContainer}>
            <TextInput
              style={styles.phraseInput}
              placeholder="Enter a secret phrase"
              placeholderTextColor='#fff'
              value={this.state.phrase}
              onChangeText={(text) => this.setState({phrase: text})}
              onSubmitEditing={this.handleSubmit}
            />
          </View>
        
          <FlatList
            style={styles.list}
            data={COMMUNITY_MEMBERS}
            containerStyle={{ borderBottomWidth: 0 }}
            ItemSeperatorComponent={this.renderSeperator}
            removeClippedSubviews={true}
            
            renderItem={ ({item, separators}) => (
            
            <TouchableHighlight onPress={this.handleTouch.bind(this)}>
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
            </TouchableHighlight>
            )}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    list: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },

  secretContainer:{
    flex: .25,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  phraseInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    padding: 10,
    height: 60,
    color: '#fff'
  },

  toggleContainer: {
    flex: .5,
    alignContent: 'center',
    justifyContent: 'center',
  },

  toggleButton: {
  },

  imageNameContainer:{
    flexDirection: 'row',
    padding: 5,
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderBottomWidth: 1,
    borderColor:'#000'
  },

  textNameContainer: {
    justifyContent: 'center',

  },

  textGitContainer: {
    justifyContent: 'center',
    padding: 5,
  },

  itemName: {
    fontSize: 15,
    backgroundColor:'#fff',
    padding: 5,
    fontWeight:'bold',
    fontFamily: 'Arial'
  },

  itemGitName:{
    fontSize: 10,
    fontFamily: 'Arial',
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
