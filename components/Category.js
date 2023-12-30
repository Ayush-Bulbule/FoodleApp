import { View, Text, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

const Category = () => {

    const [activeItem, setActiveItem] = useState(0);
    return (
        <View className="mt-4 px-4">
            <Text className="text-sm  font-semibold ">Categories</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                className="overflow-visible gap-3"
                contentContainerStyle={{
                    paddingHorizontal: 0
                }}>
                {
                    categories.map((category, index) => {
                        let isActive = activeItem === index;
                        let categoryText = isActive ? 'text-gray-900' : 'text-gray-400';
                        let categoryBg = isActive ? 'bg-gray-200' : 'bg-white';

                        return (
                            <TouchableOpacity onPress={() => setActiveItem(index)} key={category.id} className="flex gap-2 items-center justify-center" >
                                <View className={`p-2 flex items-center justify-center  shadow ${categoryBg} rounded-full `}>
                                    <Image source={category.image} className="h-[45] w-[45]" />
                                </View>
                                <Text className={`text-center text-xs font-medium mt-2 ${categoryText}`}>{category.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View >
    )
}

export default Category