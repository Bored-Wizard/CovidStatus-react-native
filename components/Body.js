import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ListItem, List, Card, CardItem} from 'native-base';


export default class Body extends React.Component{
    constructor(props){
        super(props);
    }
    renderList = (place) => {
        return this.props.covd.map(item => {
            if (item.state === place){
                return(
                    <Card key={item.state} style={{flex: 0}}>
                        <CardItem>
                            <Text style={{fontSize:20, fontWeight: "bold"}}>{item.state === "Total" ? "India" : item.state}</Text>
                        </CardItem>
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
        })
    }
    render(){
        return(
            <ScrollView style={style.container}>
                {this.renderList("Total")}
                {this.renderList("Gujarat")}
            </ScrollView>
        )
    }
}

const style = {
    container: {
        flex: 1,
        marginTop: 5
    }
}