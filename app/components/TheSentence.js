import React from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
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
import FlipList from "./FlipList";

export default class TheSentence extends React.Component {
    renderMadLibs = () => {
        const { editWordIndex, wordChoices, onChooseWord, onEditSentence } = this.props;
        let views = [];

        if (editWordIndex != null) {
            // render word list suggestions for editing MadLib
            const wordList = words[editWordIndex];
            let colorScale = chroma.scale([primaryColor, secondaryColor]).colors(wordList.length);
            views.push(
                <Text
                    key={`dt-${editWordIndex}`}
                    style={[globalStyles.beatsText, globalStyles.fadeText]}
                >
                    {descriptors[editWordIndex]}
                </Text>
            );
            wordList.forEach((word, index) => {
                views.push(
                    <MadLibText
                        key={`mt-${index}`}
                        bgColor={colorScale[index]}
                        onPress={() => onChooseWord(index)}
                    >
                        {word.name}
                    </MadLibText>
                );
            });
        } else {
            // render all words of TheSentence
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
        }

        return (
            <ScrollView style={styles.container}>
                <View style={styles.contentWrapper}>{views}</View>
            </ScrollView>
        );
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
    },
    contentWrapper: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: 120,
        paddingHorizontal: 16,
        paddingVertical: 8
    }
});
