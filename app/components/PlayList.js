import React from "react";
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { albSize, bgColorWhite } from "../constants";

export default class PlayList extends React.Component {
    render = () => (
        <ScrollView style-={styles.container} showsVerticalScrollIndicator={false}>
            {this.props.tracks.map(track => (
                <TouchableOpacity key={track.id} activeOpacity={1}>
                    <View style={styles.trackContainer}>
                        <Image
                            source={{
                                uri: `http://direct.rhapsody.com/imageserver/v2/albums/${track.albumId}/images/300x300.jpg`
                            }}
                            style={styles.albumArt}
                        />
                        <View style={styles.trackInfo}>
                            <Text>{track.name}</Text>
                            <Text>{track.artistName}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
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
        paddingHorizontal: 20
    }
});
