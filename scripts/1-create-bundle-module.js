import {getApp} from './helpers.js'

async function main(){
    const app = await getApp();

    console.log("Deploying Bundle Collection ... ");

    const bundleModule = await app.deployBundleModule({
        name: 'Javeed Lootbox',
        sellerFeeBasisPoints : 100, // this means royalty for the creator, 100 means a 1 percent
    });

    console.log(`Deployed bundle collection module with address ${bundleModule.address}`);
}

try{
    await main();
}catch{
    console.error("Error creating the Bundle Module");
    process.exit(1);
}