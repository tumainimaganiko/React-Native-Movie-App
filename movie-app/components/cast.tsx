import React from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {textNeutral} from "../theme";

interface CastProps {
    cast: number[]
}
const Cast: React.FC<CastProps> = ({ cast}) => {
    let personName = 'Robert Downer';
    let characterName = 'Tony Stack';

    return (
        <View style={{ marginVertical: 15}}>
            <Text style={styles.castTitle}>Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15}}
            >
                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.button}
                            >
                                <View style={styles.imageContainer}>
                                    <Image source={require('../assets/Captain_Marvel.jpeg')} style={styles.castImage} />
                                </View>
                                <Text style={styles.characterName}>
                                    {
                                        characterName.length > 10 ? characterName.slice(0,10) + '...' : characterName
                                    }
                                </Text>
                                <Text style={[styles.characterName, textNeutral]}>
                                    {
                                        personName.length > 10 ? personName.slice(0,10) + '...' : personName
                                    }
                                </Text>

                            </TouchableOpacity>
                        )
                    } )
                }
            </ScrollView>
        </View>
    )
}

export default Cast;

const styles = StyleSheet.create({
    castTitle: {
        color: '#fff',
        fontSize: 18,
        marginHorizontal: 10,
        marginBottom: 20
    },
    button: {
        marginRight: 4,
        alignItems: "center",
    },
    characterName: {
        color: '#fff',
        fontSize: 12,
        marginTop: 5
    },
    imageContainer: {
        overflow: "hidden",
        borderRadius: 1000,
        height: 80,
        width: 80,
        alignItems: "center",
        borderWidth: 1,
        borderColor: textNeutral.color
    },
    castImage: {
        borderRadius: 16,
        height: 84,
        width: 80,
    }
})