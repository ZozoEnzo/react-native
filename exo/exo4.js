import React from "react";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import PropTypes from 'prop-types';
import {View, Text }from "react-native";
import * as Location from 'expo-location';
import * as ReactLocation from 'react-native-location';




export const getVelibsAroundMe = async () => {
    const position = await getPosition()
    return {
        position
    }
}

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
            /* Je comprends toujours pas pourquoi ça ne fonctionne pas, même avec votre correction, ça ne m'a pas aidé...
            let location = await Location.getCurrentPositionAsync({});*/
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

class Exo4 extends React.Component{
    render() {
        return (
            <View style={{flex: 0.5}}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: position.latitude,
                        longitude: position.longitude,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}
                    showsUserLocation
                />
                <View>
                    <Text>{name}</Text>
                    <Text>{adresse}</Text>
                </View>
            </View>
        );
    }
}


Exo4.propTypes = {
    position: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
    }),
    name: PropTypes.string,
    adresse: PropTypes.string
}
