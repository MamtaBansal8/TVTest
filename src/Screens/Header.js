import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import AntDesign from '@react-native-vector-icons/ant-design';
import EvilIcons from '@react-native-vector-icons/evil-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation()

  const goToHome = () => {
    navigation.navigate('Home')
  }

  return (
        <View style={styles.headerContent}>
          <View style={styles.leftSection}>
            <Text style={styles.logo}>prime video</Text>
            <View style={styles.navLinks}>
              <TouchableOpacity style={styles.navItem} onPress={goToHome}>
                <Text style={styles.navText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Movies</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>TV shows</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Live TV</Text>
              </TouchableOpacity>
              <Feather name="grid" color="#ffffff" size={20} style={{marginRight:7}}/>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Subscriptions</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.rightSection}>
            <TouchableOpacity style={styles.iconButton}>
                <Feather name="search" color="#ffffff" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <AntDesign name="down" color="#ffffff" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="menu" color="#ffffff" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <EvilIcons name="user" color="#ffffff" size={38} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => {}} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Join Prime</Text>
          </TouchableOpacity>
          </View>
        </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  headerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: Platform.OS === 'web' ? 80 : 100,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:8,
    marginHorizontal:16,
    backgroundColor: '#1D1D1D',
    borderRadius: 10,
  },
  leftSection: {
    marginLeft:8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 24,
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginRight: 15,
  },
  navText: {
    color: 'white',
    fontSize: 16,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 12,
    padding: 4,
    alignItems:"center"
  },
  buttonContainer: {
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor:"#0077B5",
    justifyContent: 'center',
    shadowColor: '#0077B5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});