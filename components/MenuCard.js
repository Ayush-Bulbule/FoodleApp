import { View, Image, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"

const MenuCard = ({ menu }) => {
    return (
        <View className="flex-row my-2  shadow-lg rounded-xl items-center bg-white p-2 mx-4 shadow-gray-500 " >
            <Image className="w-20 h-20 rounded-xl" source={menu.image} />
            <View className="px-2 flex-1">
                <Text className="text-lg font-bold">{menu.name}</Text>
                <Text className="text-sm text-gray-600">{menu.description}</Text>
                <View className=" flex-row justify-between gap-2 items-center">
                    <Text className="text-lg font-bold">${menu.price}</Text>
                    <View className=" flex-row gap-2">
                        <TouchableOpacity className="bg-orange-400  rounded-full w-6 h-6 flex items-center justify-center">
                            <Icon.Minus className="w-4 h-4" width={16} height={16} stroke='white' />
                        </TouchableOpacity>
                        <Text>3</Text>
                        <TouchableOpacity className="bg-orange-400  rounded-full w-6 h-6 flex items-center justify-center">
                            <Icon.Plus className="w-4 h-4" width={16} height={16} stroke='white' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >

    )
}

export default MenuCard