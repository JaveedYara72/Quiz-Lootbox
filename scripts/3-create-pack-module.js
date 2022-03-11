import { getApp } from "./helpers.js";

async function main(){
    const app = await getApp();

    console.log("Deploying pack modules");

    const packModule = await app.deployPackModule({
        name: `Javeed's Lootbox Pack`,
        sellerFeeBasisPoints: 200, // 2 percent of the entire sales go to me as a royalty fee
    });

    console.log(`deployed the NFT Module at the address ${packModule.address}`);
}

try{
    await main();
}catch(error){
    console.log("Error creating the NFT Pack module");
    process.exit(1);
}