//1 passo - importar o react
import React from "react";

//2 passo - importar os componentes da tela
import {Text, 
        SafeAreaView, 
        Image, 
        TouchableOpacity,
        TextInput,
        StyleSheet    
    } from 'react-native';

//3 passo - criar a função que cria a tela
export default function Home(){
  return(
    <SafeAreaView>
        <Text>Calculo IMC</Text>
    </SafeAreaView>
  );
}   
const styles = StyleSheet.create({

}
);
