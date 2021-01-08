import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';

export const AppLoader = () => {
  return (
   <View style={styles.center}>
     {/*<ActivityIndicator size='large' />*/}
     <Text>Loading...</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});