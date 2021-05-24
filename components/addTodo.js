import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function addTodo({ handleSubmit }) {
    const [Todo, setTodo] = useState('')
    
    const handleChange = (val) => {
        setTodo(val)
    }


    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder={`Who's next?`}
                onChangeText={handleChange}    
            />

            <View style={styles.button}>
                <Button 
                    title={'Create new Todo'} 
                    color={'pink'} 
                    onPress={() => handleSubmit(Todo)}
                 />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        padding: 5,
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15, 
        borderRadius: 20,
        marginBottom: 15, 
        shadowColor: 'grey', 
        shadowRadius: 2,
    },
    button: {
        marginLeft: 15, 
        marginRight: 15,
    }
})
