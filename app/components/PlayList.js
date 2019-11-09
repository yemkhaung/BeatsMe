import React from "react";
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { albSize, bgColorWhite, beatsFont } from "../constants";

export default class PlayList extends React.Component {
    render = () => {
        const { tracks, onSetTrack } = this.props;

        return (
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
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
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
