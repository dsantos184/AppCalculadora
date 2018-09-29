import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

import Botao from './src/component/Botao';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerResultado}>
          <Text style={styles.textResult}>0</Text>
        </View>
        
        <Botao objBotao={[{texto:'C', flex:3, bgColor:'#BDBDBD'},{texto:'/', bgColor: '#FE9A2E'}]} />
        <Botao objBotao={[{texto:'7'},{texto:'8'}, {texto:'9'}, {texto:'*', bgColor: '#FE9A2E'}]} />
        <Botao objBotao={[{texto:'4'},{texto:'5'}, {texto:'6'}, {texto:'-', bgColor: '#FE9A2E'}]} />
        <Botao objBotao={[{texto:'1'},{texto:'2'}, {texto:'3'}, {texto:'+', bgColor: '#FE9A2E'}]} />
        <Botao objBotao={[{texto:'0', flex:'2'},{texto:'.'}, {texto:'=', bgColor: '#FE9A2E'}]} />          
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    paddingTop: 20,
  },

  containerResultado:
  {
    flex: 1,
    backgroundColor: '#2E2E2E',
    justifyContent: 'center',
    padding: 10,
  },

  textResult:
  {
    color: '#FFF',
    fontSize: 48,
    textAlign: 'right',
  },

});
