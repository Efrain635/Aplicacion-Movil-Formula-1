import { Image, View, Text, ScrollView, StyleSheet } from 'react-native';


function Formula1(props) {
    return (
        <View> 
        <Image style={styles.formula1} source={props.imagen}/>
            <Text style={styles.titulo}>{props.nombre}</Text>
        </View>
    );
}

export default Formula1;
const styles = StyleSheet.create({
    formula1:{
        marginTop:10,
        borderRadius:8,
        width:300,
        height:300,
    },
titulo:{
        fotSize:12,
        fontWeight:'bold',
        color: 'blue',
    }
});