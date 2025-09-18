import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";
import { BaseNavigationContainer, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const receitas = [
  {
    id: "1",
    titulo: "Bolo de Cenoura",
    ingredientes: "Cenoura, ovos, óleo, açúcar, farinha, fermento",
    preparo: "Bata tudo no liquidificador, asse por 40 min.",
    imagem: require("./assets/delicioso-pedaco-de-bolo-no-prato.jpg"),
  },
  {
    id: "2",
    titulo: "Macarrão ao Alho e Óleo",
    ingredientes: "Macarrão, alho, óleo, sal",
    preparo: "Cozinhe o macarrão, refogue o alho no óleo e misture.",
    imagem: require("./assets/macarrao.jpg"),
  },
 {
  id: "3",
  titulo: "Spaghetti à Carbonara",
  ingredientes: "Spaghetti, pancetta ou bacon, ovos, queijo parmesão, alho, sal, pimenta",
  preparo: "Cozinhe o spaghetti al dente. Frite o bacon até ficar crocante. Bata ovos com queijo. Misture o spaghetti com o bacon e, fora do fogo, adicione ovos e queijo, mexendo até ficar cremoso. Sirva com mais parmesão e pimenta.",
  imagem: require("./assets/carbonara.jpg") 
}
];

function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState("");

  // Filtra receitas de acordo com o texto digitado
  const receitasFiltradas = receitas.filter((item) =>
    item.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍴 Novidades da semana</Text>

      {/* Barra de pesquisa */}
      <TextInput
        style={styles.input}
        placeholder="🔍 Buscar receita..."
        value={busca}
        onChangeText={setBusca}
      />

      {/* Lista de receitas */}
      <FlatList
        data={receitasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Receita", { receita: item })}
          >
            <Image
              source={item.imagem}
              style={{ width: 80, height: 80, borderRadius: 8 }}
            />
            <Text style={styles.cardText}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ReceitaScreen({ route }) {
  const { receita } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{receita.titulo}</Text>

      <Image
        source={receita.imagem}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
          marginBottom: 15,
        }}
        resizeMode="cover"
      />

      <Text style={styles.subtitle}>Ingredientes:</Text>
      <Text>{receita.ingredientes}</Text>
      <Text style={styles.subtitle}>Modo de Preparo:</Text>
      <Text>{receita.preparo}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="O que deseja cozinhar hoje?"
          component={HomeScreen}
        />
        <Stack.Screen name="Receita" component={ReceitaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { marginTop: 10, fontWeight: "bold" },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#F99138",
    borderRadius: 10,
  },
  cardText: { fontSize: 18, marginLeft: 10 },
});