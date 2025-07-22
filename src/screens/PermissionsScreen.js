import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Alert,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const PermissionsScreen = ({ navigation }) => {
    const [agreed, setAgreed] = useState(false); // State to track if the checkbox is checked

    const handleSave = () => {
        if (agreed) {
            console.log('Conditions accepted. Navigating to Home Screen.'); // Translated from 'Умови прийнято. Перехід до головного екрану.'
            navigation.navigate('HomeScreen');
        } else {
            Alert.alert(
                'Conditions Not Accepted', // Translated from 'Умови не прийнято'
                'Please accept the conditions to continue using the application.', // Translated from 'Будь ласка, прийміть умови, щоб продовжити користуватися додатком.'
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top panel */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    {/* Back arrow icon */}
                    <Text style={styles.backButtonArrow}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.accessButton}>
                    <Text style={styles.accessButtonText}>ACCESS</Text>
                </TouchableOpacity>
            </View>

            {/* Content Area */}
            <View style={styles.contentArea}>
                <Text style={styles.permissionTitle}>Gallery access:</Text>
                <Text style={styles.permissionDescription}>
                    We do not store or share your photos.{'\n'}All photos remain yours.
                </Text>

                <Text style={styles.permissionTitle}>Access to photos (gallery):</Text>
                <Text style={styles.permissionDescription}>
                    We don't have access to your other photos.{'\n'}Only the ones you take in the app are stored.
                </Text>

                <Text style={styles.permissionTitle}>We do not collect any personal data.</Text>
                <Text style={styles.permissionDescription}>
                    All content remains only on your device.{'\n'}None of your actions are tracked.
                </Text>
            </View>

            {/* Checkbox and save button */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setAgreed(!agreed)} // Toggling state on press
                >
                    <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
                        {agreed && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                    <Text style={styles.checkboxLabel}>
                        I have read and agree{'\n'}to provide access to{'\n'}the above.
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>SAVE</Text>
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
    },
    accessButton: {
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
    accessButtonText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#E53E3E',
        fontFamily: 'Grandstander', // Assuming this font is loaded
    },
    contentArea: {
        flex: 1, // Allows content to take up available space
        width: '85%',
        justifyContent: 'center', // Centers content vertically
        alignItems: 'flex-start', // Aligns text to the left
    },
    permissionTitle: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#FFF',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        textAlign: 'left',
        marginTop: height * 0.03,
    },
    permissionDescription: {
        fontSize: width * 0.04,
        fontFamily: 'Grandstander', // Assuming this font is loaded
        color: '#FFF',
        textAlign: 'left',
        marginTop: height * 0.005,
        lineHeight: height * 0.025,
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.03,
        width: '85%',
    },
    checkbox: {
        width: width * 0.09,
        height: width * 0.09,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * 0.04,
    },
    checkboxChecked: {
        backgroundColor: '#FFF',
    },
    checkmark: {
        fontSize: width * 0.06,
        color: '#E53E3E',
        fontWeight: 'bold',
    },
    checkboxLabel: {
        fontSize: width * 0.045,
        color: '#FFF',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        lineHeight: height * 0.03,
    },
    saveButton: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.25, // Increased button width
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    saveButtonText: {
        fontSize: width * 0.05,
        fontFamily: 'Grandstander', // Assuming this font is loaded
        fontWeight: 'bold',
        color: '#E53E3E',
    },
});

export default PermissionsScreen;
