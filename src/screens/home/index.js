//1 passo - importar o react
import React, { use, useState } from "react";

//2 passo - importar os componentes da tela
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native';

//3 passo - criar a função que cria a tela
export default function Home() {

  //Declarando os states para armazenar os valores
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [imc, setImc] = useState();

  //Criando a função para Calcular
  function CalcularImc() {
    try {
      const imcUsuario = peso / (altura * altura);

         // Verifica se o resultado é um número válido
    if (isNaN(imcUsuario)) {
      Alert.alert("Erro ao calcular o IMC. Verifique os valores informados.");
      return;
    }

      if (!peso || !altura || isNaN(peso) || isNaN(altura)) {
        Alert.alert("Por favor, insira valores válidos para peso e altura.");
        return;
      }
  
      // Previne divisão por zero
      if (altura === 0) {
        Alert.alert("Altura não pode ser zero.");
        return;
      }
  



      if(imcUsuario <= 18.5){
        Alert.alert("Abaixo do Peso")
      }

      else if(imcUsuario >=18.6 && imcUsuario <=24.9){
        Alert.alert("Peso ideal")
      }

      else if(imcUsuario >=25 && imcUsuario <=29.9){
        Alert.alert("Levemente acima do peso")
      }

      else if(imcUsuario >=30 && imcUsuario <=34.9){
        Alert.alert("Obesidade grau 1")
      }

      else if(imcUsuario >=35 && imcUsuario <=39.9){
        Alert.alert("Obesidade grau 2")
      }

      else if(imcUsuario >=40){
        Alert.alert("Obesidade grau 3")
      }

      setImc(imcUsuario.toFixed(2))


    } catch (error) {
      Alert.alert("Desculpe, aconteceu o erro: " + error)
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/etec.png')}
      />
      <Text style={styles.titulo}>Calculo IMC</Text>

      <TextInput
        onChangeText={setPeso}
        style={styles.campo}
        placeholder='Peso (kg)'
        keyboardType='numeric'
      />

      <TextInput
        onChangeText={setAltura}
        style={styles.campo}
        placeholder='Altura (cm)'
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.botao} onPress={CalcularImc}>
        <Text style={styles.botaoTexto}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.subTitulo}>IMC: {imc}</Text>

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
