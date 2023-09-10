import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 8,
        marginBottom: 10,
    },
    name: {
        flex: 1,
        color: '#F2F2F2',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 16,
    },
    submitButton: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitLabel: {
        fontSize: 20,
        color: 'white',
    },
});