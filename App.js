import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import Axios from 'axios';

import Home from './components/Home';
import Search from './components/Search';
import Statenews from './components/Statenews';

const Drawer = createDrawerNavigator();

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : []
    };
  }
  componentDidMount(){
    this.getApi();
  }
  getApi = () => {
    Axios.get("https://api.covid19india.org/data.json")
    .then(Response => {
      this.setState({data: Response.data.statewise});
      
    })
    .catch(err => {
      console.error(err)
    })
  }
  render(){
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home">
            {props => <Home {...props} covd={this.state.data} />}
          </Drawer.Screen>
          <Drawer.Screen name="Other States">
            {props => <Search {...props} covd={this.state.data} />}
          </Drawer.Screen>
          <Drawer.Screen name="News">
            {props => <Statenews {...props} covd={this.state.data} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}