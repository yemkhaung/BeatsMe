import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles, bgColorBlack } from "../constants";
import ColorText from "./ColorText";

export default class Sentence extends React.Component {
    render = () => (
        <View style={styles.container}>
            <Text style={[globalStyles.beatsText, styles.fadeText]}>I'M</Text>
            <ColorText bgColor={"#DE2240"}>IN THE GARAGE</ColorText>
            <Text style={[globalStyles.beatsText, styles.fadeText]}>&amp; FEEL LIKE</Text>
            <ColorText bgColor={"#C22452"}>INNOVATING</ColorText>
            <Text style={[globalStyles.beatsText, styles.fadeText]}>WITH</Text>
            <ColorText bgColor={"#A22464"}>MY COHORT</ColorText>
            <Text style={[globalStyles.beatsText, styles.fadeText]}>TO</Text>
            <ColorText bgColor={"#832879"}>CLASSIC ROCK</ColorText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColorBlack,
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 16,
        paddingTop: 8
    },
    fadeText: {
        opacity: 0.66,
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 10
    }
});
