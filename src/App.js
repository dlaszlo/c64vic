import React, {useState} from 'react'

import Dropdown from "./components/Dropdown";
import Warning from "./components/Warning";
import {
    vicBankList,
    map_dd00,
    map_dd02,
    bitmapList,
    charMemList,
    memAreas1List,
    memAreas2List,
    memAreas3List,
    map_01,
    screenMemList,
    screenModeList,
    map_d011,
    map_d016
} from "./constants"
import './App.css';

const getMemoryScheme = (bitmap, screenMem, charMem) => {
    let nBitmap = parseInt(bitmap)
    let nScreenMem = parseInt(screenMem)
    let nCharMem = parseInt(charMem)
    let v = (nScreenMem << 4) | (nBitmap << 3) | (nCharMem << 1)
    let rs = "00000000" + v.toString(2)
    return rs.substring(rs.length - 8)
}

const getBitmapAddress = (bank, bitmap) => {
    let nBank = parseInt(bank)
    let nBitmap = parseInt(bitmap)
    let v = nBank * 0x4000 + nBitmap * 0x2000
    let rs = "0000" + v.toString(16)
    return rs.substring(rs.length - 4)
}

const getScreenMemAddress = (bank, screenMem) => {
    let nBank = parseInt(bank)
    let nScreenMem = parseInt(screenMem)
    let v = nBank * 0x4000 + nScreenMem * 0x0400
    let rs = "0000" + v.toString(16)
    return rs.substring(rs.length - 4)
}

const getCharMemAddress = (bank, charMem) => {
    let nBank = parseInt(bank)
    let nCharMem = parseInt(charMem)
    let v = nBank * 0x4000 + nCharMem * 0x0800
    let rs = "0000" + v.toString(16)
    return rs.substring(rs.length - 4)
}


const App = () => {
    const [bank, setBank] = useState("0")
    const [bitmap, setBitmap] = useState("0")
    const [charMem, setCharMem] = useState("0")
    const [screenMem, setScreenMem] = useState("0")
    const [memAreas1, setMemAreas1] = useState("0")
    const [memAreas2, setMemAreas2] = useState("2")
    const [memAreas3, setMemAreas3] = useState("0")
    const [screenMode, setScreenMode] = useState("0")

    const setMemAreas1Value = (value) => {
        setMemAreas1(value)
        if (value === "1") {
            setMemAreas3("1")
            if (memAreas2 === "0") {
                setMemAreas2("2")
            }
        }
    }

    const setMemAreas2Value = (value) => {
        setMemAreas2(value)
        if (value === "0") {
            setMemAreas1("0")
            setMemAreas3("0")
        }
    }

    const setMemAreas3Value = (value) => {
        setMemAreas3(value)
        if (value === "0") {
            setMemAreas1("0")
        }
    }

    const setBitmapValue = (value) => {
        let nBitmap = parseInt(value)
        let nCharMem = parseInt(charMem)
        setBitmap(value)
        if (nBitmap === 0 && nCharMem > 3) {
            setCharMem((nCharMem - 4).toString())
        } else if (nBitmap === 1 && nCharMem < 4) {
            setCharMem((nCharMem + 4).toString())
        }
    }

    const setCharMemValue = (value) => {
        let nBitmap = parseInt(bitmap)
        let nCharMem = parseInt(value)
        setCharMem(value)
        if (nCharMem > 3 && nBitmap === 0) {
            setBitmap("1")
        } else if (nCharMem < 4 && nBitmap === 1) {
            setBitmap("0")
        }
        setCharMem(value)
    }

    return (
        <>
            <div>
                <Dropdown fieldName="memAreas1"
                          label="$A000-$BFFF: "
                          options={memAreas1List}
                          value={memAreas1}
                          onChange={(event) => setMemAreas1Value(event.target.value)}/>

                <Dropdown fieldName="memAreas2"
                          label="$D000-$DFFF: "
                          options={memAreas2List}
                          value={memAreas2}
                          onChange={(event) => setMemAreas2Value(event.target.value)}/>

                <Dropdown fieldName="memAreas3"
                          label="$E000-$FFFF: "
                          options={memAreas3List}
                          value={memAreas3}
                          onChange={(event) => setMemAreas3Value(event.target.value)}/>

                <Dropdown fieldName="vicBank"
                          label="VIC bank: "
                          options={vicBankList}
                          value={bank}
                          onChange={(event) => setBank(event.target.value)}/>
                <Warning visible={bank === "0"} warningText="(The VIC will see the character ROM at $1000-$2000)"/>
                <Warning visible={bank === "2"} warningText="(The VIC will see the character ROM at $9000-$a000)"/>

                <Dropdown fieldName="bitmap"
                          label="Bitmap is at: "
                          options={bitmapList}
                          value={bitmap}
                          onChange={(event) => setBitmapValue(event.target.value)}/>

                <Dropdown fieldName="charMem"
                          label="Charmem is at: "
                          options={charMemList}
                          value={charMem}
                          onChange={(event) => setCharMemValue(event.target.value)}/>

                <Dropdown fieldName="screenMem"
                          label="ScreenMem is at: "
                          options={screenMemList}
                          value={screenMem}
                          onChange={(event) => setScreenMem(event.target.value)}/>

                <Dropdown fieldName="screenMode"
                          label="Screen mode: "
                          options={screenModeList}
                          value={screenMode}
                          onChange={(event) => setScreenMode(event.target.value)}/>

            </div>
            <h2>Memory areas:</h2>
            <code>
                lda {map_01[memAreas1 + memAreas2 + memAreas3]} <br />
                sta $01
            </code>
            <h2>Switch bank:</h2>
            <code>
                lda {map_dd00[bank]} <br/>
                sta $dd00
            </code>
            <h2>Switch bank (Sparkle):</h2>
            <code>
                lda {map_dd02[bank]} <br/>
                sta $dd02
            </code>
            <h2>VIC memory scheme:</h2>
            <code>
                lda #%{getMemoryScheme(bitmap, screenMem, charMem)} <br/>
                sta $d018
            </code>
            <h2>Screen mode:</h2>
            <code>
                lda {map_d011[screenMode]} <br/>
                sta $d011<br/>
                lda {map_d016[screenMode]} <br/>
                sta $d016
            </code>
            <h2>Constants:</h2>
            <code>
                BITMAP  = ${getBitmapAddress(bank, bitmap)} <br />
                SCREEN  = ${getScreenMemAddress(bank, screenMem)} <br />
                CHARSET = ${getCharMemAddress(bank, charMem)} <br />
                COLOR   = $d800
            </code>
        </>
    );
}

export default App;
