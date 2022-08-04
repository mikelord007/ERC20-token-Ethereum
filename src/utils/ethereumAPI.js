import Web3 from "web3";

import Decimal from 'decimal.js';

export const applyDecimals = (rawValue, decimals, sign = "negative") => {
    if(!rawValue)
        return "";
        
        return Decimal(rawValue).mul(Decimal(10).pow(Decimal(sign === "positive" ? decimals : -decimals))).toFixed();
}
    
export const web3 = new Web3(window.ethereum);