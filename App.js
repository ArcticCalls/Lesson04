/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import moment from 'moment-timezone';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Welcome = () => {
  return <Text>Welcome to C308 Web Frameworks!</Text>;
};

class MyFirstApp extends React.Component {
  render(): React$Node {
    return <Text>My first React Native App</Text>;
  }
}

const SemModule = (props) => {
  return (
    <Text>
      {props.day} - {props.code}
    </Text>
  );
};

class Eats extends React.Component {
  render(): React$Node {
    return (
      <Text>
        {this.props.name}
        {'\n'}
        {this.props.loc}
        {'\n'}
      </Text>
    );
  }
}

const WorldClock =(props) =>{
  var currdate = moment();



}

class Clock extends React.Component {
  render(): React$Node {
    return (

    );

  }
}

const App: () => React$Node = () => {
  console.log('Listing semester modules and recommended eats');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome />
              <MyFirstApp />
              <Text>{'\n'} my modules this semester:</Text>
              <SemModule day={'Monday'} code={'C348'} />
              <SemModule day={'Tuesday'} code={'C273'} />
              <SemModule day={'Friday'} code={'C308'} />
              <Text>{'\n'}Recommended Eats@RP</Text>
              <Eats
                name={'Sweet Tooth Waffles'}
                loc={'W6 level 1, E-canteen'}
              />
              <Eats name={'Crowded Bowl'} loc={'W4/W6 Lawn Canteen'}/>
              <Eats name={'Western Cuisine @Koufu'} loc={'E1 level 1, Koufu'}/>
              <Eats name={'Ayam Penyet'} loc={'W4/W6 Lawn Canteen'}/>
              <Text>{'\n'}World Clock</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
