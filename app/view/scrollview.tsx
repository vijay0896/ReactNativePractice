import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";

const scrollview = () => {
  return (
    /* <ScrollView horizontal contentContainerStyle={{ marginTop: 10 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "gray",
                margin: 10,
              }}
            ></View>
          );
        })}
      </ScrollView> */
    ///
    <View style={{ flex: 1 }}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        //   horizontal
        ListHeaderComponent={
          <View
            style={{
              width: "100%",
              height: 120,
              backgroundColor: "black",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              This header or banner
            </Text>
          </View>
        }
        ListFooterComponent={
          <View
            style={{
              width: "100%",
              height: 120,
              backgroundColor: "blue",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              This is footer
            </Text>
          </View>
        }
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: 122,
                height: 120,
                backgroundColor: "gray",
                margin: 10,
              }}
            >
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default scrollview;
