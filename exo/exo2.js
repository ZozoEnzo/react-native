import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')}/>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Retour home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Plus de détail"
                    onPress={() => this.props.navigation.navigate('MoreDetails')}
                />
                <Text>Details Screen</Text>
            </View>
        );
    }
}

class MoreDetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Retour home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        MoreDetails: MoreDetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
