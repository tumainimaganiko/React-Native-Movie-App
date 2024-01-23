import React from "react";
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {customStyles} from "../theme";
import {useNavigation} from "@react-navigation/native";

interface MoviesListProps {
    title: string;
    upComingMovies: number[];
    data: any[]
}

const { width, height } = Dimensions.get('window');

const MoviesList: React.FC<MoviesListProps> = ({ title, data}) => {
    const navigation = useNavigation<any>();
    let movieName = 'Ant-Man and The Wasp: Quantumania';

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={[styles.title, styles.textLarge]}>{title}</Text>
                <TouchableOpacity>
                    <Text style={[customStyles.text, styles.textLarge]}>See all</Text>
                </TouchableOpacity>
            </View>
        {/*    Movie Row*/}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15}}
            >
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => navigation.navigate('movie', item) }
                            >
                                <View style={{ marginRight: 20}}>
                                    <Image source={require('../assets/Captain_Marvel.jpeg')}
                                           style={{ width: width*.33, height: height*.22, borderRadius: 12 }}
                                    />
                                    <Text style={{color: '#e2e8f0', marginLeft: 1}}>{
                                        movieName.length > 14? movieName.slice(0,14) + '...' : movieName
                                    }</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default MoviesList;

const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
        letterSpacing: 4
    },
    titleContainer: {
        marginHorizontal: 4,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        color: '#fff',
    },
    textLarge: {
        fontSize: 25
    }
})