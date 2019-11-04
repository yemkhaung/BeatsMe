import React from "react";

import { View, StyleSheet, TouchableOpacity } from "react-native";
import Svg from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";
import { playerSize } from "../constants";

const PlayerButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.playButton}>
            {props.isPlaying ? (
                <MaterialIcons name="pause" size={48} color="white" />
            ) : (
                <MaterialIcons name="play-arrow" size={48} color="white" />
            )}
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    playButton: {
        backgroundColor: "#000",
        width: playerSize,
        height: playerSize,
        borderRadius: playerSize,
        borderColor: "#fff",
        borderWidth: 4,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default PlayerButton;
