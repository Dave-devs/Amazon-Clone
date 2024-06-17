import { StyleSheet } from "react-native"
import Colors from "./Colors"

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgClr
    },
    form: {
        backgroundColor: Colors.grey,
        flexDirection: 'row',
        gap: 10,
        marginHorizontal: 20,
        height: 40,
        alignItems: 'center',
        borderRadius: 4,
        paddingHorizontal: 10
    },
    largeBtn: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.btnClr,
        marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 80
    },
    formContainer: {
        marginTop: 90,
        gap: 20,
    },
    forgetPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },
    seMoreContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
    },
    seeMore: {
        fontFamily: 'nunitoM',
        fontSize: 14,
        color: Colors.primary
    },
    headerText: {
        fontFamily: 'nunitoB',
        fontSize: 18,
    },
    divider: {
        borderBottomWidth: 5,
        width: '100%',
        borderColor: '#e9ecef'
    },
    nameView: {
        backgroundColor: Colors.accent2,
        height: 35,
        paddingHorizontal: 10,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
})