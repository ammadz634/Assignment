import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  
  } from 'react-native';

  import Note from './Note';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }

  render() {

      let notes = this.state.noteArray.map((val, key) => {
          return <Note key={key} keyval={key} val={val}
          deleteMethod={ ()=> this.deleteNote(key) } />
      });

    return (
          <KeyboardAvoidingView behavior='padding' style={styles.container}>

           <View style={styles.header}>
            <Text style={styles.headerText}>Note Writer</Text>
          </View>

          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>
          <View style={styles.footer}>

            <TextInput
              style={styles.textInput}
              onChangeText={(noteText) => this.setState({noteText})}
              value={this.state.noteText}
              placeholder='add your list here..'
              placeholderTextColor='grey'
              underlineColorAndroid='transparent'>
            </TextInput>

            </View>  

            <TouchableOpacity onPress={ this.addNote.bind(this)} style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
    );
  }
    addNote() {
      if(this.state.noteText){
        var dt = new Date();
        this.state.noteArray.push({
          'date':dt.getFullYear() +
          "/" + (dt.getMonth() + 1) +
          "/" + dt.getDate(),
          'note': this.state.noteText
        });
        this.setState({ noteArray: this.state.noteArray })
        this.setState({ noteText: ''});
      }
    }
    deleteNote(key) {
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray })
    }
 }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
      header: {
        backgroundColor: '#5345e8',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
      },
      headerText: {
        color: 'white',
        fontSize: 20,
        padding: 28,
      },
      scrollContainer: {
        flex: 1,
        marginBottom: 100,
      },
      footer: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      },
      textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
      },
      addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#5345e8',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
      },
      addButtonText: {
        color: '#fff',
        fontSize: 24,
      }
});
