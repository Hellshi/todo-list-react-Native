import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function todoItem({ item, handlePress }) {
    return (
        <TouchableOpacity onPress={() => handlePress(item.key)}>
            <Text style={styles.item}>{item.todo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 16, 
        borderColor: '#bbb', 
        borderWidth: 1, 
        borderStyle: 'dashed', 
        borderRadius: 10
    }
})
