import React from 'react';
import {View, Text} from 'react-native';
import {Header, Icon, Button, Left, List, ListItem, Card, CardItem} from 'native-base';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    stateInfo = item => {
        return(
            <Card style={{flex: 0}}>
                <CardItem>
                    <Text>Total Cases     :- {item.confirmed}</Text>
                </CardItem>
                <CardItem>
                    <Text>Total Recovered :- {item.recovered}</Text>
                </CardItem>
                <CardItem>
                    <Text>Total Deaths    :- {item.deaths}</Text>
                </CardItem>
                <CardItem>
                    <Text>Active Cases    :- {item.active}</Text>
                </CardItem>
                <CardItem>
                    <Text>New Cases       :- {item.deltaconfirmed}</Text>
                </CardItem>
                <CardItem>
                    <Text>New deaths      :- {item.deltadeaths}</Text>
                </CardItem>
                <CardItem>
                    <Text>New Recovered   :- {item.deltarecovered}</Text>
                </CardItem>
                <CardItem>
                    <Text>Updated On      :- {item.lastupdatedtime}</Text>
                </CardItem>
            </Card> 
        )
    }
    stateList = () => {
        return(
            <List
            dataArray={this.props.covd}
            renderRow={item => {
                return(
                    <View key={item.state}>
                        <ListItem>
                            <Left><Text style={{fontSize:20, fontWeight: "bold"}}>{item.state === "Total" ? "India" : item.state}</Text></Left>
                        </ListItem>
                        {this.stateInfo(item)}
                    </View>
                )
            }}
            
            ></List>
        )
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
                        <Text style={style.title}>Other States</Text>
                    </Header>
                </View>
                <View style={{flex: 1, backgroundColor: "#ECEFF1"}}>
                    {this.stateList()}
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