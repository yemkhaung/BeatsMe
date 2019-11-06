import React from "react";

import { View, Image, StyleSheet } from "react-native";
import { bgColorBlack, borderBlack } from "../constants";

const logoPath = "https://seeklogo.com/images/B/beats-music-logo-7991A4986B-seeklogo.com.png";
const logoSize = 54;

export default class NavBar extends React.Component {
    render = () => (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: logoPath }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColorBlack,
        borderBottomColor: borderBlack,
        borderBottomWidth: 1,
        marginTop: 20
    },
    logo: {
        width: logoSize,
        height: logoSize,
        margin: 16
    }
});
