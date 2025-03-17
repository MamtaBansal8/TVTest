import React, { useEffect } from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Header from './Header';
import {fetchData} from '../redux/actions'
import {useDispatch, useSelector } from 'react-redux';

const Splash = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error: {error}</Text>;

  const renderItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Image source={{ uri: item.thumbnail_image }} style={styles.movieImage} />
    </View>
  );

  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.halfScreen}>
            <Text style={styles.featuredTitle}>Welcome to Prime Video</Text>
            <Text style={styles.title2}>Join Prime to watch the latest movies, TV shows and award wining Amazon originals</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => {}} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Sign in to join Prime</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.halfScreen}>
          <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.gridContainer}/>
          </View>
        </View>
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  halfScreen: {
    flex: 0.5,
    justifyContent: 'left',
    alignItems: 'left',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 16,
    flexDirection:'row'
  },
  featuredTitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  title2: {
    marginTop:15,
    color: 'white',
    fontSize: 20,
  },
  buttonContainer: {
    marginTop:30,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor:"#ffffff",
    justifyContent: 'center',
    shadowColor: '#fffffff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '50%'
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
  },
  gridContainer: {
    padding: 10,
  },
  movieItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    margin:4
  },
});