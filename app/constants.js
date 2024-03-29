import { StyleSheet } from "react-native";

export const descriptors = ["I'M", "& FEEL LIKE", "WITH", "TO"];

export const fontSize = 30;
export const beatsFont = "geometric_black";

export const playerSize = 70;
export const albSize = 100;

export const primaryColor = "#DE2240";
export const secondaryColor = "#832879";
export const bgColorBlack = "#212121";
export const bgColorDarkBlack = "#171717";
export const bgColorWhite = "#E9EAEC";
export const borderBlack = "#313131";

export const beatsText = StyleSheet.create({});

export const globalStyles = StyleSheet.create({
    beatsText: {
        fontSize: fontSize,
        color: "white",
        fontWeight: "900",
        fontFamily: beatsFont
    },
    fadeText: {
        opacity: 0.66,
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 10
    }
});
