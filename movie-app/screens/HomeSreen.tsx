import React, {useState} from 'react';
import {Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import {customeStyles} from "../theme";
import TrendingMovies from "../components/trendingMovies";
import trendingMovies from "../components/trendingMovies";

const ios = Platform.OS == 'ios'
const HomeSreen: React.FC = () => {

    const [trending, setTrending] = useState([1,2,3,4,5,6,7,8,9])
    return (
        <View style={styles.container}>
            {/* Search Bar and Logo */}
            <SafeAreaView style={ ios ? styles.iosMarginBottom : styles.androidMarginBottom}>
                <StatusBar style='light' />
                <View style={styles.innerContainer}>
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color='white'/>
                    <Text style={styles.logo}>
                        <Text style={customeStyles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color='white' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>
            {/* Trending movies carousel*/}
                <TrendingMovies trendingMovies={trending} />
            </ScrollView>
        </View>
    )
}

export default HomeSreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#18181b'
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 4
    },
    iosMarginBottom: {
        marginBottom: 2
    },
    androidMarginBottom: {
        marginBottom: 3
    },
    logo: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 20
    }
})