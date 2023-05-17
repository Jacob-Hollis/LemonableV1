import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CitySelectListDropdown from './src/CitySelectListDropdown';

function SearchCityButton({ title }) {
  return (
    <View>
      <Button title={title} color="#587D71" />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Get Started!</Text>
      <StatusBar style="auto" />
      <CitySelectListDropdown/>
      <SearchCityButton title="Let's Go!" />
      <Text>Lemonable is the best way to find small businesses near you.</Text>
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
});
