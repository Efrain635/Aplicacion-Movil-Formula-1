import { ScrollView, StyleSheet, Text, View }  from 'react-native';
import Formula1 from './Componentes/Formula1';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galeria de Formula 1</Text>
      <ScrollView>
      <Formula1 
        nombre='EL RedBull'
        imagen={require('./IMAGENES/RedBull.jpg')}
      ></Formula1>

      <Formula1 
        nombre='Ferrari'
        imagen={require('./IMAGENES/Ferrari.jpg')}
      ></Formula1>

      <Formula1 
        nombre='AlphaTauri'
        imagen={require('./IMAGENES/AlphaTauri.jpg')}
      ></Formula1>

<Formula1 
        nombre='AMG-Petronas'
        imagen={require('./IMAGENES/AMG-Petronas.jpg')}
      ></Formula1>

<Formula1 
        nombre='Aston Martin'
        imagen={require('./IMAGENES/Aston Martin.jpg')}
      ></Formula1>

<Formula1 
        nombre='Colapinto'
        imagen={require('./IMAGENES/Colapinto.jpg')}
      ></Formula1>

<Formula1 
        nombre='Haas'
        imagen={require('./IMAGENES/Haas.jpg')}
      ></Formula1>

<Formula1 
        nombre='Sauber'
        imagen={require('./IMAGENES/Sauber.jpg')}
      ></Formula1>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {
    fontSize: 25,
    fontWeight: 'bold',
  },

});
