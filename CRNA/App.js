import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, TextInput, Alert, TouchableHighlight, WebView, Animated, Switch, Platform, Keyboard} from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';

import { COMMUNITY_MEMBERS } from './assets/constants'

const GITHUB_URL = 'https://www.github.com/';


class FadeInView extends React.Component {
  
  state = {
    fadeInAnim: new Animated.Value(0),
    isVisible: false, 
  }
  getInitialState(){
    return { fadeInAnim: new Animated.Value(0) };
  }

  componentDidMount() {
    let { isVisible } = this.state;


    if(!isVisible){
      Animated.timing (
        this.state.fadeInAnim, 
        {
          toValue: 1, 
          duration: 10000,
        }
      ).start()
    } else {
      Animated.timing  (
        this.state.fadeOutAnim,
        {
          toValue: 0, 
          duration: 1000,
        }
      )
    }

  }

  render() {
    let { fadeInAnim } = this.state;

    return (
      <Animated.View
      style={{
        ...this.props.style,
        opacity: fadeInAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );

  }
}


export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: '#303030',
      showWebView: false,
      githubUsername: '',
      switchOn: true,
    };
  }

  handlePress = () => {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

    this.setState({
      backgroundColor: randomColor,
    });
  };

  handleSubmit = () => {
    const { phrase } = this.state;
    var subMessage; 
    var message; 
    
    if(phrase === 'react' || phrase === 'React'){
      message = 'Success';
      subMessage = 'You knew that this was react ;)';
    } else {
      message = 'Falure';
      subMessage = 'Type in what React Native is built on ;)';
    } 

    Alert.alert(
      message,
      subMessage,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false })
  }

  renderBackIcon = () => {
    return(
      <Icon 
        name='close'
        color='#fff'
        onPress={() => this.setState({showWebView: false})}
      />
    );
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

  renderWebView() {
    return (
     <View style=
     {
      {
        height: '100%',
      }
      }>
      
      <Header
        leftComponent={this.renderBackIcon()} 
        style={styles.header}
      />

      <WebView
        source={{uri: GITHUB_URL + this.state.githubUsername}}
        scalesPageToFit
        automaticallyAdjustContentInsets={true}
        style={{
          paddingTop: 20,
        }}
      />
    </View> 
    );
  }

  render() {
    return (
      <View style={styles.container}> 
      {this.state.showWebView && this.renderWebView()}
      <ScrollView 
        style={styles.scrollViewContainer} 
        onPress={Keyboard.dismiss}
      >
        
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
                raised 
                icon={{name: 'fingerprint'}}
                title="Change the background color"
                style={styles.toggleButton}
                onPress={this.handlePress}
                borderRadius= '10'
                backgroundColor= '#604860'
              />
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

          <View style={styles.switchContainer}>
            <Text style={styles.switchContainerText}> Display Student List </Text> 
            <Switch
              onValueChange={(value) => this.setState({switchOn: value})}
              value={this.state.switchOn}
            />

          </View> 
        
          <FadeInView style={{flex: 1}}>
          <FlatList
            style={styles.list}
            data={COMMUNITY_MEMBERS}
            containerStyle={{ borderBottomWidth: 0 }}
            ItemSeperatorComponent={this.renderSeperator}
            removeClippedSubviews={true}
           
            renderItem={ ({item, separators}) => (
            <TouchableHighlight onPress={() => this.setState(
              {
                showWebView: true,
                githubUsername: item.github_username
              }
            )}>
              
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
          </FadeInView>  
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  
    list: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: '#fff',
  },

  secretContainer:{
    flex: .1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    height: 200,
  },

  header: {
    paddingTop: 20,
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
    height: 300,
    flex: 5,
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
  },

  smallImage: {
    flexDirection:'row',
    height: 150,
    width: 150,
    borderColor: '#483048',
    borderWidth: 2,
    borderRadius: 50,
  },

  switchContainer: {
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#9C659E',
  },

  largeImage: {
    height: Platform.OS === 'ios' ? 200 : 100,
    width: 400,
    flexDirection: 'row',
  },

  switchContainerText: {
    fontWeight:'bold',
    fontFamily: 'Arial',
    fontSize: 24,
  }
});
