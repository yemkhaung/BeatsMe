import React from "react";
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { albSize, bgColorWhite, beatsFont, borderBlack, globalStyles } from "../constants";
import words from "../../assets/data/wordsWithGenres";

export default class PlayList extends React.Component {
    render = () => {
        const { tracks, onSetTrack } = this.props;

        return (
            <React.Fragment>
                <TouchableOpacity>
                    <View style={styles.sentenceContainer}>
                        <Text style={[globalStyles.beatsText, { fontSize: 26 }]}>
                            <Text style={{ color: "#777" }}>{"I'M "}</Text>
                            <Text>{words[0][this.props.wordChoices[0]].name}</Text>
                            <Text style={{ color: "#777" }}>{" & FEEL LIKE "}</Text>
                            <Text>{words[1][this.props.wordChoices[1]].name}</Text>
                            <Text style={{ color: "#777" }}>{" WITH "}</Text>
                            <Text>{words[2][this.props.wordChoices[2]].name}</Text>
                            <Text style={{ color: "#777" }}>{" TO "}</Text>
                            <Text>{words[3][this.props.wordChoices[3]].name}</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <ScrollView style-={styles.container}>
                    {tracks.map(track => (
                        <TouchableOpacity
                            key={track.id}
                            activeOpacity={0.85}
                            onPress={() => onSetTrack(track)}
                        >
                            <View style={styles.trackContainer}>
                                <Image
                                    source={{
                                        uri: `http://direct.rhapsody.com/imageserver/v2/albums/${track.albumId}/images/300x300.jpg`
                                    }}
                                    style={styles.albumArt}
                                />
                                <View style={styles.trackInfo}>
                                    <Text numberOfLines={2} style={styles.title}>
                                        {track.name}
                                    </Text>
                                    <Text numberOfLines={1} style={styles.artist}>
                                        {track.artistName}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </React.Fragment>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    sentenceContainer: {
        paddingVertical: 22,
        paddingHorizontal: 22,
        backgroundColor: "#000",
        borderBottomColor: borderBlack,
        borderBottomWidth: 1
    },
    trackContainer: {
        flex: 1,
        flexDirection: "row",
        height: albSize,
        alignItems: "center",
        backgroundColor: bgColorWhite,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
    },
    albumArt: {
        height: albSize,
        width: albSize
    },
    trackInfo: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 15
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        fontFamily: beatsFont
    },
    artist: {
        marginTop: 4,
        opacity: 0.6,
        fontSize: 16
    }
});
