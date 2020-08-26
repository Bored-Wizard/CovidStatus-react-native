import React from 'react';
import {View, Text} from 'react-native';
import {Header, Icon, Button, Left} from 'native-base';
import Body from './Body';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={style.container}>
                <View style={{backgroundColor:"#B0BEC5"}}>
                    <Header transparent>
                        <Left>
                            <Button style={{backgroundColor: "#B0BEC5" }} onPress={() => {this.props.navigation.openDrawer()}}>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Text style={style.title}>Home</Text>
                    </Header>
                </View>
                <View style={{flex: 1, backgroundColor: "#ECEFF1"}}>
                    <Body covd={this.props.covd} />
                </View>
            </View>
        )
    }
}

const style = {
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
        fontSize: 25,
        color: "white",
        margin: 10
    },
    body: {
        margin: 10
    }
}