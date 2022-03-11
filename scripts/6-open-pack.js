import { sdk } from "./helpers.js";

async function main(){
    const packModuleAddress = "0x5B67a998A7aDa9dbc485010d7c0b76c16F913c81";
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log("Opening the Pack!..")
    const opened = await packModule.open('0'); // the '0' here is the id of the pack
    console.log("The pack is now opened");
    console.log(opened);
}

try{
    await main();
}catch(error){
    console.log("Error Opening the Pack");
    process.exit(1);
}