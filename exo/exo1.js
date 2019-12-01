import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

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

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <FadeInView style={{flex: 1 }}>
          <View style={{flex: 0.5, backgroundColor: 'red'}}/>
          <View style={{flex: 0.5, backgroundColor: 'powderblue'}}/>
        </FadeInView>
      </View>
  )
}
