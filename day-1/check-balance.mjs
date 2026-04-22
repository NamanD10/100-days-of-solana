import {
    createSolanaRpc,
    devnet,
    address,
} from "@solana/kit"

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

const { value: balance } = await rpc.getBalance(address("B9zVY1JVPn9aGNQCoRRkQa2AVRHYv7pMDXRV43ZnSdhm")).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);