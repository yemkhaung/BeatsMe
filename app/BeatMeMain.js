import React from "react";
import * as Font from "expo-font";
import {
    SafeAreaView,
    View,
    Dimensions,
    StyleSheet,
    StatusBar,
    ActivityIndicator
} from "react-native";
import { bgColorBlack } from "./constants";
import NavBar from "./components/NavBar";
import TheSentence from "./components/TheSentence";
import Player from "./components/Player";
import words from "../assets/data/wordsWithGenres";
import PlayList from "./components/PlayList";

export default class BeatMeMain extends React.Component {
    state = {
        fontLoaded: false,
        editWordIndex: null,
        wordChoiceIndices: [0, 0, 0, 0],
        tracks: null,
        playingTrack: null
    };

    constructor(props) {
        super(props);
        (async () => {
            await Font.loadAsync({
                geometric_black: require("../assets/fonts/Geometric_706_Black_BT.ttf")
            });
            this.setState({
                fontLoaded: true
            });
        })();
    }

    _getHighestScoreId = genreMap => {
        let highestScoreId = null;
        let highestScore = 0;

        let scores = {};
        for (var genreIndex in genreMap) {
            let genre = genreMap[genreIndex];
            let newScore = 0;
            if (genre.genreId in scores) {
                newScore = scores[genre.genreId] + genre.score;
            } else {
                newScore = genre.score;
            }
            scores[genre.genreId] = newScore;
            if (newScore > highestScore) {
                highestScore = newScore;
                highestScoreId = genre.genreId;
            }
        }
        console.log("highestScoreId " + highestScoreId);
        console.log("highestScore " + highestScore);
        return highestScoreId;
    };

    _loadSentence = () => {
        let genreMap0 = words[0][this.state.wordChoiceIndices[0]].genreMap;
        let genreMap1 = words[1][this.state.wordChoiceIndices[1]].genreMap;
        let genreMap2 = words[2][this.state.wordChoiceIndices[2]].genreMap;
        let genreMap3 = words[3][this.state.wordChoiceIndices[3]].genreMap;

        let first3GenreMap = [].concat.apply([], [genreMap0, genreMap1, genreMap2]);
        // console.log("first3GenreMap >>> ", first3GenreMap);

        fetch(
            "https://api.napster.com/v2.2/genres/" +
                this._getHighestScoreId(genreMap3) +
                "," +
                this._getHighestScoreId(first3GenreMap) +
                "/tracks/top?apikey=NzJiMTMzYjQtZDUwMi00ODU1LTljNTYtYWQzODM5YTI0ZGQ2"
        ).then(data => {
            data.json().then(dataJSON => {
                // console.log("DataJSON >>> ", dataJSON.tracks[0], "...");
                this.setState({ tracks: dataJSON.tracks });
                // Animated.timing(this.state.isPlaylistViewVisible, {
                //     toValue: 0,
                //     duration: 400,
                //     useNativeDriver: true,
                //     easing: Easing.inOut(Easing.ease)
                // }).start();
            });
        });
    };

    _editSentence = index => {
        console.log("_editSentence: ", index);
        this.setState({
            editWordIndex: index
        });
    };

    _updateWordChoice = index => {
        console.log("_updateWordChoice: ", index);
        this.setState(prevState => {
            const newState = { ...prevState };
            newState.wordChoiceIndices[prevState.editWordIndex] = index;
            newState.editWordIndex = null;
            return newState;
        });
    };

    _setPlaybackTrack = track => {
        this.setState({
            playingTrack: track
        });
    };

    _hidePLayerPlayList = () => {
        this.setState({
            playingTrack: null,
            tracks: null,
            editWordIndex: null
        });
    };

    render = () => {
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <StatusBar barStyle="light-content" />
                    {this.state.fontLoaded ? (
                        <View style={styles.wrapper}>
                            <NavBar />
                            {this.state.tracks ? (
                                <PlayList
                                    wordChoices={this.state.wordChoiceIndices}
                                    tracks={this.state.tracks}
                                    onSetPlaybackTrack={this._setPlaybackTrack}
                                    onHide={this._hidePLayerPlayList}
                                />
                            ) : (
                                <TheSentence
                                    wordChoices={this.state.wordChoiceIndices}
                                    editWordIndex={this.state.editWordIndex}
                                    onEditSentence={this._editSentence}
                                    onChooseWord={this._updateWordChoice}
                                />
                            )}
                            <Player
                                playingTrack={this.state.playingTrack}
                                onPressSentence={this._loadSentence}
                            />
                        </View>
                    ) : (
                        <ActivityIndicator animating />
                    )}
                </SafeAreaView>
            </View>
        );
    };
}

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColorBlack
    },
    wrapper: {
        width: width,
        height: height
    }
});
