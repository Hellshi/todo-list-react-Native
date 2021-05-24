import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/hearder'
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo'

export default function App() {

  const [todos, setTodos] = useState([
 
  ])  

  const handlePress = (key) => {
    setTodos((prevList) => {
      return prevList.filter(todo => todo.key != key)
    })
  }

  const handleSubmit = (Todo) => {
    if(Todo.length > 3) {
      setTodos(prevList => {
       return[
         {todo: Todo, key: Math.random().toString()},
            ...prevList
        ]
    })} else { 
      Alert.alert('OOPS', 'Todos must be at least three characters long', [
        {text: 'Understood', onPress: () => console.log('Beleza, só não faz de novo parça') }
      ])
    }
    
  }

  return(
    
    <View style={styles.container}>

      <Header />
        {/* Add Todo */}
          <AddTodo handleSubmit={handleSubmit}/>
        {/* List Form */}
      <View style={styles.list}>
        <FlatList 
          data={todos}
          renderItem={({item}) => (
            <TodoItem item={item} handlePress={handlePress} />
          )}
        />
      </View>

      <View>
        {/* List*/}
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  list: {
    marginTop: 25,
  }
});
