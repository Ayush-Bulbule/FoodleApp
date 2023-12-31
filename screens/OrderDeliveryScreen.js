import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import * as Icon from "react-native-feather"

import { featured } from '../constants'
import { themeColors } from '../theme';

const OrderDeliveryScreen = () => {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();

    return (
        <View className="flex-1">
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                className="flex-1"
                mapType='standard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }} />
            </MapView>

            <View className="absolute bottom-0 w-full bg-white px-4 py-6 pb-10 rounded-2xl -mt-12 shadow-md">
                <View className="flex-row rounded-md">
                    <View className="flex-1">
                        <Text className="text-md mb-2 font-bold"> Estimated Arrival</Text>
                        <Text className="text-2xl ml-1 font-extrabold text-gray-600">20-30 Minutes</Text>
                        <Text className="text-xs font-semibold">Your order is on it's way!</Text>
                    </View>
                    <View className="flex-row gap-2">
                        <Image source={require("../assets/images/bikeGuy2.gif")} className="h-20 w-20 rounded-full" />
                    </View>
                </View>


                <View className="flex-row  justify-between rounded-full items-center mt-6 p-2" style={{ backgroundColor: themeColors.bgColor(0.7) }}>
                    <View className="flex-row  items-center">
                        <Image source={require("../assets/images/deliveryBoy.png")} className="h-16 w-16 mr-2 rounded-full" />
                        <View>
                            <Text className="font-bold text-white text-lg">Ujwal Khairnar</Text>
                            <Text className="font-bold text-white text-md">Your Rider</Text>
                        </View>
                    </View>

                    <View className="flex-row gap-x-3" >
                        <TouchableOpacity className="bg-white p-2  rounded-full flex items-center justify-center">
                            <Icon.Phone className="w-4 h-4" width={20} height={20} stroke='orange' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")} className="bg-red-500 p-2  rounded-full flex items-center justify-center">
                            <Icon.X className="w-4 h-4" width={20} height={20} stroke='white' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default OrderDeliveryScreen