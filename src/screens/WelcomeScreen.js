import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, Image} from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen1 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Logo image, assuming '../assets/img/Logo.png' is correct */}
            {/*<Image source={require('../assets/img/Logo.png')} style={{borderRadius: 20,marginBottom: -50,marginTop: 50, width: 200,  height: 200, backgroundColor: '#fff'}} resizeMode='stretch' />*/}

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Take a picture.</Text>
                <Text style={styles.title}>But with a twist.</Text>
                <Text style={styles.description}>
                    You get a random instruction:
                </Text>
                <Text style={styles.instructionText}>"Pretend you're a toaster"</Text>
                <Text style={styles.instructionText}>"Stick your tongues out like crazy"</Text>
                <Text style={styles.instructionText}>"Look at each other like you're looking at a cheburek"</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('WelcomeScreen2')} // Navigate to the next screen
            >
                <Text style={styles.buttonText}>Selfies? Let's go.</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const WelcomeScreen2 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Logo image, assuming '../assets/img/Logo.png' is correct */}
            {/*<Image source={require('../assets/img/Logo.png')} style={{borderRadius: 20,marginBottom: -50,marginTop: 50, width: 200,  height: 200, backgroundColor: '#fff'}} resizeMode='stretch' />*/}

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Nobody is kidding.</Text>
                <Text style={styles.title}>But we are.</Text>
                <Text style={styles.description}>
                    After the photo, you get a random{"\n"}meme caption.
                </Text>
                <Text style={styles.description}>Nothing serious. Just a thrill.</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('PermissionsScreen')

                }}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C70A02', // Red background
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: height * 0.05, // Top and bottom padding
    },
    logoContainer: { // This style block is not directly used in the current JSX for the logo, but kept for consistency
        alignItems: 'center',
        marginTop: height * 0.05,
    },
    logoPart: { // Not directly used
        fontSize: width * 0.1, // Adaptive font size
        fontWeight: 'bold',
        color: '#FFF',
    },
    logoTouch: { // Not directly used
        fontSize: width * 0.1, // Adaptive font size
        fontWeight: 'bold',
        color: '#FFF',
    },
    logoPhotoRoom: { // Not directly used
        fontSize: width * 0.05, // Adaptive font size
        color: '#FFF',
        marginTop: -height * 0.01,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1, // Allows content to take available space
        paddingHorizontal: width * 0.1,
    },
    title: {
        fontSize: width * 0.07, // Adaptive font size
        fontWeight: 'bold',
        color: '#FFF',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        textAlign: 'center',
        marginBottom: height * 0.01,
    },
    description: {
        fontSize: width * 0.045, // Adaptive font size
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        marginTop: height * 0.02,
        lineHeight: height * 0.03, // Line spacing
    },
    instructionText: {
        fontSize: width * 0.04, // Adaptive font size
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        marginTop: height * 0.01,
    },
    button: {
        backgroundColor: '#FFF',
        borderRadius: 30, // Rounded corners
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.1,
        marginBottom: height * 0.03,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    buttonText: {
        fontFamily: 'Grandstander', // Assuming this font is loaded
        fontSize: width * 0.05, // Adaptive font size
        fontWeight: 'bold',
        color: '#E53E3E', // Red button text color
    },
});

export { WelcomeScreen1, WelcomeScreen2 };
