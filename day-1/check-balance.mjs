import {
    createSolanaRpc,
    devnet,
    address,
} from "@solana/kit"

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

const { value: balance } = await rpc.getBalance(address("EpaJqwsFVpTQMdf6XGmusDHUUyQ9d5dEZ36dJYbf9VbV")).send();

//Converting balance in lamports to balance in SOL by dividing it with 1_000_000_000
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);