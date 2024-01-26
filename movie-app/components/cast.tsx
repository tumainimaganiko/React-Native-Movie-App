import React from "react";
import {Text} from "react-native";

interface CastProps {
    cast: number[]
}
const Cast: React.FC<CastProps> = ({ cast}) => {
    return (
        <Text>A list of all actors in the movie</Text>
    )
}

export default Cast;