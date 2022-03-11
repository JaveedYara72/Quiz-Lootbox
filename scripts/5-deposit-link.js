import { isCommunityResourcable } from "@ethersproject/providers";
import { ethers } from "ethers";
import { parse } from "path/posix";
import { sdk } from "./helpers.js";

async function main(){
    const packModuleAddress = "0x5B67a998A7aDa9dbc485010d7c0b76c16F913c81";
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log("Depositing LINK.. ");

    // Link uses 18 decimals, same as ETH. 
    const amount = ethers.utils.parseEther('2');

    await packModule.depositLink(amount);
    console.log("Deposited! ");

    const balance = await packModule.getLinkBalance();
    console.log(balance);
}

try{
    await main();
}catch(error){
    console.log("Error depositing the LINK");
    process.exit(1);
}