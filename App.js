import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title={'Add new Goal'} onPress={() => {setIsAddMode(true)}} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value}/>}
      />
     </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
