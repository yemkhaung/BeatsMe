import React from "react";
import { Audio } from "expo-av";
import { Text, View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { bgColorDarkBlack, borderBlack, beatsFont } from "../constants";
import PlayButton from "./PlayButton";

export default class Player extends React.Component {
    audioInstance = null;

    state = {
        isPlaying: false
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.playingTrack != null) {
            const songUrl = nextProps.playingTrack.previewURL;
            if (this.audioInstance != null) {
                this.audioInstance.unloadAsync().then(status => this._startAudio(songUrl));
            } else {
                this._startAudio(songUrl);
            }
        } else {
            this._stopTrack();
        }
    };

    componentWillUnmount() {
        this._stopTrack();
    }

    _handlePlayback = () => {
        if (this.audioInstance == null) {
            return;
        }
        if (this.state.isPlaying) {
            this.setState({ isPlaying: false });
            this.audioInstance.pauseAsync().catch(err => console.error(err));
        } else {
            this.setState({ isPlaying: true });
            this.audioInstance.playAsync().catch(err => console.error(err));
        }
    };

    _startAudio = url => {
        console.log("Playing Track >>> ", url);
        this.audioInstance = new Audio.Sound();
        this.audioInstance
            .loadAsync({ uri: url }, { progressUpdateIntervalMillis: 50 })
            .then(status => {
                this.setState({ isPlaying: true });
                return this.audioInstance.playAsync();
            })
            .then(status => {
                this.audioInstance.setOnPlaybackStatusUpdate(this._updatePlayback);
            })
            .catch(error => {
                console.error(error);
            });
    };

    _stopTrack = () => {
        if (this.audioInstance != null) {
            this.setState({ isPlaying: false });
            this.audioInstance.stopAsync();
        }
    };

    _updatePlayback = status => {
        if (status.didJustFinish && !status.isLooping) {
            this.setState({ isPlaying: false });
        }
    };

    render = () => (
        <Animated.View style={styles.container}>
            <View style={styles.player}>
                <PlayButton isPlaying={this.state.isPlaying} onPress={this._handlePlayback} />
                <View style={styles.trackInfo}>
                    {this.props.playingTrack ? (
                        <React.Fragment>
                            <Text numberOfLines={1} style={styles.titleText}>
                                {this.props.playingTrack.name}
                            </Text>
                            <Text numberOfLines={1} style={styles.artistText}>
                                {this.props.playingTrack.artistName}
                            </Text>
                        </React.Fragment>
                    ) : (
                        <TouchableOpacity onPress={this.props.onPressSentence}>
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
