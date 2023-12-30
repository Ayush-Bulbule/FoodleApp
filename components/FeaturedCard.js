import { StyleSheet, Text, TouchableWithoutFeedback, Image, View } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { useNavigation } from '@react-navigation/native'

const FeaturedCard = ({ item }) => {

    const navigation = useNavigation();


    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Restaurant', { item: item })}
        >
            <View className="flex mr-6 rounded-xl my-6 mx-3 bg-white  shadow-lg  shadow-gray-400">
                <Image className="w-64 h-32 rounded-t-xl" source={item ? item.image : ""} />
                <View className="flex-1  ml-2 py-2">
                    <Text className="text-md font-bold">{item ? item.name : ""}</Text>
                    <View className="flex-row gap-2 items-center">
                        <Image className="w-4 h-4" source={require('../assets/images/fullStar.png')} />
                        <Text className="text-xs text-gray-600">{item ? item.stars : ""}</Text>
                        <Text className="text-xs text-gray-600">({item ? item.reviews : ""} reviews)</Text>
                    </View>
                </View>
                <View className="flex-1 flex-row   ml-2 pb-2">
                    <Icon.MapPin className="w-2 h-2" width={16} height={16} stroke='gray' />
                    <Text className="text-xs ml-2 text-gray-600">Naerby {item ? item.address : ""}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}

export default FeaturedCard
