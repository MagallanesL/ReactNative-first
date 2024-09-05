import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';


const fondo = require('./assets/parque-nacional-lago.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={{uri: "https://wallpaperaccess.com/full/654935.jpg"}} style={{width:215, height:294}}/>
      <Text style={{color: 'white'}}>Esto es React Native</Text>
      <Text style={{color: 'white'}}>hola texto 2</Text>
      <Text style={{color: 'white'}}>hola texto 3</Text>
      <Button title='pulsa aqui'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
