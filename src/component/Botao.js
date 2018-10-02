import React , {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


export default class Botao extends Component
{
    constructor(props)
    {
        super(props);

        this.styles = StyleSheet.create({
            botao:
            {
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#E6E6E6',
            }
        })

        /*this.state = {
            resultado : ''
        }*/

        this.retornaValor = this.retornaValor.bind(this);
    }

    retornaValor(valor)
    {               
        return(this.props.retornaValor(valor));
    }

    render()
    {        
        const sasa = this.props.objBotao.map((obj, index)=>{

            let flex = 1;
            let bgColor = '#0080FF';

            if( obj.flex )
            {
                flex = parseInt(obj.flex);
            }

            if( obj.bgColor )
            {
                bgColor = obj.bgColor;
            }

            return(
                <TouchableOpacity 
                    key={index} 
                    style={[this.styles.botao, {flex, backgroundColor:bgColor}]}
                    onPress={()=>{this.retornaValor(obj.texto)}}
                >
                    <Text style={styles.textoBotao}>{obj.texto}</Text>
                </TouchableOpacity>  
            );
        });

        return(
            <View style={styles.containerLinhaBotao}>
                {sasa}
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    containerLinhaBotao:
    {
        flex: 1,
        flexDirection: 'row',
    },

    textoBotao:
    {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    }
})