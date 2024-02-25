// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#867899',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
      width: 430,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container1: {
      marginTop: 50,
      top: 40,
      flex: 1,
      alignItems: 'center',
      color: "#FFF",
      fontSize: 30,
    },
    container2: {
      paddingLeft:40,
      color: "#FFF",
    },
    image: {
      fontStyle: 'oblique',
      width: 50,
      height: 50,
      resizeMode: 'contain', // veya 'cover' veya 'stretch' gibi değerler kullanabilirsiniz
    },
    input: {
      borderWidth: 3,
      borderColor: 'aqua',
      borderStyle: 'solid',
      padding:5,
      marginTop:10,
      marginBottom:20,
      color:'#fff'
    },
    malumot: {
      color: '#FFF8DC',
      fontSize:20,
      fontFamily: 'Serif(red serifs)',
      fontWeight: 'bold',
    },
    malumot1: {
        color: '#FFF8DC',
        fontSize:20,
        fontFamily: 'Serif(red serifs)',
        fontWeight: 'bold',
        alignItems: 'center',
      justifyContent: 'center',
      },  
      malumot01: {
        top:30,
        color: '#FFF8DC',
        fontSize:20,
        fontFamily: 'Serif(red serifs)',
        fontWeight: 'bold',
        alignItems: 'center',
      justifyContent: 'center',
      },
      malumot2: {
        top:5,
        color: '#FFF8DC',
        fontSize:20,
        fontFamily: 'Serif(red serifs)',
        fontWeight: 'bold',
        alignItems: 'center',
      justifyContent: 'center',
      }, 
    fixed: {
      position: 'absolute',
      top: 200,
      width: 350,
      padding: 10,
    },
  });
export default styles;
