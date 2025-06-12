
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native';
import SplitCalculator from './components/SplitCalculator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/caio.png')} style={styles.caioImage} />
        <Image source={require('./assets/dinheiro.png')} style={styles.dinheiroImage} />
      </View>
      <Text style={styles.title}>DivApp</Text>
      <Text style={styles.subtitle}>Pra você que tem um amigo igual o Caio Castro!</Text>
      <SplitCalculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    paddingTop: 50,
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caioImage: {
    width: 150,
    height: 150,
    borderRadius: 65,
    resizeMode: 'cover',
  },
  dinheiroImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  subtitle:{
    fontSize: 16,
    fontWeight: 'normal',
    color: '#008000',
    marginBottom: 20,

  }
});
