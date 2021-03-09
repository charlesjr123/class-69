import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Touchable } from 'react-native';
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner"
export default class Transaction extends React.Component{
    constructor(){
        super()
        this.state={
            hascamerapermissions:null,
            scanner:false,
            scanneddata:"",
            buttonState:"normal"
        }


    }
    getCameraPermissions=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hascamerapermission:status==="granted",
            buttonState:"click",
            scanner:"false"
        })
    }
    handleBarscanner=(data)=>{
        this.setState({
            scanner:true,
            scanneddata:data,
            buttonState:"normal",

        })
    }
    render(){
        const hascamerapermissions=this.state.hascamerapermissions
        const scanner=this.state.scanner
        const buttonState=this.state.buttonState
        if(buttonState=="click"&& hascamerapermissions){
            return(
                <BarCodeScanner onBarCodeScanned={scanned? undefined:this.handleBarscanner }
                style={stylesheet.absoluteFillObject}>

                </BarCodeScanner>
            )
        }
        else if(   buttonState==="normal"){
            
        }
         
        
        return(
            <View style={{alignItems:'center',
            justifyContent:"center", flex:1,
            }}>
                <Text>
                   {hascamerapermissions===true?
                   this.state.scanneddata:"request camera permission"}

                </Text>
            <TouchableOpacity style={styles.CreateButton} onPress={this.getCameraPermissions}>
                <Text>
                    scan Qr code
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
    
}
const styles= stylesheet.create({
    CreateButton:{
        backgroundColor:"red",
        margin:10,
        padding:10,


    }
})