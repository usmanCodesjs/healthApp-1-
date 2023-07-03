import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Health App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Diseases")
                    }>
                        <Text style={styles.routeText}>Diseases</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SymptomChecker")
                    }>
                        <Text style={styles.routeText}>Symptom Checker</Text>
                        
                      
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Help")
                    }>
                        <Text style={styles.routeText}>Help</Text>
                        
                      
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("localmedical")
                    }>
                        <Text style={styles.routeText}>localmedical</Text>
                        
                      
                    </TouchableOpacity>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent:"center",
        alignItems:"center",
        
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "green"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "green",
        
        
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
});