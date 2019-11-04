import React from "react";

import { Text, View, StyleSheet, Animated } from "react-native";
import { playerBlack, borderBlack, beatsFont } from "../constants";
import PlayerButton from "./PlayerButton";

export default class Player extends React.Component {
    state = {
        isPlaying: true
    };

    handlePlay = () => {
        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying
        }));
    };

    render = () => (
        <Animated.View style={styles.container}>
            <View style={styles.player}>
                <PlayerButton isPlaying={this.state.isPlaying} onPress={this.handlePlay} />
                <View style={styles.trackInfo}>
                    {this.props.isTrackSelected ? (
                        <React.Fragment>
                            <Text style={styles.titleText}>Gotta Find You</Text>
                            <Text style={styles.artistText}>Joe Jonas</Text>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Text style={styles.titleText}>PLAY</Text>
                            <Text style={styles.titleText}>THE SENTENCE</Text>
                        </React.Fragment>
                    )}
                </View>
            </View>
            <View style={styles.arrow} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 100,
        position: "absolute",
        bottom: 0,
        width: "100%",
        minHeight: 100
    },
    player: {
        borderTopColor: borderBlack,
        borderTopWidth: 1,
        backgroundColor: playerBlack,
        padding: 16,
        flexDirection: "row"
    },
    arrow: {
        backgroundColor: playerBlack,
        width: 22,
        height: 22,
        position: "absolute",
        top: -11,
        left: 40,
        transform: [{ rotate: "45deg" }],
        borderTopColor: borderBlack,
        borderTopWidth: 1,
        borderLeftColor: borderBlack,
        borderLeftWidth: 1
    },
    trackInfo: {
        paddingHorizontal: 18,
        justifyContent: "center"
    },
    titleText: {
        fontFamily: beatsFont,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 2,
        fontSize: 24
    },
    artistText: {
        fontFamily: beatsFont,
        color: "#fff",
        fontSize: 14,
        opacity: 0.7,
        marginLeft: 4
    }
});
