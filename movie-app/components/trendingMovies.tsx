import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import Carousel from 'react-native-snap-carousel';
import MovieCard from "./movieCard";

type TrendingMoviesProps = {
    trendingMovies: number[];
}

const { width, height } = Dimensions.get('window');

const  TrendingMovies: React.FC<TrendingMoviesProps> = ({trendingMovies}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.trendingHeader}>Trending</Text>
            <Carousel
                data={trendingMovies}
                renderItem={({item}) => <MovieCard movieItem={item} />}
                firstItem={1}
                inactiveSlideOpacity={.60}
                sliderWidth={width}
                itemWidth={width*.62}
                slideStyle={{display: 'flex', alignItems: 'center'}}
            />
        </View>
    )
}

export default TrendingMovies;

const styles = StyleSheet.create({
    container: {
        marginBottom: 8
    },
    trendingHeader: {
        color: "#fff",
        fontSize: 20,
        marginHorizontal: 4,
        marginBottom: 5
    }
})