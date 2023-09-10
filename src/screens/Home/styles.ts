import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        padding: 24,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 45,
        paddingBottom: 10,
    },
    logo1: {
        height: 31,
        paddingRight: 10,
    },
    logo2: {
        height: 24,
    },
    logo3: {
        height: 26,
    },
    input: {
        flex: 1,
        height: 52,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: 'white',
        padding: 16,
        marginRight: 4,
        fontSize: 16,
        fontFamily: 'Inter',
    },
    formContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },
    submitButton: {
        width: 52,
        height: 52,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitLabel: {
        fontSize: 20,
        color: 'white',
    },
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    filterPerContainer: {
        flexDirection: 'row',
    },
    filter1Label: {
        color: '#4EA8DE',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '700',
    },
    filterCountContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        marginLeft: 8,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 999,
    },
    filterCount: {
        color: '#D9D9D9',
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: '700',
    },
    filter2Label: {
        color: '#8284FA',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '700',
    },
    listEmptyContainer: {
        alignItems: 'center',
        paddingTop: 20,

        borderTopColor: '#333',
        borderTopWidth: 1,
    },
    listEmptyIcon: {
        paddingTop: 50,
        paddingBottom: 15
    },
    listEmptyText1: {
        color: '#808080',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '700',
    },
    listEmptyText2: {
        color: '#808080',
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: '400',
    }
});
