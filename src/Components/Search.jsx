import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import {Avatar, Card, Badge, Searchbar} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default Search = ({navigation}) => {
  const [searchStr, setSearchStr] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <Searchbar
          placeholder="Search"
          style={styles.search}
          autoFocus={true}
          inputStyle={{
            padding: 0,
          }}
          icon={() => (
            <MaterialIcons
              name="keyboard-arrow-left"
              size={33}
              color="grey"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          )}
          onChangeText={e => setSearchStr(e)}
          value={searchStr}
        />
      </View>

      <View style={{marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 15,
            marginRight: 15,
          }}>
          <Text
            style={{
              color: '#212a35',
              fontFamily: 'SofiaSansSemiCondensed-Bold',
            }}>
            Recent
          </Text>
          <Text
            style={{
              color: '#212a35',
              fontFamily: 'SofiaSansSemiCondensed-Bold',
            }}>
            clear
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 65, padding: 3}}>
              <Image
                style={styles.megha}
                source={require('../Images/1.jpeg')}
              />

              <Text
                style={{
                  color: '#657582',
                  width: 70,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}
                numberOfLines={2}>
                Designer Join today
              </Text>
            </View>
            <View style={{height: 65, padding: 3}}>
              <Image
                style={styles.megha}
                source={require('../Images/1.jpeg')}
              />

              <Text
                style={{
                  color: '#657582',
                  width: 70,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}
                numberOfLines={2}>
                Designer Join today
              </Text>
            </View>
            <View style={{height: 65, padding: 3}}>
              <Image
                style={styles.megha}
                source={require('../Images/1.jpeg')}
              />

              <Text
                style={{
                  color: '#657582',
                  width: 70,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}
                numberOfLines={2}>
                Designer Join today
              </Text>
            </View>
            <View style={{height: 65, padding: 3}}>
              <Image
                style={styles.megha}
                source={require('../Images/1.jpeg')}
              />

              <Text
                style={{
                  color: '#657582',
                  width: 70,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}
                numberOfLines={2}>
                Designer Join today
              </Text>
            </View>
            <View style={{height: 65, padding: 3}}>
              <Image
                style={styles.megha}
                source={require('../Images/1.jpeg')}
              />

              <Text
                style={{
                  color: '#657582',
                  width: 70,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}
                numberOfLines={2}>
                Designer Join today
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Text
          style={{
            color: '#212a35',
            fontFamily: 'SofiaSansSemiCondensed-Bold',
          }}>
          Suggitions
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 36,
    backgroundColor: 'white',
  },
  megha: {
    width: 26,
    height: 26,

    borderRadius: 50,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 7,
    borderBottomWidth: 0.5,
    width: '100%',
  },
  search: {
    width: '100%',
    borderColor: 'none',

    height: 35,
    backgroundColor: '#ffffff',
    color: '#1a1b1b',
    elevation: 0,
  },
});
