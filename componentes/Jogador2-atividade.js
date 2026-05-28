// importa o React e o useState
// useState serve para criar valores que podem mudar na tela
import  React, {useState} from "react";
//importa compónentes nativos de react native
import {View, // caixa / área da tela
  Text, // textos
  Button, // botão
  StyleSheet, // estilos
  TouchableOpacity,
   TextInput // botão custumizável
} from "react-native-web";

// componente principal APP
export default function Jogador2(){
  // cria um estado chamado (variável php) chamada "pontos"
  // pontos = valor atual
  // setPontos = função para alterar o valor
  // 0 = valor inicial
  const [pontos, setPontos] = useState(0);

  // função para aumentar 1 ponto
  function aumentar(){
    // pega o valor auto e soma +1
    setPontos (pontos+1);
  }

  // função para diminuir 1 ponto
  function diminuir(){
    // pega o valor atual e subtrai -1

    setPontos (pontos-1);
 if (pontos-1 < 0){
        setPontos (0);
    }
  }
  
  // função para resetar o contador
  function resetar (){
    // volta o valor para 
    setPontos (0);
  }

  // tudo que esta no RETURN aparece na tela
  return(
    // View principal do APP
    <View style={styles.container}>
      {/* Título do APP */}
      <Text style={styles.titulo}>
        🎮 Contador Gamer 🎮
      </Text>
      {/* Mostra o valor dos pontos */}
      <Text style={styles.pontos}>{pontos}</Text>

      <View>
        <TextInput style={styles.nome} placeholder="  Escreva seu nome: 💻"
        />
      </View>
      {/* Área dos botões +1 e -1 */}
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={aumentar} style={styles.botao}>
        <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={diminuir} style={styles.botao}>
        <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>
      </View>
       <TouchableOpacity onPress={resetar} style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Resetar</Text>
        </TouchableOpacity>
    </View>
    
  );
}

// ÁREA DE ESTILOS DO APP
const styles = StyleSheet.create({
  // estilo da tela principal
  container: {
    // ocupa a tela toda
    flex: 1,
    // cor de fundo
    backgroundColor: '#121212',
    // centraliza horizontalmente
    alignItems: 'center',
    // centraliza verticalmente
    justifyContent: 'center',
    // espaçamento interno
    padding: 20,
  },

  // ESTILO DO TÍTULO
  titulo: {
    // tamanho da fonte
    fontSize: 32,
    // cor do texto
    color: '#ffffffff',
    // texto em negrito
    fontWeight: 'bold',
    // espaço abaixo
    marginBottom: 30,
  },

  // ESTILO DOS PONTOS
  pontos: {
    // tamanho gigante
    fontSize: 80,
    // cor branca
    color: '#ffffff',
    // espaço abaixo
    marginBottom: 40,
    // negrito
    fontWeight: 'bold',
  },

  // ÁREA DOS BOTÕES
  areaBotoes: {
    // deixa um botão ao lado do outro
    flexDirection: 'row',
    // espaço abaixo
    marginBottom: 20,
  },

  // ESTILO DOS BOTÕES +1 E -1
  botao: {
    // cor do botão
    backgroundColor: '#ec7effff',
    // espaçamento vertical
    paddingVertical: 15,
    // espaçamento horizontal
    paddingHorizontal: 30,
    // arredonda as pontas
    borderRadius: 12,
    // espaçamento entre botões
    marginHorizontal: 10,
  },

  // ESTILO DO BOTÃO RESETAR
  botaoReset: {
    // cor vermelha
    backgroundColor: '#89f7ffff',
    // espaçamento vertical
    paddingVertical: 15,
    // espaçamento horizontal
    paddingHorizontal: 40,
    // bordas arredondadas
    borderRadius: 12,
  },

  // ESTILO DO TEXTO DOS BOTÕES
  textoBotao: {
    // tamanho da letra
    fontSize: 22,
    // cor do texto
    color: '#ffffffff',
    // negrito
    fontWeight: 'bold',
  },

  nome: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: '#b7aeaeff',
    borderRadius: 5,
  }
});


