import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";

export default function App() {

  // const personagens = [
  // [charlie, jean, kled],
  // [vocalista, baixista, guitarrista]
  // ];
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView horizontal={false}>
        <View style={[styles.body, { backgroundColor: "steelblue" }]}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Cometas de Odisseia
          </Text>
          <ScrollView horizontal={true}>
            <View style={styles.cont}>
              {/* Divisão  */}
              <View style={[styles.bodyH, { backgroundColor: "yellow" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/cometas/charles.jpg")}
                />
                <Text>Charlie</Text>
              </View>

              {/* Divisão */}
              <View style={[styles.bodyH, { backgroundColor: "cyan" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/cometas/jean.jpg")}
                />
                <Text>Jean</Text>
              </View>

              {/* Divisão */}
              <View style={[styles.bodyH, { backgroundColor: "red" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/cometas/kled.jpg")}
                />
                <Text>Kled</Text>
              </View>

              {/* Divisão */}
              <View style={[styles.bodyH, { backgroundColor: "white" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/cometas/saory.jpg")}
                />
                <Text>Saory</Text>
              </View>

              {/* Divisão */}
        
              
            </View>
          </ScrollView>
        </View>
        <View style={[styles.body, { backgroundColor: "crimson" }]}>
          <Text style={{color: 'white', textAlign: 'center'}}>Reis</Text>
          <ScrollView horizontal={true}>
            <View style={styles.cont}>
            <View style={[styles.bodyH, { backgroundColor: "white" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/reis/verissimo.jpeg")}
                />
                <Text>Veríssimo</Text>
              </View>

              {/* Divisão */}
              <View style={[styles.bodyH, { backgroundColor: "darkblue" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/reis/styles.jpg")}
                />
                <Text style={{color: 'white'}}>Styles</Text>
              </View>

              {/* Divisão */}
              <View style={[styles.bodyH, { backgroundColor: "red" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/reis/urgot.jpg")}
                />
                <Text>Urgot</Text>
              </View>

              {/* Divisão */}
              <View style={[styles.bodyH, { backgroundColor: "white" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/reis/amis.jpg")}
                />
                <Text>Amis</Text>
              </View>
{/* 
              <View
                style={[styles.bodyH, { backgroundColor: "crimson" }]}
              ></View>
              <View
                style={[styles.bodyH, { backgroundColor: "violet" }]}
              ></View>
              <View
                style={[styles.bodyH, { backgroundColor: "rebeccapurple" }]}
              ></View>
              <View
                style={[styles.bodyH, { backgroundColor: "steelblue" }]}
              ></View> */}
            </View>
          </ScrollView>
        </View>
        <View style={[styles.body, { backgroundColor: "blue" }]}>
          <Text style={{color: 'white', textAlign: 'center'}}>Caedis</Text>
          <ScrollView horizontal={true}>
            <View style={styles.cont}>
            <View style={[styles.bodyH, { backgroundColor: "white" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/caedis/klaus.jpg")}
                />
                <Text>Klaus</Text>
              </View>

              {/* Divisão */}
              <View style={[styles.bodyH, { backgroundColor: "darkblue" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/caedis/killa.jpg")}
                />
                <Text style={{color: 'white'}}>Killa</Text>
              </View>

              {/* Divisão */}
              <View style={[styles.bodyH, { backgroundColor: "red" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/caedis/paul.jpg")}
                />
                <Text>Paul</Text>
              </View>

              {/* Divisão */}
              <View style={[styles.bodyH, { backgroundColor: "white" }]}>
                <Image
                  style={styles.imagess}
                  source={require("./src/assets/images/caedis/ayla.jpg")}
                />
                <Text>Ayla</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contBody: {
    flex: 1,
  },

  header: {
    height: 80,
    backgroundColor: "black",
  },

  footer: {
    height: 80,
    backgroundColor: "black",
  },

  body: {
    height: 300,
    padding: 20,
    margin: 20,
  },

  bodyH: {
    height: 250,
    width: 250,
    padding: 20,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imagess: {
    width: 200,
    height: 200,
  },

  cont: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

/*


*/
