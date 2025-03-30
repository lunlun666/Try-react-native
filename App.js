import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (enterText) => {
    setCourseGoals((currentCourseGoals) => {
      // console.log("currentCourseGoals =>", currentCourseGoals);
      return [
        ...currentCourseGoals,
        { text: enterText, id: Math.random().toFixed(3).toString() },
      ];
    });
    setModalIsVisible(false);
  };

  const openGoalModal = () => {
    setModalIsVisible(true);
  };

  const closeGoalModal = () => {
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    console.log("delete", id);
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title={"open"}
          color={"#5e0acc"}
          onPress={() => openGoalModal()}
        />
        <GoalInput
          modalVisible={modalIsVisible}
          onAddEvent={addGoalHandler}
          onCancelEvent={closeGoalModal}
        />
        {/* 最好的做法是用 View 包起來，並且將除了自行以外的 CSS 加在 View 上
        並且在 android 和 ios 上樣式如果不同，基本上可以用這種方式解決
        但有些會需要寫不同的方式來解決，並且 react native 不會像 web 那樣，將
        css 自動繼承到 child element 上  */}
        {/* <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View> */}

        {/* 使用 FlatList 取代 ScrollView，FlatList 可以做到只在 user 看到的東西
      才會顯示，看不到的地方不會顯示 */}

        {/* 這邊顯示一樣需要 key，但是使用 key 的方式改成在原始資料提供 */}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onPressEvent={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 12,
  },
  goalsContainer: {
    flex: 6,
  },
});
