import React, { useState, useEffect  }from "react";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import PropTypes from 'prop-types';
import {View, Text, Button, Animated} from "react-native";
import * as Location from 'expo-location';
import * as ReactLocation from 'react-native-location';
import {createStackNavigator} from "react-navigation-stack";



const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 10000,
            }
        ).start();
    }, [])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                flex: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}


export const getVelibsAroundMe = async () => {
    const position = await getPosition()
    return {
        position
    }
}
/*
export default function App() {
    Location.requestPermissionsAsync()
    const getPosition = async () => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    resolve(position)
                },
                error => {
                    reject(error)
                }
            )
        })
    }
    console.log(getPosition)
    return (
        <View style={{flex: 1}}>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex: 0.5}}
            region={{
                latitude: 48.8534,
                longitude: 2.3488,
                latitudeDelta: 0.09,
                longitudeDelta: 0.04
            }}
            showsUserLocation
        />
            <View style={{padding: 15}}>
                <Text style={{fontSize: 20}}>Velib</Text>
                <Text>Nom</Text>
                <Text>Texte</Text>
                <Text>Adresse</Text>
            </View>
        </View>
    )
}
*/
class MapScreen extends React.Component{
    render() {
        return (
            <View style={{flex: 0.5}}>
            <MapView
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: 48.8534,
                    longitude: 2.3488,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
                showsUserLocation
            />
                /*<View>
                    <Text>{name}</Text>
                    <Text>{adresse}</Text>
                </View>*/
            </View>
        );
    }
}


/*Exo4.propTypes = {
    position: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
    }),
    name: PropTypes.string,
    adresse: PropTypes.string
}*/

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Voir la map"
                    onPress={() => this.props.navigation.navigate('Map')}
                />
                <Button
                    title="Voir autre chose"
                    onPress={() => this.props.navigation.navigate('Truc')}
                />
                <Text>On est là</Text>
            </View>
        );
    }
}

class TrucScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <FadeInView style={{flex: 1 }}>
                    <View style={{flex: 0.5, backgroundColor: 'red'}}/>
                    <View style={{flex: 0.5, backgroundColor: 'powderblue'}}/>
                </FadeInView>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Map: MapScreen,
        Truc: TrucScreen
    },
    {
        initialRouteName: 'Home',
    }
);
