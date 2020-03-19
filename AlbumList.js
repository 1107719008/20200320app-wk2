import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import list from "./list";
const Ablumlist=()=>{
    return(
        <ScrollView>
            <View style={styles.back}>
                <View style={styles.artist}>
                    <Text style={styles.artist}>
                        {list[0].artist}
                    </Text>
                </View>
                <View >
                    <Image
                        style={styles.smallimg}
                        source={{uri:list[0].thumbnail_image}}/>
                </View>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.content0}>{list[0].title}</Text>
                    </View>
                    <View>
                        <Image 
                            style={styles.img}
                            source={{uri:list[0].image}}/>
                    </View>
                </View>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.content}>{list[1].title}</Text>
                    </View>
                    <View>
                        <Image 
                            style={styles.img}
                            source={{uri:list[1].image}}/>
                    </View>
                </View>
                    <View style={styles.box}>
                    <View>
                        <Text style={styles.content2}>{list[2].title}</Text>
                    </View>
                    <View>
                        <Image 
                            style={styles.img}
                            source={{uri:list[2].image}}/>
                    </View>
                </View>
                    <View style={styles.box}>
                    <View>
                        <Text style={styles.content}>{list[3].title}</Text>
                    </View>
                    <View>
                        <Image 
                            style={styles.img}
                            source={{uri:list[3].image}}/>
                    </View>
                </View>
                    <View style={styles.box}>
                    <View>
                        <Text style={styles.content}>{list[4].title}</Text>
                    </View>
                    <View>
                        <Image 
                           style={styles.img}
                            source={{uri:list[4].image}}/>
                    </View>
                </View>
                
                
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    back:{
        height:1900,
        backgroundColor:'#FFC300',
        zIndex:5
    },
    artist:{
        fontSize:25,
        justifyContent:"center",
        alignItems: 'center',
        marginTop:7
    },
    smallimg:{
        width:200,
        height:150,
        marginTop:20,
        marginLeft:85
    },
    box:{
        width:300,
        height:300,
        marginTop:20,
        marginLeft:40,
        backgroundColor:"#F0F0F0",
        
    },
    img:{
        width:200,
        height:200,
       zIndex:-2,
        marginTop:20,
        marginLeft:50
        
    },
    content:{
        color:'#2F0000',
        fontSize:20,
        marginLeft:125,
        marginTop:10,
       
        },
        content0:{
            color:'#2F0000',
            fontSize:20,
            marginLeft:90,
            marginTop:10,
           
            },
            content2:{
                color:'#2F0000',
                fontSize:20,
                marginLeft:115,
                marginTop:10,
               
                }
});
export default Ablumlist;