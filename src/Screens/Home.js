import React, { useEffect, memo } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from '../redux/actions';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.homeData);
    const navigation = useNavigation()

    useEffect(() => {
      dispatch(fetchHomeData());
    }, [dispatch]);
   
    if (loading) return <ActivityIndicator size="large" testID="activity-indicator"/>;

    if (error) return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Button title="Retry" onPress={() => dispatch(fetchHomeData())} testID="retry-button"/>
      </View>
    );
  
    if (!data?.length) return <Text style={styles.emptyText} testID="empty-state">No movies available</Text>;
  

    const renderItem = ({item}) => {
      return <MovieItem movie={item} />;
    };

    const handleClickItem = (movie) => {
      navigation.navigate('Details', { movie });
    }
 
    const MovieItem = memo(({ movie }) => (
      <TouchableOpacity style={styles.movieItem} onPress={() => handleClickItem(movie)} testID={`movie-item-${movie.id}`}>
          <Image 
            source={{ uri: movie.banner_image }} 
            style={styles.movieImage}
            resizeMode="cover"/>
      </TouchableOpacity>
    ));

    const MovieList = ({ title, movies }) => (
      <View style={styles.section}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <FlatList
              horizontal
              data={movies}
              renderItem = {renderItem}
              keyExtractor={(item) => item.id.toString()}
              initialNumToRender={movies.length}
              extraData={movies}
              showsHorizontalScrollIndicator={false}
              maxToRenderPerBatch={5}
              removeClippedSubviews={true}
              contentContainerStyle={styles.gridContainer}/>
      </View>
    );

    return(
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.containerInner}>
                {data.map((movies) => (
                    <MovieList key={movies.id} title={movies.title} movies={movies.movies} />
                ))}
            </ScrollView>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    containerInner: {
        flex: 1,
        backgroundColor: '#000',
      },
      heroBanner: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
      },
      section: {
        marginBottom: 20,
      },
      sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
      },
      movieItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      },
      movieImage: {
        width: 240,
        height: 140,
        borderRadius: 10,
        marginTop:4,
        marginBottom:12,
        marginRight:18,
      },
      gridContainer: {
        padding: 10,
      },
      errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
      errorText: { color: 'red', marginBottom: 10 },
      emptyText: { textAlign: 'center', marginTop: 20, fontSize: 16 },
  });