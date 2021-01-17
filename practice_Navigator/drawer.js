import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default class drawer extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={HomeScreen}
                        option={{ title: ' Home ' }} />
                    <Drawer.Screen name="Notifactions" component={NotifactionsScreen}
                        option={{ title: ' Details ' }} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

function HomeScreen({ navigation }) {
    return (
        <View style={styles.screen}>
           <Button onPress={() => navigation.navigate("Notifactions")} title = "Go to Notifactions"/>
           <Button onPress={() => navigation.openDrawer()} title = "Open Drawer"/>
           <Button onPress={() => navigation.closeDrawer()} title = "Close Drawer"/>
        </View>
    );
}

function NotifactionsScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Button onPress={() => navigation.goBack()} title = "Go Back Home"/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex : 1, 
        alignItems : "flex-end",
        justifyContent : "center"
    }
})