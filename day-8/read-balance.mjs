import { createSolanaRpc, devnet, address } from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

const targetAddress = address(
   "EpaJqwsFVpTQMdf6XGmusDHUUyQ9d5dEZ36dJYbf9VbV"
    
)

const { value : balanceInLamports } = await rpc.getBalance(targetAddress).send();

const balanceInSOL = Number(balanceInLamports) / 1_000_000_000;

console.log(`Address: ${targetAddress}`);
console.log(`Balance in lamports: ${balanceInLamports}`);
console.log(`Balance: ${balanceInSOL} SOL`);