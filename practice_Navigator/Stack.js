import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class stack extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} 
                    option = {{title : ' Home '}}/>
                    <Stack.Screen name="Details" component={DetailsScreen} 
                    option = {{title : ' Details '}}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

function HomeScreen({navigation}) {
    return (
        <View style={ styles.screen }>
            <Text>Home Screen</Text>
            <Button title = "Go to Second Screen" 
            onPress= { () => navigation.navigate('Details', {pageId: 1, msg:'From Home'})} />
            
        </View>
        
    );
}

function DetailsScreen({route, navigation}) {
    return (
        <View style = { styles.screen }>
            <Text>Detail Screen</Text>
            <Text>Page ID : {JSON.stringify(route.params.pageId)}</Text>
            <Text>Message : {JSON.stringify(route.params.msg)}</Text>
            <Button title =  "Go to Details..."
            onPress = { () => navigation.push('Details', { pageId: route.params.pageId+1, msg: 'From Details' })}/>

            <Button title = "Go to Home" onPress = {() => navigation.navigate('Home')} />
            <Button title = "Go back" onPress = {() => navigation.goBack()} />
            <Button title = "Back to First Screen" onPress = {() => navigation.popToTop()} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});