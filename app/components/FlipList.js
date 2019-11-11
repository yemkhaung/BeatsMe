import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

const FlipList = props => {
    return (
        <ScrollView style={styles.container}>
            {props.children}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 200
    }
});

export default FlipList;
