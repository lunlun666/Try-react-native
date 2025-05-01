import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoriteContextProvider from "./store/context/favorite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerHandler() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#513106" },
        headerTintColor: "white",
        sceneStyle: {
          backgroundColor: "#857663",
        },
        drawerContentStyle: {
          backgroundColor: "#5c492f",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#513106",
        drawerActiveBackgroundColor: "#cdc3b6",
      }}
    >
      <Drawer.Screen
        name={"CategoryScreen"}
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name={"list"} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={"FavoritesScreen"}
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name={"star"} color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#513106" },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#857663",
              },
            }}
          >
            <Stack.Screen
              name="DrawerCategoryScreen"
              component={DrawerHandler}
              options={{
                headerShown: false,
                // title: "All category",
              }}
            />
            <Stack.Screen
              name="MealsOverviewScreen"
              component={MealsOverviewScreen}
              // options={({ route }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
