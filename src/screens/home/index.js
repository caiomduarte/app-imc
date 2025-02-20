//1 passo - importar o react
import React from "react";

//2 passo - importar os componentes da tela
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';

//3 passo - criar a função que cria a tela
export default function Home() {
  return (
    <SafeAreaView>
      <Image
        style={estilos.logo}
        source={require('../../assets/etec.png')}
      />
      <Text style={estilos.titulo}>Calculo IMC</Text>

      <TextInput

        placeholder='Peso (kg)'

      />

      <TextInput

        placeholder='Altura (cm)'
      />

      <TouchableOpacity>
        <Text>Calcular</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5900A1',
    fontColor: '#2313B3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {

    width: 140,
    height: 140,
    resizeMode: 'stretch',
    marginBottom: 10
  },

  titulo: {
    fontSize: 35,
    color: '#FFF',
    fontWeight: 'bold',

  },

  subTitulo: {
    marginTop: 10,
    fontSize: 25,
    color: '#FFF',


  },

  campo: {
    backgroundColor: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    borderRadius: 10
  },

  botao: {
    backgroundColor: '#2F0055',
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
    borderRadius: 7,
    width: 230
  },

  botaoTexto: {
    color: '#B484DC',
    fontSize: 17,
    fontWeight: '700'
  }
}
);
