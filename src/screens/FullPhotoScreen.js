import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Image,
    Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {deletePhoto} from "../redux/slices/photoSlice"; // Ensure the path to Redux slice is correct

const { width, height } = Dimensions.get('window');

const FullPhotoScreen = ({ route, navigation }) => {
    // Getting photo data from navigation parameters
    const { photo } = route.params;

    const dispatch = useDispatch();

    const handleDelete = () => {
        Alert.alert(
            'Delete Photo?', // Translated from 'Видалити фото?'
            'Are you sure you want to delete this photo?', // Translated from 'Ви впевнені, що хочете видалити це фото?'
            [
                {
                    text: 'Cancel', // Translated from 'Скасувати'
                    style: 'cancel',
                },
                {
                    text: 'Delete', // Translated from 'Видалити'
                    onPress: () => {
                        dispatch(deletePhoto(photo.id)); // Deleting photo from Redux by its ID
                        navigation.goBack(); // Returning to the previous screen after deletion
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: true }
        );
    };

    const handleShare = () => {
        // Logic for sharing the photo will go here
        // You would need to use libraries like 'react-native-share' or 'expo-sharing' for this.
        Alert.alert('Share Photo', 'Photo sharing functionality will be implemented here.'); // Translated alerts
        console.log('Share photo:', photo.uri);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top panel */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonArrow}>←</Text>
                </TouchableOpacity>
                <View style={styles.savedPhotosButton}>
                    <Text style={styles.savedPhotosButtonText}>SAVED PHOTOS</Text> {/* Translated text */}
                </View>
            </View>

            {/* Photo card with information */}
            <View style={styles.photoCard}>
                <Text style={styles.cardDate}>{photo.date}</Text>
                <View style={styles.cardHeaderContent}>
                    {/* Assuming Logo.png is a static asset and needs to be kept as is */}
                    <Image style={{width: 100, height: 100, borderRadius: 10,marginRight: 10}} resizeMode='stretch' source={require('../assets/img/Logo.png')} />
                    {/* Hardcoded text translated */}
                    <Text style={styles.cardTaskContent}>Those who keep the instructions from the kettle</Text>
                </View>
                <Image source={{ uri: photo.uri }} style={styles.cardImage} />
            </View>

            {/* Bottom panel with SHARE and DELETE buttons */}
            <View style={styles.bottomBar}>
                {/* SHARE button is commented out in your original code, keeping it that way */}
                {/*<TouchableOpacity style={styles.shareButton} onPress={handleShare}>*/}
                {/* <Text style={styles.buttonText}>SHARE</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.buttonText}>DELETE</Text> {/* Translated text */}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E53E3E', // Red background
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
    savedPhotosButton: {
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
    savedPhotosButtonText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#E53E3E',
    },
    photoCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: width * 0.04,
        width: width * 0.9,
        flex: 1, // Allows the card to take up most of the space
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        marginBottom: height * 0.03, // Margin to bottom buttons
    },
    cardDate: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#E53E3E',
        marginBottom: height * 0.015,
        alignSelf: 'flex-start', // Align to left
    },
    cardHeaderContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: height * 0.02,
    },
    // logoBubble styles are commented out as the Image component is used directly
    // logoBubble: {
    //     backgroundColor: '#E53E3E',
    //     borderRadius: 15,
    //     padding: width * 0.02,
    //     alignItems: 'center',
    //     marginRight: width * 0.03,
    // },
    // logoPartBubble: {
    //     fontSize: width * 0.04,
    //     fontWeight: 'bold',
    //     color: '#FFF',
    // },
    // logoTouchBubble: {
    //     fontSize: width * 0.04,
    //     fontWeight: 'bold',
    //     color: '#FFF',
    // },
    // logoPhotoRoomBubble: {
    //     fontSize: width * 0.025,
    //     color: '#FFF',
    //     marginTop: -height * 0.005,
    // },
    cardTaskContent: {
        flex: 1, // Allows text to take up remaining space
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        lineHeight: height * 0.03,
    },
    cardImage: {
        width: '100%',
        height: undefined, // Automatic height
        aspectRatio: 1, // 1:1 aspect ratio (square)
        borderRadius: 15,
        resizeMode: 'cover',
        marginBottom: height * 0.02,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginBottom: height * 0.02,
    },
    shareButton: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        flex: 1, // Buttons take equal space
        marginRight: width * 0.02, // Margin between buttons
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        flex: 1, // Buttons take equal space
        marginLeft: width * 0.02, // Margin between buttons
        alignItems: 'center',
    },
    buttonText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        color: '#E53E3E',
    },
});

export default FullPhotoScreen;
