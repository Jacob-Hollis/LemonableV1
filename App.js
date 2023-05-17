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
      <Text style={styles.homepageBottomText}>Find small businesses near you in 1..2..3</Text>
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
    width: 453,
    height: 269,
  },
  citySearchButton: {
    paddingTop: '20px',
    width: "10%"
  },
  homepageBottomText: 
  {
    fontSize: '2em',
    fontFamily: 'sans-serif',
    color: '#3A5067',
    fontWeight: 'bold'
  },
  searchCitiesText: 
  {
    fontSize: '1.6em',
    fontFamily: 'Arial',
    color: '#3A5067',
    paddingTop: '20px',
    paddingBottom: '10px',
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
    borderRadius: '10px'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});
