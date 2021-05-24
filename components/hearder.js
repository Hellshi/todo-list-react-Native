import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function hearder() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>My ToDos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'pink', 
      width: 400, 
      height: 80,
      alignItems: 'center', 
    }, 
    text: {
        marginTop: 30,
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 25,
    }
  });
