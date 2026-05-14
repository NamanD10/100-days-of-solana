import { resolve } from "node:path";
import { homedir } from "node:os";
import { readFile } from "node:fs/promises";
import { createKeyPairSignerFromBytes } from "@solana/kit";

console.log("From index.js");
async function loadKeypair() {
    const keypairPath = resolve(homedir(), ".config", "solana", "id.json");
    console.log(`The keypairPath is ${keypairPath}`);

    const secretKeyJson = await readFile(keypairPath, "utf-8");
    console.log(`The secretKeyJson is ${secretKeyJson}`);

    const secretKeyBytes = new Uint8Array(JSON.parse(secretKeyJson));
    console.log(`The secretKeyBytes is ${secretKeyBytes}`);
    const keyPair = await createKeyPairSignerFromBytes(secretKeyBytes);
    return keyPair;
}

try{
    const sender = await loadKeypair();
    console.log("Sender:", sender.address);
} catch (e) {
    console.log(e)
}