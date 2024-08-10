import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Category from "../components/Category";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  return (
    <Screen className="bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4">
        <Text className="text-2xl font-medium w-8/12">
          Order Your Favourite Food Online
        </Text>
        <View className="w-4/12 flex items-end">
          <Pressable className="p-3 rounded-full border border-gray-200 ml-8">
            <Icon.Bell
              fill={themeColors.bgColor(1)}
              className="w-4 h-4"
              stroke={themeColors.bgColor(1)}
            />
          </Pressable>
        </View>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row mt-2 flex-1 items-center p-1.5 pl-3 rounded-full border border-gray-300">
          <Icon.Search className="w-6 h-6 mr-2" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
            <Icon.MapPin className="w-6 h-6" stroke="gray" />
            <Text className="text-gray-400">Katraj,Pune</Text>
          </View>

          <Pressable
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full ml-2"
          >
            <Icon.Sliders
              height={14}
              width={14}
              className="w-6 h-6 "
              stroke="white"
            />
          </Pressable>
        </View>
      </View>
      {/*  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        className="bg-gray-50"
      >
        {/* Categories */}
        <Category />

        {/* Features */}
        <FeaturedRow />
        <FeaturedRow />
        <FeaturedRow />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;
