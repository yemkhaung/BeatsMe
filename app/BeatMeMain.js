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
import TabBar from "./components/TabBar";
import Sentence from "./components/Sentence";
import Player from "./components/Player";

export default class BeatMeMain extends React.Component {
    state = {
        fontLoaded: false
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

    render = () => (
        <View style={styles.container}>
            <SafeAreaView>
                <StatusBar barStyle="light-content" />
                {this.state.fontLoaded ? (
                    <View style={styles.wrapper}>
                        <NavBar />
                        <TabBar />
                        <Sentence />
                        <Player isTrackSelected={true} />
                    </View>
                ) : (
                    <ActivityIndicator animating />
                )}
            </SafeAreaView>
        </View>
    );
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
