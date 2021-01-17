import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class tab extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen}
                        option={{ title: ' Home ' }} />
                    <Tab.Screen name="Settings" component={SettingsScreen}
                        option={{ title: ' Details ' }} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

function HomeScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>
                Home Screen!
            </Text>
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>
                Settings Screen!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex : 1, 
        alignItems : "center",
        justifyContent : "center"
    }
})