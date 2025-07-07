import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Dimensions, Alert, Image,
} from 'react-native';
import Share from 'react-native-share'; // Importing react-native-share

const { width, height } = Dimensions.get('window');

const InformationScreen = ({ navigation }) => {
    const handleShareApp = async () => { // Made an asynchronous function
        try {
            const shareOptions = {
                message: 'Check out this awesome app: Part•Touch PhotoRoom! Get it here',
                // url: 'https://your-app-store-link.com', // Optional: link to the app in App Store/Google Play
                // title: 'Part•Touch PhotoRoom', // Title for the sharing dialog
            };
            // Logic for sharing the app will go here
            const result = await Share.open(shareOptions);
            console.log('Share result:', result);
            // Add logic after successful sharing (if needed)
            // if (result.action === Share.sharedAction) {
            //   if (result.activityType) {
            //     // shared with specific activity type
            //   } else {
            //     // shared
            //   }
            // } else if (result.action === Share.dismissedAction) {
            //   // dismissed
            // }

        } catch (error) {
            console.error('Error sharing app:', error.message);
            Alert.alert('Error', 'Failed to share the app. ' + error.message); // Translated error message
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top panel */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonArrow}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoButton}>
                    <Text style={styles.infoButtonText}>INFORMATION</Text>
                </TouchableOpacity>
            </View>

            {/* Centered Logo */}
            <Image source={require('../assets/img/Logo.png')} style={{borderRadius: 20,marginBottom: 50,marginTop: 0, width: 200,  height: 200, backgroundColor: '#fff'}} resizeMode='stretch' />


            {/* Information block */}
            <View style={styles.infoContent}>
                <Text style={styles.infoText}>
                    <Text style={styles.boldText}>Part•Touch: PhotoRoom</Text> is a simple and funny
                    game for two.
                </Text>
                <Text style={styles.infoText}>
                    Get a random task (for example: “pretend you
                    are a TV from the 2000s”), take a selfie - and the
                    app will show your frame with an unexpected
                    humorous caption.
                </Text>
                <Text style={styles.infoText}>
                    Create memories.
                    Everything is stored only on your device.
                </Text>
                <Text style={styles.infoText}>
                    No registrations. No data collection. Just you, the
                    camera and good absurdity.
                </Text>
            </View>

            {/* Share Button */}
            <TouchableOpacity style={styles.shareButton} onPress={handleShareApp}>
                <Text style={styles.shareButtonText}>SHARE</Text>
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
        paddingVertical: height * 0.05,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        justifyContent: 'space-between',
        marginBottom: height * 0.03,
        marginTop: height * 0.01,
    },
    backButton: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: 15,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    backButtonArrow: {
        fontSize: width * 0.08,
        color: '#E53E3E',
        fontWeight: 'bold',
        fontFamily: 'Grandstander', // Assuming this font is loaded
    },
    infoButton: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    infoButtonText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        color: '#E53E3E',
    },
    logoContainer: { // This style block is not directly used in the current JSX for the logo, but kept for consistency
        alignItems: 'center',
        marginBottom: height * 0.04,
    },
    logoPart: { // Not directly used
        fontSize: width * 0.1,
        fontWeight: 'bold',
        fontFamily: 'Grandstander',
        color: '#FFF',
    },
    logoTouch: { // Not directly used
        fontSize: width * 0.1,
        fontFamily: 'Grandstander',
        fontWeight: 'bold',
        color: '#FFF',
    },
    logoPhotoRoom: { // Not directly used
        fontSize: width * 0.05,
        color: '#FFF',
        marginTop: -height * 0.01,
    },
    infoContent: {
        width: '85%',
        flex: 1, // Allows content to take up available space
        justifyContent: 'center', // Centers text vertically
    },
    infoText: {
        fontSize: width * 0.045,
        color: '#FFF',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        textAlign: 'center',
        marginBottom: height * 0.02,
        lineHeight: height * 0.03, // Line height for readability
    },
    boldText: {
        fontWeight: 'bold',
    },
    shareButton: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        marginBottom: height * 0.02,
    },
    shareButtonText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        color: '#E53E3E',
    },
});

export default InformationScreen;
