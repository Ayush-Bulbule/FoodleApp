import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { featured } from '../constants'
import { themeColors } from '../theme'

import * as Icon from "react-native-feather"

const CartScreen = () => {
    const restaurants = featured.restaurants[0];
    console.log("Restaurants: ", restaurants)
    const navigation = useNavigation();
    return (
        <View className="bg-white flex-1">
            {/* Back Button */}
            <View className="relative py-8 shadow-sm">
                <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-8 bg-orange-400 flex items-center justify-center rounded-full left-4 w-8 h-8" >
                    <Icon.ArrowLeft strokeWidth={3} stroke='white' />
                </TouchableOpacity>
                <View>
                    <Text className="text-center text-xl font-bold">Your Cart</Text>
                    <Text className="text-center text-sm text-gray-600">3 items</Text>
                </View>
            </View>
            {/* cart time */}
            <View className="flex-row px-4 items-center justify-between" style={{ backgroundColor: themeColors.bgColor(0.2) }}>
                <Image source={require("../assets/images/bikeGuy.png")} className="h-24 w-24" />
                <Text className="text-center font-semibold text-sm text-gray-600">Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text className="text-center font-bold text-sm text-orange-500">Change</Text>
                </TouchableOpacity>
            </View>
            {/* cart items */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contextContainerStyle={{
                    paddingBottom: 100
                }}
                className="bg-white pt-5"
            >
                {
                    restaurants.dishes.map((dish, index) => (
                        <View className="flex-row my-2 justify-between shadow-md rounded-xl items-center bg-white p-2 mx-4 shadow-gray-500 " >
                            <View className="flex-row gap-2 items-center">
                                <Text className="text-sm mr-2 font-semibold text-orange-400"> 2 x</Text>
                                <Image source={dish.image} className="h-16 w-16 rounded-full" />
                                <Text className="text-lg font-bold">{dish.name}</Text>
                            </View>
                            <View className="flex-row gap-2 items-center">
                                <Text className="font-bold text-sm ">$10</Text>
                                <TouchableOpacity className="bg-orange-400  rounded-full w-6 h-6 flex items-center justify-center">
                                    <Icon.Minus className="w-4 h-4" width={16} height={16} stroke='white' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </ScrollView >
            {/* cart footer */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="absolute gap-y-3 bottom-0 w-full rounded-t-3xl bg-white px-4 py-4 shadow-md">
                <View className="flex-row justify-between items-center ">
                    <Text className="text-sm ">Subtotal:</Text>
                    <Text className="text-sm ">$30</Text>
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="text-sm ">Delivery Charges:</Text>
                    <Text className="text-sm ">$5</Text>
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="text-md font-bold">Order Total:</Text>
                    <Text className="text-md font-bold">$30</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('OrderPrepare')} className="bg-orange-400 rounded-full py-2 mt-4">
                    <Text className="text-center  text-white font-bold text-lg">Place Order</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default CartScreen