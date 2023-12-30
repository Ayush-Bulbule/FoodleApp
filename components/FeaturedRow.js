import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FeaturedCard from './FeaturedCard'
import { featured } from '../constants'

const FeaturedRow = () => {
    return (
        <View>
            <View className="flex-row items-center justify-between pt-4 px-4">
                <View className="flex">
                    <Text className="text-md font-bold">Hot and Spicy</Text>
                    <Text className="text-xs text-gray-600">Spicy taste from the north</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-orange-600">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                    featured.restaurants.map((item, index) => {
                        return (
                            <FeaturedCard key={index} item={item} />
                        )
                    })
                }
                <FeaturedCard />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow