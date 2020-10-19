import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Input, Button } from 'react-native-elements';

const App = () => {
	const [binary, setBinary] = useState('')
	const [decimal, setDecimal] = useState('')
	const [hexadecimal, setHexadecimal] = useState('')
    const [octal, setOctal] = useState('')
    const [focus, setFocus] = useState(null)

    const [disableA, setDisableA] = useState(true)
    const [disableB, setDisableB] = useState(true)
    const [disableC, setDisableC] = useState(true)
    const [disableD, setDisableD] = useState(true)
    const [disableE, setDisableE] = useState(true)
    const [disableF, setDisableF] = useState(true)
    const [disable0, setDisable0] = useState(true)
    const [disable1, setDisable1] = useState(true)
    const [disable2, setDisable2] = useState(true)
    const [disable3, setDisable3] = useState(true)
    const [disable4, setDisable4] = useState(true)
    const [disable5, setDisable5] = useState(true)
    const [disable6, setDisable6] = useState(true)
    const [disable7, setDisable7] = useState(true)
    const [disable8, setDisable8] = useState(true)
    const [disable9, setDisable9] = useState(true)

    const cleanAllInputs = () => {
        setBinary('')
        setDecimal('')
        setHexadecimal('')
        setOctal('')
    }

    const addText = (value) => {
        switch (focus) {
            case 'Binary':
                    setBinary(binary + value)
                    setDecimal(String(binary + value ? parseInt(binary + value, 2) : ''))
                    setHexadecimal(String(binary + value ? parseInt(binary + value, 2).toString(16).toUpperCase() : ''))
                    setOctal(String(binary + value ? parseInt(binary + value, 2).toString(8) : ''))
                break;
        
            case 'Decimal':
                setDecimal(decimal + value)
                setBinary(String(decimal + value ? parseInt(decimal + value, 10).toString(2) : ''))
                setHexadecimal(String(decimal + value ? parseInt(decimal + value, 10).toString(16).toUpperCase() : ''))
                setOctal(String(decimal + value ? parseInt(decimal + value, 10).toString(8) : ''))
                break;

            case 'Hexadecimal':
                setHexadecimal(hexadecimal + value)
                setBinary(String(hexadecimal + value ? parseInt(hexadecimal + value, 16).toString(2) : ''))
                setDecimal(String(hexadecimal + value ? parseInt(hexadecimal + value, 16) : ''))
                setOctal(String(hexadecimal + value ?  parseInt(hexadecimal + value, 16).toString(8) : ''))
                break;

            case 'Octal':
                setOctal(octal + value)
                setBinary(String(octal + value  ? parseInt(octal + value, 8).toString(2) : ''))
                setDecimal(String(octal + value ? parseInt(octal + value, 8) : ''))
                setHexadecimal(String(octal + value ? parseInt(octal + value, 8).toString(16).toUpperCase() : ''))
                break;
        }
    }

    useEffect(() => {
        switch (focus) {
            case 'Binary':
                setDisableA(true)
                setDisableB(true)
                setDisableC(true)
                setDisableD(true)
                setDisableE(true)
                setDisableF(true)
                setDisable0(false)
                setDisable1(false)
                setDisable2(true)
                setDisable3(true)
                setDisable4(true)
                setDisable5(true)
                setDisable6(true)
                setDisable7(true)
                setDisable8(true)
                setDisable9(true)
                break;
        
            case 'Decimal':
                setDisableA(true)
                setDisableB(true)
                setDisableC(true)
                setDisableD(true)
                setDisableE(true)
                setDisableF(true)
                setDisable0(false)
                setDisable1(false)
                setDisable2(false)
                setDisable3(false)
                setDisable4(false)
                setDisable5(false)
                setDisable6(false)
                setDisable7(false)
                setDisable8(false)
                setDisable9(false)
                break;

            case 'Hexadecimal':
                setDisableA(false)
                setDisableB(false)
                setDisableC(false)
                setDisableD(false)
                setDisableE(false)
                setDisableF(false)
                setDisable0(false)
                setDisable1(false)
                setDisable2(false)
                setDisable3(false)
                setDisable4(false)
                setDisable5(false)
                setDisable6(false)
                setDisable7(false)
                setDisable8(false)
                setDisable9(false)
                break;

            case 'Octal':
                setDisableA(true)
                setDisableB(true)
                setDisableC(true)
                setDisableD(true)
                setDisableE(true)
                setDisableF(true)
                setDisable0(false)
                setDisable1(false)
                setDisable2(false)
                setDisable3(false)
                setDisable4(false)
                setDisable5(false)
                setDisable6(false)
                setDisable7(false)
                setDisable8(true)
                setDisable9(true)
                break;
        
            default:
                setDisableA(true)
                setDisableB(true)
                setDisableC(true)
                setDisableD(true)
                setDisableE(true)
                setDisableF(true)
                setDisable0(true)
                setDisable1(true)
                setDisable2(true)
                setDisable3(true)
                setDisable4(true)
                setDisable5(true)
                setDisable6(true)
                setDisable7(true)
                setDisable8(true)
                setDisable9(true)
                break;
        }
    }, [focus])

	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
            <Input 
                label='Binary' 
                labelStyle={styles.inputLabelStyle}
                value={binary}
                inputStyle={styles.inputStyle}
                showSoftInputOnFocus={false}
                onFocus={() => setFocus('Binary')}
            />

            <Input 
                label='Decimal' 
                labelStyle={styles.inputLabelStyle}
                value={decimal}
                inputStyle={styles.inputStyle}
                showSoftInputOnFocus={false}
                onFocus={() => setFocus('Decimal')}
            />

            <Input 
                label='Hexadecimal' 
                labelStyle={styles.inputLabelStyle}
                value={hexadecimal}
                inputStyle={styles.inputStyle}
                showSoftInputOnFocus={false}
                onFocus={() => setFocus('Hexadecimal')}
            />

            <Input 
                label='Octal' 
                labelStyle={styles.inputLabelStyle}
                value={octal}
                inputStyle={styles.inputStyle}
                showSoftInputOnFocus={false}
                onFocus={() => setFocus('Octal')}
            />

            <View>
                <View style={{ width: Dimensions.get('window').width - 40, flexDirection: 'row' }}>
                    <Button
                        title='A'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 6, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('A')}
                        disabled={disableA}
                    /> 
                    <Button
                        title='B'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 6, borderWidth: 1, borderColor: 'white'}}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('B')}
                        disabled={disableB}
                    /> 
                    <Button
                        title='C'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 6, borderWidth: 1, borderColor: 'white'}}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('C')}
                        disabled={disableC}
                    /> 
                    <Button
                        title='D'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 6, borderWidth: 1, borderColor: 'white'}}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('D')}
                        disabled={disableD}
                    /> 
                    <Button
                        title='E'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 6, borderWidth: 1, borderColor: 'white'}}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('E')}
                        disabled={disableE}
                    /> 
                    <Button
                        title='F'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 6, borderWidth: 1, borderColor: 'white'}}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('F')}
                        disabled={disableF}
                    /> 
                </View>

                <View style={{ width: Dimensions.get('window').width - 40, flexDirection: 'row' }}>
                    <Button
                        title='7'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('7')}
                        disabled={disable7}
                    /> 
                    <Button
                        title='8'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('8')}
                        disabled={disable8}
                    /> 
                    <Button
                        title='9'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('9')}
                        disabled={disable9}
                    /> 
                </View>

                <View style={{ width: Dimensions.get('window').width - 40, flexDirection: 'row' }}>
                    <Button
                        title='4'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('4')}
                        disabled={disable4}
                    /> 
                    <Button
                        title='5'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('5')}
                        disabled={disable5}
                    /> 
                    <Button
                        title='6'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('6')}
                        disabled={disable6}
                    /> 
                </View>

                <View style={{ width: Dimensions.get('window').width - 40, flexDirection: 'row' }}>
                    <Button
                        title='1'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('1')}
                        disabled={disable1}
                    /> 
                    <Button
                        title='2'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('2')}
                        disabled={disable2}
                    /> 
                    <Button
                        title='3'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('3')}
                        disabled={disable3}
                    /> 
                </View>

                <View style={{ width: Dimensions.get('window').width - 40, flexDirection: 'row' }}>
                    <Button
                        title='0'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) - (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => addText('0')}
                        disabled={disable0}
                    /> 
                    <Button
                        title='AC'
                        containerStyle={{ width: (Dimensions.get('window').width - 40) / 3, borderWidth: 1, borderColor: 'white' }}
                        buttonStyle={{ backgroundColor: '#A50000' }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={cleanAllInputs}
                    /> 
                </View>
            </View>
		</View>
	)
}

export default App;

const styles = StyleSheet.create({
    inputLabelStyle: { 
        fontSize: 20, 
        color: '#A50000',
        marginTop: 3
    },
    inputStyle: { 
        textAlign: 'right', 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: -10,
        marginTop: -8,
    },
});
