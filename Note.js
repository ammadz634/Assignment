import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  CheckBox,
  } from 'react-native';

export default class Note extends React.Component {

  render() {
    return (
     
        <View key={this.props.keyval} style={styles.note}>
        <CheckBox style={styles.chechBox}></CheckBox>
          <Text style={styles.noteText}>{this.props.val.date}</Text>
          <Text style={styles.noteText}>{this.props.val.note}</Text>

          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>-</Text>
          </TouchableOpacity>

        </View>
    
    );
  }
 }

const styles = StyleSheet.create({
    note: {
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
    },
    noteText: {
      paddingLeft: 20,
      borderStyle: 'dotted',
      borderLeftWidth: 4,
      borderLeftColor: '#b7c2c6',
      position: 'relative',
      overflow: 'hidden',
    },
    noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      borderRadius: 50,
      backgroundColor: '#c10f2a',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10,
    },
    noteDeleteText: {
      color: 'white',
      fontSize: 27,
    },
    chechBox: {
      paddingLeft: 20,
    }
});
