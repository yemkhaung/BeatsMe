import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles, bgColorBlack } from "../constants";
import MadLibText from "./MadLibText";
import TabBar from "./TabBar";
import words from "../../assets/data/wordsWithGenres";

export default class Sentence extends React.Component {
    render = () => (
        <React.Fragment>
            <TabBar />
            <View style={styles.container}>
                <Text style={[globalStyles.beatsText, globalStyles.fadeText]}>I'M</Text>
                <MadLibText bgColor={"#DE2240"}>
                    {words[0][this.props.wordChoices[0]].name}
                </MadLibText>
                <Text style={[globalStyles.beatsText, globalStyles.fadeText]}>&amp; FEEL LIKE</Text>
                <MadLibText bgColor={"#C22452"}>
                    {words[1][this.props.wordChoices[1]].name}
                </MadLibText>
                <Text style={[globalStyles.beatsText, globalStyles.fadeText]}>WITH</Text>
                <MadLibText bgColor={"#A22464"}>
                    {words[2][this.props.wordChoices[2]].name}
                </MadLibText>
                <Text style={[globalStyles.beatsText, globalStyles.fadeText]}>TO</Text>
                <MadLibText bgColor={"#832879"}>
                    {words[3][this.props.wordChoices[3]].name}
                </MadLibText>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColorBlack,
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 16,
        paddingTop: 8
    }
});
