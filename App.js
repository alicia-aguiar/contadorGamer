//Importação para o menu lateral funcionar
import 'react-native-gesture-handler';

//Importar o container da navegação
// ele controla todas as telas do aap
import { NavigationContainer } from '@react-navigation/native';

//Importar o menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

//Importar as telas 
import Jogador1 from './componentes/Jogador1';

//Cria o Drawer
const Drawer = createDrawerNavigator();

//Componente principal do APP
export default function APP() {
  // o que esta dentro do return aparece na tela
  return (
    // container principal da navegação
    <NavigationContainer>
      {/* menu lateral */}
      <Drawer.Navigator>
        {/*tela do Jogador1 */}
        <Drawer.Screen
          //nome que aparece no menu
          name="1 Jogador"
          //componente que será aberto
          component={Jogador1}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}