import React, {useEffect, useState} from "react";
import {Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import { theme} from "../theme";
import {LinearGradient} from "expo-linear-gradient";
import Cast from "../components/cast";

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMarging = ios ? null : 3
const MovieScreen = () => {

    const { params: items } = useRoute();
    const navigation = useNavigation();
    const [cast, setCast] = useState([1,2,3,4,5,6,7,8,9]);
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
                {/* Genre */}
                <View style={styles.genreView}>
                    <Text style={styles.genreTitle}>
                        Action ·
                    </Text>
                    <Text style={styles.genreTitle}>
                        Thriller ·
                    </Text>
                    <Text style={styles.genreTitle}>
                        Comedy ·
                    </Text>
                </View>
            {/*    Description*/}
                <Text style={styles.descriptionText}>
                    Scott finds a strange suit, which turns him into “Ant-Man.” Eventually, Scott must use the suit to stop the evil Hydra organization from using the shrinking technology to control the world. ANT-MAN is funny, goofy and exciting, with a touching father-daughter relationship at its center.
                </Text>
            </View>
            <Cast cast={cast} />
        </ScrollView>
    )
}

export default MovieScreen;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        backgroundColor: '#171717'
    },
    viewContainer: {
        width: '100%'
    },
    safeAreaViewContainer: {
        width: '100%',
        zIndex: 50,
        position: "absolute",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginTop: topMarging,
    },
    touchableOpacityButton: {
        borderRadius: 10,
        padding: 3,
        backgroundColor: theme.background
    },
    linearGradientElement: {
        width: width,
        height: height * .4,
        position: "absolute",
        bottom: 0
    },
    movieDetailsView: {
        marginTop: -height * .09,
    },
    title: {
        textAlign: "center",
        color: '#fff',
        fontSize: 25,
        fontWeight: "700",
    },
    status_release_runtime_Text: {
        color: 'rgb(163 163 163)',
        fontWeight: "600",
        fontSize: 16,
        textAlign: "center"
    },
    genreView: {
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 15,
    },
    genreTitle: {
        color: 'rgb(163 163 163)',
        fontWeight: "600",
        textAlign: "center"
    },
    descriptionText: {
        color: 'rgb(163 163 163)',
        marginHorizontal: 4
    }
})