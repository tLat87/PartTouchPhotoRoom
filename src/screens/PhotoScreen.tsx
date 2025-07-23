// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     SafeAreaView,
//     Dimensions,
//     Image,
//     Alert,
// } from 'react-native';
// import { useDispatch } from 'react-redux';
// import * as ImagePicker from 'react-native-image-picker';
// import {addPhoto} from "../redux/slices/photoSlice";
//
// const { width, height } = Dimensions.get('window');
//
// const PhotoScreen = ({ navigation }) => {
//     const [photoUri, setPhotoUri] = useState(null); // URI of the selected photo
//     const taskOptions = [
//         "Pretend you're TVs from the 2000s",
//         "Faces like you heard \"password changed successfully\" but it's not you",
//         "Show the expression of people who bought a course on \"how not to burn out at work\"",
//         "Stick your tongues out like schoolchildren on a break",
//         "You are two chairs who have seen everything",
//         "The smile of people who won Monopoly, but in a family",
//         "Look at each other like the last piece of pizza",
//         "Show faces like you just accidentally liked a photo from 2013",
//         "Pretend you were caught eating your sixth dumpling",
//         "You are the ones arguing with the navigator",
//         "Smile like two bananas that survived maturity",
//         "You just saw a 40% discount on sausage",
//         "The faces of people who tried wasabi \"just a little bit”",
//         "Look at the camera like an owl on a night shift",
//         "The look of people who were told “free shipping”",
//         "Stance like superheroes without a budget",
//         "You are two pillows who have gone through 9 lives",
//         "Emotion: “we are not us when we are hungry”",
//         "Show a level of trust - like when passing gum in class",
//         "You just won concert tickets... but to a band you don’t know",
//         "Face like people who heard “you have one chance”",
//         "Smile like those who saw themselves in the mirror after a party",
//         "You are two smartphones with a dead battery",
//         "Stand like a chair in the principal’s office",
//         "Facial expression: “The teacher said, ‘Stay after class’”",
//         "Stance like in a cheap 2008 music video",
//         "Smile like those who forgot to turn off the stove",
//         "You are the refrigerator and microwaves that are fighting",
//         "Faces of people trying broccoli for the first time",
//         "Become like a grandfather's antenna - looking for a signal",
//         "You are the ones who overslept their flight, but are happy",
//         "The look of \"well, it clicked on by itself\"",
//         "Show fear: you are on Zoom, and the camera accidentally turned on",
//         "A smile of the level: \"We were given a bonus at work - no money\"",
//         "Become like two kopecks at the cash register",
//         "The look as if you are seeing coffee for the first time in the morning",
//         "You are fans of \"Titanic\" who did not forgive the door",
//         "Faces of people who play poker badly",
//         "Become like socks that have lost their pair",
//         "Show a passion for borscht",
//         "You are a pen that stops writing on the exam",
//         "The expression: \"I thought you took a picture of me!\"",
//         "Smile like a kettle that's almost boiling",
//         "The \"We just have to ask\" look",
//         "You're the two sides of a pillow: hot and cold",
//         "Show the \"mom found out I was swearing\" look",
//         "The face of people listening to their voicemail and cringe",
//         "The smile of people who stole a spoon from a coffee shop",
//         "You're a mayonnaise commercial that's trying too hard",
//         "The \"I'm not me without coffee\" look",
//     ];
//
//     const [taskText, setTaskText] = useState('');
//
//     useEffect(() => {
//         // Select a random task from the options when the component mounts
//         const randomTask = taskOptions[Math.floor(Math.random() * taskOptions.length)];
//         setTaskText(randomTask);
//     }, []);
//
//     const dispatch = useDispatch();
//
//     // Function to launch the image library (photo selection)
//     const launchImageLibrary = () => {
//         const options = {
//             mediaType: 'photo',
//             quality: 0.8,
//             includeBase64: false,
//         };
//
//         ImagePicker.launchImageLibrary(options, (response) => {
//             // Check if the user canceled the selection or if there are errors.
//             // If more detailed error handling or cancellation is needed, it can be added back.
//             if (response.didCancel) {
//                 console.log('User canceled image selection from gallery'); // Translated
//             } else if (response.errorCode) {
//                 console.log('ImagePicker Error: ', response.errorCode, response.errorMessage); // Translated
//                 Alert.alert('Gallery Error', 'Failed to access the gallery.'); // Translated
//             } else if (response.assets && response.assets.length > 0) {
//                 const uri = response.assets[0].uri;
//                 setPhotoUri(uri);
//                 console.log('Photo selected from gallery:', uri); // Translated
//             }
//         });
//     };
//
//     const retakePicture = () => {
//         setPhotoUri(null); // Reset photo to return to initial state
//     };
//
//     const savePhoto = () => {
//         if (photoUri) {
//             const photoData = {
//                 id: Date.now().toString(), // Unique ID for the photo
//                 uri: photoUri,
//                 date: new Date().toLocaleDateString('en-US'), // Current date (changed to en-US for English format)
//                 task: taskText, // Current task
//             };
//             dispatch(addPhoto(photoData)); // Save photo to Redux
//             Alert.alert('Photo Saved!', 'Your photo has been successfully saved to the app gallery.'); // Translated
//             navigation.goBack(); // Return to the previous screen
//         } else {
//             Alert.alert('Error', 'No photo to save.'); // Translated
//         }
//     };
//
//     return (
//         <SafeAreaView style={styles.container}>
//             {/* Top bar with logo and task */}
//             <View style={styles.topBar}>
//                 <View style={styles.taskContainer}>
//                     {/* These logo bubble styles are commented out in the original, keeping them commented */}
//                     {/*<View style={styles.logoBubble}>*/}
//                     {/* <Text style={styles.logoPartBubble}>PART•</Text>*/}
//                     {/* <Text style={styles.logoTouchBubble}>TOUCH</Text>*/}
//                     {/* <Text style={styles.logoPhotoRoomBubble}>PhotoRoom</Text>*/}
//                     {/*</View>*/}
//                     <View style={styles.taskTextBubble}>
//                         <Text style={styles.taskTextTitle}>Task for you:</Text>
//                         <Text style={styles.taskTextContent}>{taskText}</Text>
//                     </View>
//                 </View>
//             </View>
//
//             {/* Area for photo display or "Select a photo" button */}
//             <View style={styles.photoDisplayArea}>
//                 {photoUri ? (
//                     <Image source={{ uri: photoUri }} style={styles.photoPreview} />
//                 ) : (
//                     <View style={styles.noPhotoContainer}>
//                         {/* Assuming tabler_camera-selfie.png is a static asset */}
//                         <Image source={require('../assets/img/tabler_camera-selfie.png')} />
//                     </View>
//                 )}
//             </View>
//
//             {/* Bottom bar with buttons */}
//             <View style={styles.bottomBar}>
//                 {photoUri ? (
//                     <>
//                         {/* Retake button now resets photoUri */}
//                         <TouchableOpacity style={styles.retakeButton} onPress={retakePicture}>
//                             <Text style={styles.continueButtonText}>×</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.continueButton} onPress={savePhoto}>
//                             <Text style={styles.continueButtonText}>Continue</Text>
//                         </TouchableOpacity>
//                     </>
//                 ) : (
//                     // Initial screen without photo, with "Select a photo" button
//                     <TouchableOpacity style={styles.launchCameraButton} onPress={launchImageLibrary}>
//                         <Text style={styles.launchCameraButtonText}>Select a photo</Text>
//                     </TouchableOpacity>
//                 )}
//             </View>
//         </SafeAreaView>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#E53E3E',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     topBar: {
//         width: '100%',
//         paddingHorizontal: width * 0.05,
//         paddingTop: height * 0.02,
//         alignItems: 'flex-start',
//     },
//     taskContainer: {
//         flexDirection: 'row',
//         alignItems: 'flex-start',
//         backgroundColor: '#FFF',
//         borderRadius: 20,
//         // padding: width * 0.02,
//         padding: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 8,
//     },
//     logoBubble: { // Not directly used in JSX
//         backgroundColor: '#E53E3E',
//         borderRadius: 15,
//         padding: width * 0.02,
//         alignItems: 'center',
//         marginRight: width * 0.02,
//     },
//     logoPartBubble: { // Not directly used in JSX
//         fontSize: width * 0.04,
//         fontWeight: 'bold',
//         color: '#FFF',
//     },
//     logoTouchBubble: { // Not directly used in JSX
//         fontSize: width * 0.04,
//         fontWeight: 'bold',
//         color: '#FFF',
//     },
//     logoPhotoRoomBubble: { // Not directly used in JSX
//         fontSize: width * 0.025,
//         color: '#FFF',
//         marginTop: -height * 0.005,
//     },
//     taskTextBubble: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     taskTextTitle: {
//         fontSize: width * 0.035,
//         fontFamily: 'Grandstander', // Assuming this font is loaded
//         color: '#000',
//         fontWeight: 'bold',
//     },
//     taskTextContent: {
//         fontSize: width * 0.045,
//         color: '#000',
//         fontFamily: 'Grandstander', // Assuming this font is loaded
//         fontWeight: 'bold',
//     },
//     photoDisplayArea: {
//         flex: 1,
//         width: '90%',
//         backgroundColor: '#fff', // White background for photo area
//         borderRadius: 20,
//         overflow: 'hidden',
//         marginTop: height * 0.03,
//         marginBottom: height * 0.03,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 8,
//         justifyContent: 'center', // Center D markers if no photo
//         alignItems: 'center',
//     },
//     noPhotoContainer: {
//         flex: 1,
//         width: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'relative', // For positioning D markers
//     },
//     photoPreview: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'cover',
//     },
//     dMarker: { // Not directly used in JSX
//         backgroundColor: '#00FF00', // Green color
//         borderRadius: 100,
//         width: width * 0.06,
//         height: width * 0.06,
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'absolute',
//     },
//     dText: { // Not directly used in JSX
//         color: '#FFF',
//         fontSize: width * 0.03,
//         fontWeight: 'bold',
//     },
//     bottomBar: {
//         width: '100%',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         paddingHorizontal: width * 0.05,
//         paddingBottom: height * 0.02,
//     },
//     launchCameraButton: { // Style name remained, but functionality changed
//         backgroundColor: '#FFF',
//         borderRadius: 30,
//         paddingVertical: height * 0.02,
//         paddingHorizontal: width * 0.1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 8,
//         flexDirection: 'row',
//     },
//     launchCameraButtonText: {
//         fontSize: width * 0.05,
//         fontWeight: 'bold',
//         fontFamily: 'Grandstander', // Assuming this font is loaded
//         color: '#000',
//         marginLeft: width * 0.02,
//     },
//     retakeButton: {
//         backgroundColor: '#FFF',
//         borderRadius: 100,
//         width: width * 0.15,
//         height: width * 0.15,
//         alignItems: 'center',
//         justifyContent: 'center',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 8,
//     },
//     continueButton: {
//         backgroundColor: '#FFF',
//         borderRadius: 30,
//         paddingVertical: height * 0.02,
//         paddingHorizontal: width * 0.15,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 8,
//     },
//     continueButtonText: {
//         fontSize: width * 0.05,
//         fontWeight: 'bold',
//         color: '#000',
//         fontFamily: 'Grandstander', // Assuming this font is loaded
//     },
// });
//
// export default PhotoScreen;

