import React, {useEffect, useState} from "react";
import {Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import {customStyles, theme} from "../theme";
import {LinearGradient} from "expo-linear-gradient";

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMarging = ios ? null : 3
const MovieScreen = () => {

    const { params: items } = useRoute();
    const navigation = useNavigation();
    const [isFavourite, setIsFavourite] = useState(false)
    let movieName = 'Ant-Man and The Wasp: Quantumania';

    useEffect(() => {
    //     call the movie API
    }, [items]);

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20}}
            style={styles.scrollViewContainer}
        >
            <View style={styles.viewContainer}>
                <SafeAreaView style={styles.safeAreaViewContainer} >
                    <TouchableOpacity onPress={() => navigation.goBack()}  style={styles.touchableOpacityButton}>
                        <ChevronLeftIcon size='28' color='white' strokeWidth={2.5} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)} >
                        <HeartIcon size='35' color={isFavourite ? theme.background : '#fff'} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image source={require('../assets/Captain_Marvel.jpeg')}
                        style={{width: width, height: height*.55}}
                    />
                    <LinearGradient colors={['transparent', 'rgba(23,23,23,.8)', 'rgba(23,23,23,1)']}
                                    style={styles.linearGradientElement}
                                    start={{ x: .5, y: 0}}
                                    end={{ x: .5, y: 1}}
                    />
                </View>
            </View>
            {/* Movie Details*/}
            <View style={styles.movieDetailsView}>
            {/*    Title */}
                <Text style={styles.title}>{movieName}</Text>
            {/*    Status, Release, Runtime*/}
                <Text style={styles.status_release_runtime_Text}>
                    Released · 2020 · 170 min
                </Text>
            </View>
        </ScrollView>
    )
}

export default MovieScreen;

