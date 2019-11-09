import React from "react";
import { Audio } from "expo-av";
import { Text, View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { bgColorDarkBlack, borderBlack, beatsFont } from "../constants";
import PlayButton from "./PlayButton";

export default class Player extends React.Component {
    audioInstance = null;
    playingTrack = null;

    state = {
        isPlaying: false
    };

    handlePlay = () => {
        if (this.audioInstance == null) {
            return;
        }
        if (this.state.isPlaying) {
            this.audioInstance
                .pauseAsync()
                .then(status => {
                    this.setState(prevState => ({
                        isPlaying: !prevState.isPlaying
                    }));
                })
                .catch(err => console.error(err));
        } else {
            this.audioInstance
                .playAsync()
                .then(status => {
                    this.setState(prevState => ({
                        isPlaying: !prevState.isPlaying
                    }));
                })
                .catch(err => console.error(err));
        }
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.playingTrack != null) {
            this.playingTrack = nextProps.playingTrack;
            const songUrl = nextProps.playingTrack.previewURL;
            if (this.audioInstance != null) {
                this.audioInstance.unloadAsync().then(status => this.startAudio(songUrl));
            } else {
                this.startAudio(songUrl);
            }
        }
    };

    componentWillUnmount() {
        if (this.audioInstance != null) {
            this.audioInstance.unloadAsync();
        }
    }

    startAudio = url => {
        console.log("Playing Track >>> ", url);
        this.audioInstance = new Audio.Sound();
        this.audioInstance
            .loadAsync({ uri: url })
            .then(status => this.audioInstance.playAsync())
            .then(status => this.setState({ isPlaying: true }))
            .catch(error => {
                console.error(error);
            });
    };

    render = () => (
        <Animated.View style={styles.container}>
            <View style={styles.player}>
                <PlayButton isPlaying={this.state.isPlaying} onPress={this.handlePlay} />
                <View style={styles.trackInfo}>
                    {this.playingTrack ? (
                        <React.Fragment>
                            <Text style={styles.titleText}>{this.playingTrack.name}</Text>
                            <Text style={styles.artistText}>{this.playingTrack.artistName}</Text>
                        </React.Fragment>
                    ) : (
                        <TouchableOpacity onPress={this.props.onPressSent}>
                            <Text style={styles.titleText}>PLAY</Text>
                            <Text style={styles.titleText}>THE SENTENCE</Text>
                        </TouchableOpacity>
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
        backgroundColor: bgColorDarkBlack,
        padding: 16,
        flexDirection: "row"
    },
    arrow: {
        backgroundColor: bgColorDarkBlack,
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
        color: "#fff",
        fontSize: 12,
        opacity: 0.7
    }
});
