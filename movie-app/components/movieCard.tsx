import React from "react";
import {Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback} from "react-native";

type MovieCardProps = {
    movieItem: number;
    handleClick: (item: number) => void;
}
const { width, height } = Dimensions.get('window');
const MovieCard: React.FC<MovieCardProps> = ({ movieItem, handleClick }) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(movieItem)}>
            <Image source={require('../assets/Captain_Marvel.jpeg')}
                   style={styles.imageStyles}
                   alt='Iron man'
                   />
        </TouchableWithoutFeedback>
    )
}

export default MovieCard;

const styles = StyleSheet.create({
    heading: {
        color: '#fff',
    },
    imageStyles: {
        width: width*.6,
        height: height*.4,
        borderRadius: 12
    }
})