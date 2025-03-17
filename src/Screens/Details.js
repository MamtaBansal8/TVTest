import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Header from './Header';
import AntDesign from '@react-native-vector-icons/ant-design';
import Feather from '@react-native-vector-icons/feather';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const Details = ({ route }) => {
    const { movie } = route.params;
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.containerInner}>
                <WebView
                    allowsFullscreenVideo={true} 
                    javaScriptEnabled={true} 
                    domStorageEnabled={true} 
                    mediaPlaybackRequiresUserAction={false} 
                    source={{uri:movie.video_link+'?autoplay=1&mute=1&loop=1&rel=0&fs=0&iv_load_policy=3&controls=0&modestbranding=1&playsinline=1'}}
                    style={styles.videoBackground}/>
                <View style = {styles.overlay}>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.description}>{movie.description}</Text>
                        <Text style={styles.sectionTitle}>Cast & Crew</Text>
                        <Text style={styles.cast}>{movie.cast.join(', ')}</Text>
                        <Text style={styles.meta}>{`IMDb ${movie.imdb_score}     ${movie.year}    ${movie.rating}`}</Text>
                        <Text style={styles.categoryTitle}>{movie.genre}</Text>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.button}>
                                <Feather name="video" color="#ffffff" size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <AntDesign name="download" color="#ffffff" size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Feather name="share-2" color="#ffffff" size={20}/>
                            </TouchableOpacity> 
                            <TouchableOpacity style={styles.button}>
                                <Feather name="thumbs-up" color="#ffffff" size={20}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Feather name="thumbs-down" color="#ffffff" size={20}/>
                            </TouchableOpacity>
                        </View>   
                    </View>    
                </View>
            </ScrollView>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    containerInner: {
        flex: 1,
        backgroundColor: '#000',
    },
    videoBackground: {
        flex:1,
        width: width,
        height: height,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'left',
        alignItems: 'left',
    },
    poster: {
        width: '100%',
        height: 400,
        resizeMode: 'cover'
    },
    detailsContainer: {
        marginTop:60,
        padding: 16,
        width: width * 0.5,
    },
    title: {
        color: 'white',
        fontSize: 28, 
        fontWeight: 'bold'
    },
    meta: { 
        color: 'white', 
        marginTop: 8 
    },
    categoryTitle: { 
        color: 'white', 
        marginTop: 8,
        fontWeight:'bold'
    },
    buttonRow: { 
        flexDirection: 'row', 
        marginVertical: 20, 
        gap: 16 
    },
    button: { 
        width: 46,
        height: 46,
        borderRadius: 23, 
        backgroundColor: '#A0A0A0',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonText: { 
        color: 'white', 
        fontSize: 18 
    },
    description: { 
        color: 'white', 
        marginVertical: 12, 
        lineHeight: 22 
    },
    sectionTitle: { 
        color: 'white', 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginTop: 12 
    },
    ratingTitle: { 
        color: 'white', 
        fontSize: 14, 
        fontWeight: 'bold', 
        marginVertical: 12 
    },
    cast: { 
        color: 'white' 
    },
    similarItem: { 
        marginRight: 18 
    },
    similarImage: { 
        width: 220, 
        height: 180, 
        borderRadius: 8 
    },
    similarTitle: { 
        color: 'white', 
        marginTop: 8, 
        width: 150 
    },
});
