import { Tabs,Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          // backgroundColor: "#25292e",
          
        },
        headerShadowVisible: false,
        
        headerTintColor: "#000",
        tabBarStyle: {
        
          // backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home-variant" : "home-variant-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      
      <Tabs.Screen name="profile" 
      options={{title:"Profile" ,tabBarIcon:({color, focused})=>(
        <Ionicons  name={
          focused ? "person-circle" : "person-circle-outline"
        }
        color={color}
        size={24} />
      )}}/>
    </Tabs>
  );
}
