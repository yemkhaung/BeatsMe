import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { bgColorBlack, borderBlack, globalStyles } from "../constants";

export default class TabBar extends React.Component {
    render = () => (
        <View style={styles.container}>
            <Text style={globalStyles.beatsText}>{"THE SENTENCE"}</Text>
            <View style={styles.arrow} />
        </View>
    );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        paddingVertical: 32,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        borderBottomColor: borderBlack,
        borderBottomWidth: 1
    },
    arrow: {
        backgroundColor: bgColorBlack,
        width: 22,
        height: 22,
        color: bgColorBlack,
        position: "absolute",
        bottom: -10,
        left: width / 2 - 8,
        transform: [{ rotate: "45deg" }],
        borderTopColor: borderBlack,
        borderTopWidth: 1,
        borderLeftColor: borderBlack,
        borderLeftWidth: 1
    }
});
