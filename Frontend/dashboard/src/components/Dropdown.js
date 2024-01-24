import React,{useState} from 'react'



export default function Dropdown(props) {
    const handleDropdownChange1=props.handleDropdownChange1;
    const handleDropdownChange2=props.handleDropdownChange2;
    const selectedOption1=props.selectedOption1;
    const selectedOption2=props.selectedOption2;
    
    
    return (
        <div style={{margin: '0px 0px 90px 0px'}}>
            
            <select value={selectedOption1} onChange={handleDropdownChange1}>
                <option value="wrx">WRX</option>
                <option value="inr">INR</option>
                <option value="btc">BTC</option>
                <option value="usdt">USDT</option>
            </select>

            <div className="dropdown"></div>

            
            <select value={selectedOption2} onChange={handleDropdownChange2}>
                <option value="bts">BTS</option>
                <option value="dock">DOCK</option>
                <option value="santos">SANTOS</option>
                <option value="agld">AGLD</option>
                <option value="pyr">PYR</option>
                <option value="rsr">RSR</option>
                <option value="waves">WAVES</option>
                <option value="push">PUSH</option>
                <option value="stx">STX</option>
                <option value="bnx">BNX</option>
                <option value="slp">SLP</option>
                <option value="celo">CELO</option>
                <option value="dydx">DYDX</option>
                <option value="celr">CELR</option>
                <option value="rune">RUNE</option>
                <option value="storj">STORJ</option>
                <option value="ar">AR</option>
                <option value="bnb">BNB</option>
                <option value="high">HIGH</option>
                <option value="lovely">LOVELY</option>
                <option value="yfii">YFII</option>
                <option value="alpha">ALPHA</option>
            </select>
              
        </div>
        
    )
}
