import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CartButton = () => {
    const navigation = useNavigation();
    return (
        <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={{ backgroundColor: '#FFA451' }}
                className="flex-row justify-between items-center mx-4 px-4 py-2 rounded-full">
                <View className="p-2 px-4 rounded-full bg-orange-200/60">
                    <Text className="font-medium text-white text-lg">
                        3
                    </Text>
                </View>
                <Text className="text-sm font-medium text-white">
                    View Cart
                </Text>
                <Text className="font-medium text-white text-lg">
                    $20
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default CartButton