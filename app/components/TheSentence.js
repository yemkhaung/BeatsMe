import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import chroma from "chroma-js";

import {
    globalStyles,
    bgColorBlack,
    secondaryColor,
    primaryColor,
    descriptors
} from "../constants";
import MadLibText from "./MadLibText";
import TabBar from "./TabBar";
import words from "../../assets/data/wordsWithGenres";

export default class TheSentence extends React.Component {
    renderMadLibs = () => {
        const { editWordIndex, wordChoices, onEditSentence } = this.props;
        if (editWordIndex) {
            // render word list suggestions
        } else {
            let views = [];
            let colorScale = chroma.scale([primaryColor, secondaryColor]).colors(4);
            words.forEach((wordList, index) => {
                views.push(
                    <Text
                        key={`dt-${index}`}
                        style={[globalStyles.beatsText, globalStyles.fadeText]}
                    >
                        {descriptors[index]}
                    </Text>,
                    <MadLibText
                        key={`mt-${index}`}
                        bgColor={colorScale[index]}
                        onPress={() => onEditSentence(index)}
                    >
                        {wordList[wordChoices[index]].name}
                    </MadLibText>
                );
            });
            return <View style={styles.container}>{views}</View>;
        }
    };
    render = () => (
        <React.Fragment>
            <TabBar />
            {this.renderMadLibs()}
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
