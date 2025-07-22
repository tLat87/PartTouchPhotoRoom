import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, Image} from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Logo image, assuming '../assets/img/Logo.png' is correct */}
            <Image source={require('../assets/img/Logo.png')} style={{borderRadius: 20,marginBottom: 0,marginTop: 50, width: 200,  height: 200, backgroundColor: '#fff'}} resizeMode='stretch' />

            {/* Title */}
            <Text style={styles.readyForPhotoText}>Ready for the PHOTO?</Text> {/* Translated text */}

            {/* "Take a photo" button */}
            <TouchableOpacity
                style={styles.takePhotoButton}
                onPress={() => navigation.navigate('PhotoScreen')}
            >
                <Text style={styles.takePhotoButtonText}>Choose a photo</Text> {/* Translated text */}
            </TouchableOpacity>

            {/* Other buttons */}
            <View style={styles.otherButtonsContainer}>
                <TouchableOpacity
                    style={styles.otherButton}
                    onPress={() => navigation.navigate('SavedPhotosScreen')}
                >
                    <Text style={styles.otherButtonText}>SAVED PHOTOS</Text> {/* Translated text */}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.otherButton}
                    onPress={() => navigation.navigate('InformationScreen')}
                >
                    <Text style={styles.otherButtonText}>INFORMATION</Text> {/* Translated text */}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C70A02', // Red background
        alignItems: 'center',
        justifyContent: 'space-between', // Distributes space between elements
        paddingVertical: height * 0.05,
    },
    logoContainer: { // This style block is not directly used in the current JSX for the logo, but kept for consistency
        alignItems: 'center',
        marginTop: height * 0.03, // Slightly less margin than on the welcome screen
        marginBottom: height * 0.05, // Margin to the next element
    },
    logoPart: { // Not directly used
        fontSize: width * 0.1,
        fontWeight: 'bold',
        color: '#FFF',
    },
    logoTouch: { // Not directly used
        fontSize: width * 0.1,
        fontWeight: 'bold',
        color: '#FFF',
    },
    logoPhotoRoom: { // Not directly used
        fontSize: width * 0.05,
        color: '#FFF',
        marginTop: -height * 0.01,
    },
    readyForPhotoText: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        color: '#FFF',
        textAlign: 'center',
        marginBottom: height * 0.04,
    },
    takePhotoButton: {
        backgroundColor: '#FFF',
        borderRadius: 20, // Rounded corners
        paddingVertical: height * 0.03,
        width: '85%', // Button width
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: height * 0.03,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    cameraIcon: { // Not directly used
        marginBottom: height * 0.01,
    },
    takePhotoButtonText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#AB0100',
        fontFamily: 'Grandstander', // Assuming this font is loaded
    },
    otherButtonsContainer: {
        width: '85%',
        marginBottom: height * 0.03, // Bottom margin
    },
    otherButton: {
        backgroundColor: '#AB0100', // Red background
        borderRadius: 20,
        paddingVertical: height * 0.025,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: height * 0.02, // Margin between buttons
        borderWidth: 2, // Border
        borderColor: '#FFF', // White border
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    otherButtonText: {
        fontSize: width * 0.05,
        fontFamily: 'Grandstander', // Assuming this font is loaded
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default HomeScreen;
