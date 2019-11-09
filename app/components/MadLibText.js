import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../constants";

const MadLibText = props => (
    <TouchableOpacity>
        <Text style={[globalStyles.beatsText, styles.text, { backgroundColor: props.bgColor }]}>
            {props.children}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    text: {
        padding: 3,
        paddingHorizontal: 10,
        marginVertical: 4,
        borderRadius: 3
    }
});

export default MadLibText;
