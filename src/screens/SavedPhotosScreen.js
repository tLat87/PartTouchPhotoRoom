import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    FlatList,
    Image,
    Alert,
} from 'react-native';
import Share from 'react-native-share';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');

const SavedPhotosScreen = ({ navigation }) => {
    const savedPhotos = useSelector(state => state.photos.photos);

    const handleShare = async (item) => {
        try {
            const shareOptions = {
                title: 'Share Photo',
                url: item.uri,
                message: `Task: ${item.task}\nDate: ${item.date}`,
            };
            await Share.open(shareOptions);
        } catch (error) {
            // Check if the error is due to user dismissing the share sheet
            if (error && error.message !== 'User did not share') {
                Alert.alert('Error', 'Could not share the photo.'); // Translated alert message
            }
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.photoCard}>
            <Text style={styles.cardDate}>Date: {item.date}</Text>
            <Text style={styles.cardTask}>Task:</Text>
            <Text style={styles.cardTaskContent}>{item.task}</Text>
            <View style={styles.cardContent}>
                <TouchableOpacity
                    style={styles.openFullButton}
                    onPress={() => navigation.navigate('FullPhotoScreen', { photo: item })}
                >
                    <Text style={styles.openFullButtonText}>Open Full</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.shareButton}
                    onPress={() => handleShare(item)}
                >
                    <Text style={styles.openFullButtonText}>Share</Text>
                </TouchableOpacity>
                <Image source={{ uri: item.uri }} style={styles.cardImage} />
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonArrow}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.savedPhotosButton}>
                    <Text style={styles.savedPhotosButtonText}>Saved Photos</Text>
                </TouchableOpacity>
            </View>

            {savedPhotos.length === 0 ? (
                <View style={styles.noPostsContainer}>
                    <Text style={styles.noPostsText}>No posts yet. Take a picture and check again.</Text> {/* Translated message */}
                </View>
            ) : (
                <FlatList
                    data={savedPhotos}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.flatListContent}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E53E3E', // Red background
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    noPostsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noPostsText: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        lineHeight: height * 0.04,
    },
    flatListContent: {
        paddingHorizontal: width * 0.05,
        paddingBottom: height * 0.02,
    },
    photoCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: width * 0.04,
        marginBottom: height * 0.02,
        width: width * 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    cardDate: {
        fontSize: width * 0.04,
        fontWeight: 'bold',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        color: '#E53E3E',
        marginBottom: height * 0.01,
    },
    cardTask: {
        fontSize: width * 0.035,
        fontFamily: 'Grandstander', // Assuming this font is loaded
        color: '#E53E3E',
    },
    cardTaskContent: {
        fontSize: width * 0.045,
        fontWeight: 'bold',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        color: '#E53E3E',
        marginBottom: height * 0.015,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
    },
    openFullButton: {
        backgroundColor: '#E53E3E',
        borderRadius: 20,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.04,
        marginRight: width * 0.02,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    shareButton: {
        backgroundColor: '#E53E3E',
        borderRadius: 20,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.04,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    openFullButtonText: {
        fontSize: width * 0.04,
        fontWeight: 'bold',
        fontFamily: 'Grandstander', // Assuming this font is loaded
        color: '#FFF',
    },
    cardImage: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: 15,
        resizeMode: 'cover',
    },
});

export default SavedPhotosScreen;
