import React, { Fragment, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState(true);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== "") {
      const task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };

      setTasks((newTasks) => [...tasks, task]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const markTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            done: !task.done,
          }
        : task
    );

    setTasks(markTasks);
  }

  function handleRemoveTask(id: number) {
    const filterTasks = tasks.filter((task) => task.id !== id);
    setTasks(filterTasks);
  }

  return (
    <View style={theme ? styles.home : styles.homeDark}>
      <Header changeTheme={setTheme} />

      <TodoInput theme={theme} addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        theme={theme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#fff",
  },
  homeDark: {
    flex: 1,
    backgroundColor: "#1F1F1F",
  },
});
