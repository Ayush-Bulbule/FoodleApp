import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Screen from '../components/Screen'
import * as Icon from "react-native-feather"
import MenuCard from '../components/MenuCard'
import CartButton from '../components/CartButton'

const RestaurantScreen = () => {

    const { params } = useRoute();
    let item = params.item;
    console.log("Restaurants: ", item.image)
    return (
        <View className="relative">
            <ScrollView>
                <View className="relative">
                    <Image source={item.image} className="h-72 w-full" />
                    <TouchableOpacity className="absolute top-8 bg-white flex items-center justify-center rounded-full left-4 w-8 h-8" >
                        <Icon.ArrowLeft strokeWidth={3} stroke='orange' />
                    </TouchableOpacity>
                </View>
                <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }} className="bg-gray-50 p-4 -mt-12">
                    <View className="">
                        <Text className="text-2xl font-bold">{item ? item.name : ""}</Text>
                        <View className="flex-row gap-2 items-center">
                            <Image className="w-4 h-4" source={require('../assets/images/fullStar.png')} />
                            <Text className="text-xs text-gray-600">{item ? item.stars : ""}</Text>
                            <Text className="text-xs text-gray-600">({item ? item.reviews : ""} reviews)</Text>
                            <Icon.MapPin className="w-2 h-2" width={16} height={16} stroke='gray' />
                            <Text className="text-xs ml-2 text-gray-600">Naerby {item ? item.address : ""}</Text>
                        </View>
                    </View>
                </View>
                <View className="pb-36 bg-gray-50 ">
                    <Text className="px-4 py-4 text-xl font-bold">
                        Menu
                    </Text>
                    {
                        item.dishes.map((dish, index) => {
                            return (
                                <MenuCard key={index} menu={dish} />
                            )
                        })
                    }
                </View>
            </ScrollView>
            <CartButton />
        </View>
    )
}

export default RestaurantScreen