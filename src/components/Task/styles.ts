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
    descriptionIncompleted: {
        flex: 1,
        color: '#F2F2F2',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
    },
    descriptionCompleted: {
        flex: 1,
        color: '#808080',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        textDecorationLine: 'line-through'
    },
    submitButton: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButtonStatus: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitLabel: {
        fontSize: 20,
        color: 'white',
    },
});