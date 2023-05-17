import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CitySelectListDropdown from './src/CitySelectListDropdown';

function SearchCityButton({ title }) {
  return (
    <View style={styles.parent}>
      <TouchableOpacity activeOpacity={0.95} style={styles.button}>
        <Text style={styles.text}>Let's Go!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./src/img/logo.png')}
      />
      <Text style={styles.searchCitiesText}>Get Started!</Text>
      <StatusBar style="auto" />
      <CitySelectListDropdown/>
      <SearchCityButton title="Let's Go!" />
      <Text style={styles.homepageBottomText}>The small business search engine.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD166',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 403,
    height: 219,
  },
  citySearchButton: {
    paddingTop: 20,
    width: 10
  },
  homepageBottomText: 
  {
    fontSize: 20,
    fontFamily: 'sans-serif',
    color: '#3A5067',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  searchCitiesText: 
  {
    fontSize: 30,
    fontFamily: 'Arial',
    color: '#3A5067',
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  parent: {
    width: 300,
    height: 200
  },
  button: {
    flexDirection: 'row', 
    height: 50, 
    backgroundColor: '#3A5067',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation:3,
    borderRadius: 10
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});
