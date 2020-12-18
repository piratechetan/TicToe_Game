

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,Image,Dimensions, TouchableOpacity,ImageBackground
} from 'react-native';
import {Text,Container,Header,Body,Content,Card,H1,H3,Button,Title} from 'native-base'

import {Overlay,Icon} from 'react-native-elements';

import Background from './Src/assets/background.png'
import Win from './Src/assets/win.png'
import User from './Src/assets/user.png'

import Icons from './Src/Components/icon'
import Snackbar from 'react-native-snackbar';



const itemArray = new Array(9).fill('empty')

const App = () => {
  
  const [isCross,setIsCross] = useState(false)
  const [winMessage,setWinMessage] = useState('')

  const changeItem = (itemNumber) => {
    if(winMessage){
      return Snackbar.show({
        text:winMessage,
        backgroundColor:'#000',
        textColor:'#FFF'
      })
    }

    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'Cross' : 'Circle'
      setIsCross(!isCross)
    } else{
      return Snackbar.show({
        text:'Position is already filled',
        backgroundColor:'red',
        color:"#FFF"
      })
    }

    checkIsWinner();

  }

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage('')
    itemArray.fill('empty',0,9);
    
  }

  const checkIsWinner = () => {
    if(
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] 
      

    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    }
     else if(
      itemArray[3] !== 'empty' &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] 
      

    ) {
      setWinMessage(`${itemArray[3]} Wins`);
    }
    else if(
      itemArray[6] !== 'empty' &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] 
      

    ) {
      setWinMessage(`${itemArray[6]} Wins`);
    }
    else if(
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] 
      

    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    }

    else if(
      itemArray[1] !== 'empty' &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] 
      

    ) {
      setWinMessage(`${itemArray[1]} Wins`);
    }
    else if(
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] 
      

    ) {
      setWinMessage(`${itemArray[2]} Wins`);
    }
    else if(
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] 
      

    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    }
    else if(
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] 
      

    ) {
      setWinMessage(`${itemArray[2]} Wins`);
    }
    
  };

  

    

  return (
    <>
      
      <Container style={{backgroundColor:'333945' ,flex:1,justifyContent:'space-between'}}>
        <Content>
        
        <ImageBackground source={Background} style={{width:Dimensions.get('window').width,height:400}}>
             
              <View style={styles.grid}>
              
                {itemArray.map((item,index) => (
                  <TouchableOpacity
                  style={styles.box}
                  key={index}
                  onPress={() =>changeItem(index)}
                  >
                  <Card style={styles.card}>
                  <Icons name={item} />
                  </Card>
                  
                  </TouchableOpacity>
                ))}
                
              </View>
              
              </ImageBackground>
              
            </Content>
            <View>
            {winMessage ? (
              <Overlay isVisible={true}
              overlayStyle={{width:300,height:300,borderRadius:20,backgroundColor:'#30336B'}}
              >
                <View style={{flex:1,justifyContent:'space-between',}}>
                <View style={{alignItems:'center'}}>
                <Image source={Win} style={{width:250,height:85,}}/>
                <Image source={User} style={{width:70,height:70}}/>
                <Text style={{color:'#FFF222',fontSize:20,fontWeight:'bold',fontFamily:'Segoe UI'}}>{winMessage}</Text>
                 
                </View>
                <View style={{alignItems:'center'}}>
                <Icon name="reload" type="material-community" size={30} onPress={reloadGame} raised />
                </View>
                </View>
                 </Overlay>
            ) : (
              <View >
                {isCross ? 
                (
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:120}}>
                <View style={{width:90,height:100,alignItems:'center',justifyContent:'flex-end',marginLeft:60,borderRadius:12,backgroundColor:'#2B2B52'}}>
                  <Image source={User} style={{width:50,height:50,marginBottom:8}}/>
                  <Text style={{color:'#FFF'}}>Cross</Text>
                </View>
                <View style={{width:90,height:100,alignItems:'center',justifyContent:'flex-end',marginRight:60,borderRadius:12,borderColor:'black',borderWidth:2}}>
                <Image source={User} style={{width:50,height:50,marginBottom:8}}/>
                  <Text>Circle</Text>
                </View>
              </View>
              ) : 
              (
              <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:120}}>
                <View style={{width:90,height:100,alignItems:'center',justifyContent:'flex-end',marginLeft:60,borderRadius:12,borderColor:'black',borderWidth:2}}>
                <Image source={User} style={{width:50,height:50,marginBottom:8}}/>
                  <Text>Cross</Text>
                </View>
                <View style={{width:90,height:100,alignItems:'center',justifyContent:'flex-end',marginRight:60,borderRadius:12,backgroundColor:'#2B2B52'}}>
                <Image source={User} style={{width:50,height:50,marginBottom:8}}/>
                  <Text style={{color:'#FFF'}}>Circle</Text>
                </View>
              </View>
              )
              } 
              </View>
            )}
            </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({

  grid:{
    
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop:62,
    marginLeft:48.2,
    alignItems:'center'
  },
  box:{

    marginLeft:5,
    width:88,
    
    
  },
  card:{
    height:83.5,
    justifyContent:'center',
    alignItems:'center'
  },
  message:{
    textAlign:'center',
    textTransform:'uppercase',
    color:'#FFF',
    marginTop:20,
    backgroundColor:'#4652B3',
    paddingVertical:10,
    marginVertical:10
  },

  
});

export default App;