import React, { useState, useEffect, useCallback } from 'react'; // Added useCallback
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Image,
    Alert,
    Platform, // For platform-specific checks
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'react-native-image-picker';
import { addPhoto } from "../redux/slices/photoSlice";
// If you want to use icons, you might install react-native-vector-icons
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const PhotoScreen = ({ navigation }) => {
    const [photoUri, setPhotoUri] = useState<string | null>(null); // URI of the selected photo
    const taskOptions: string[] = [ // Explicitly type as string array
        "Pretend you're TVs from the 2000s",
        "Faces like you heard \"password changed successfully\" but it's not you",
        "Show the expression of people who bought a course on \"how not to burn out at work\"",
        "Stick your tongues out like schoolchildren on a break",
        "You are two chairs who have seen everything",
        "The smile of people who won Monopoly, but in a family",
        "Look at each other like the last piece of pizza",
        "Show faces like you just accidentally liked a photo from 2013",
        "Pretend you were caught eating your sixth dumpling",
        "You are the ones arguing with the navigator",
        "Smile like two bananas that survived maturity",
        "You just saw a 40% discount on sausage",
        "The faces of people who tried wasabi \"just a little bit”",
        "Look at the camera like an owl on a night shift",
        "The look of people who were told “free shipping”",
        "Stance like superheroes without a budget",
        "You are two pillows who have gone through 9 lives",
        "Emotion: “we are not us when we are hungry”",
        "Show a level of trust - like when passing gum in class",
        "You just won concert tickets... but to a band you don’t know",
        "Face like people who heard “you have one chance”",
        "Smile like those who saw themselves in the mirror after a party",
        "You are two smartphones with a dead battery",
        "Stand like a chair in the principal’s office",
        "Facial expression: “The teacher said, ‘Stay after class’”",
        "Stance like in a cheap 2008 music video",
        "Smile like those who forgot to turn off the stove",
        "You are the refrigerator and microwaves that are fighting",
        "Faces of people trying broccoli for the first time",
        "Become like a grandfather's antenna - looking for a signal",
        "You are the ones who overslept their flight, but are happy",
        "The look of \"well, it clicked on by itself\"",
        "Show fear: you are on Zoom, and the camera accidentally turned on",
        "A smile of the level: \"We were given a bonus at work - no money\"",
        "Become like two kopecks at the cash register",
        "The look as if you are seeing coffee for the first time in the morning",
        "You are fans of \"Titanic\" who did not forgive the door",
        "Faces of people who play poker badly",
        "Become like socks that have lost their pair",
        "Show a passion for borscht",
        "You are a pen that stops writing on the exam",
        "The expression: \"I thought you took a picture of me!\"",
        "Smile like a kettle that's almost boiling",
        "The \"We just have to ask\" look",
        "You're the two sides of a pillow: hot and cold",
        "Show the \"mom found out I was swearing\" look",
        "The face of people listening to their voicemail and cringe",
        "The smile of people who stole a spoon from a coffee shop",
        "You're a mayonnaise commercial that's trying too hard",
        "The \"I'm not me without coffee\" look",
    ];

    const [taskText, setTaskText] = useState<string>(''); // Explicitly type as string

    useEffect(() => {
        const randomTask = taskOptions[Math.floor(Math.random() * taskOptions.length)];
        setTaskText(randomTask);
    }, []);

    const dispatch = useDispatch();

    // Helper function to handle image picker responses
    const handleImagePickerResponse = useCallback((response: ImagePicker.ImagePickerResponse) => {
        if (response.didCancel) {
            console.log('User canceled image selection');
        } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorCode, response.errorMessage);
            Alert.alert('Error', `Failed to access: ${response.errorMessage}`);
        } else if (response.assets && response.assets.length > 0) {
            const uri = response.assets[0].uri;
            setPhotoUri(uri || null); // Ensure it's string or null
            console.log('Photo obtained:', uri);
        }
    }, []);

    // Function to launch the camera
    const launchCamera = useCallback(() => {
        const options: ImagePicker.CameraOptions = {
            mediaType: 'photo',
            quality: 0.8,
            saveToPhotos: true, // Saves the taken photo to the device's gallery
        };

        ImagePicker.launchCamera(options, handleImagePickerResponse);
    }, [handleImagePickerResponse]);

    // Function to launch the image library (photo selection)
    const launchImageLibrary = useCallback(() => {
        const options: ImagePicker.ImageLibraryOptions = {
            mediaType: 'photo',
            quality: 0.8,
            includeBase64: false,
        };

        ImagePicker.launchImageLibrary(options, handleImagePickerResponse);
    }, [handleImagePickerResponse]);


    const retakePicture = () => {
        setPhotoUri(null); // Reset photo to return to initial state
    };

    const savePhoto = () => {
        if (photoUri) {
            const photoData = {
                id: Date.now().toString(), // Unique ID for the photo
                uri: photoUri,
                date: new Date().toLocaleDateString('en-US'), // Current date (changed to en-US for English format)
                task: taskText, // Current task
            };
            dispatch(addPhoto(photoData)); // Save photo to Redux
            Alert.alert('Photo Saved!', 'Your photo has been successfully saved to the app gallery.'); // Translated
            navigation.goBack(); // Return to the previous screen
        } else {
            Alert.alert('Error', 'No photo to save.'); // Translated
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top bar with logo and task */}
            <View style={styles.topBar}>
                <View style={styles.taskContainer}>
                    <View style={styles.taskTextBubble}>
                        <Text style={styles.taskTextTitle}>Task for you:</Text>
                        <Text style={styles.taskTextContent}>{taskText}</Text>
                    </View>
                </View>
            </View>

            {/* Area for photo display or "Select a photo" button */}
            <View style={styles.photoDisplayArea}>
                {photoUri ? (
                    <Image source={{ uri: photoUri }} style={styles.photoPreview} />
                ) : (
                    <View style={styles.noPhotoContainer}>
                        {/* You might want to remove this static image if the buttons explain enough */}
                        {/* <Image source={require('../assets/img/tabler_camera-selfie.png')} /> */}
                        <Text style={styles.noPhotoText}>Take or Select a Photo!</Text>
                        {/* Optionally add an icon here from react-native-vector-icons */}
                        {/* <Icon name="camera-plus-outline" size={80} color="#666" /> */}
                    </View>
                )}
            </View>

            {/* Bottom bar with buttons */}
            <View style={styles.bottomBar}>
                {photoUri ? (
                    <>
                        <TouchableOpacity style={styles.retakeButton} onPress={retakePicture}>
                            <Text style={styles.retakeButtonText}>× Retake</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.continueButton} onPress={savePhoto}>
                            <Text style={styles.continueButtonText}>Save Photo</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <View style={styles.initialButtonsContainer}>
                        <TouchableOpacity style={styles.actionButton} onPress={launchCamera}>
                            <Image source={require('../assets/img/tabler_camera-selfie.png')} style={styles.buttonIcon} />
                            <Text style={styles.actionButtonText}>Take a Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton} onPress={launchImageLibrary}>
                            <Image source={require('../assets/img/tabler_camera-selfie.png')} style={styles.buttonIcon} />
                            <Text style={styles.actionButtonText}>Choose from Gallery</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E53E3E', // Main background color
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: Platform.OS === 'android' ? 20 : 0, // Adjust for Android SafeAreaView
    },
    topBar: {
        width: '100%',
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.02,
        alignItems: 'flex-start',
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 15, // Increased padding
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    taskTextBubble: {
        flex: 1,
        justifyContent: 'center',
    },
    taskTextTitle: {
        fontSize: width * 0.038, // Slightly larger
        fontFamily: 'Grandstander',
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 5, // Space between title and content
    },
    taskTextContent: {
        fontSize: width * 0.048, // Slightly larger
        color: '#000',
        fontFamily: 'Grandstander',
        fontWeight: 'bold',
    },
    photoDisplayArea: {
        flex: 1,
        width: '90%',
        backgroundColor: '#333', // Darker background for placeholder
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: height * 0.03,
        marginBottom: height * 0.03,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 }, // More pronounced shadow
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noPhotoContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444', // Darker placeholder
    },
    noPhotoText: {
        fontSize: width * 0.06,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    photoPreview: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bottomBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        paddingBottom: height * 0.03, // More bottom padding
    },
    initialButtonsContainer: {
        flexDirection: 'column', // Stack buttons vertically
        alignItems: 'center',
        width: '100%',
    },
    actionButton: { // Unified style for both "Take Photo" and "Choose from Gallery"
        backgroundColor: '#FFF',
        borderRadius: 30,
        paddingVertical: height * 0.018,
        paddingHorizontal: width * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        flexDirection: 'row',
        marginBottom: 15, // Space between buttons
        width: '80%', // Make buttons wider
    },
    actionButtonText: {
        fontSize: width * 0.045,
        fontWeight: 'bold',
        fontFamily: 'Grandstander',
        color: '#000',
        marginLeft: 10, // Space between icon and text
    },
    buttonIcon: {
        width: width * 0.07, // Adjust icon size
        height: width * 0.07,
        resizeMode: 'contain',
    },
    retakeButton: {
        backgroundColor: '#FFF',
        borderRadius: 25, // Slightly less round for a button feel
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        flex: 1, // Allow button to grow
        marginRight: 15, // Space between buttons
    },
    retakeButtonText: {
        fontSize: width * 0.045, // Smaller text
        fontWeight: 'bold',
        color: '#E53E3E', // Red color to indicate "discard"
        fontFamily: 'Grandstander',
    },
    continueButton: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        paddingVertical: height * 0.018,
        paddingHorizontal: width * 0.08,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        flex: 2, // Larger button
    },
    continueButtonText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'Grandstander',
    },
});

export default PhotoScreen;
