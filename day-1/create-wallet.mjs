import { 
    generateKeyPairSigner,
    createSolanaRpc,
    devnet, 
    address,
} from "@solana/kit"


const wallet = await  generateKeyPairSigner();

console.log("Your new wallet address:", wallet.address);
console.log("\nThis address is your public key. Its safe to share.");
console.log("The private key stays in memory. In real app, you'd save it secretly.");

