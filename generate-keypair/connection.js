import {
  clusterApiUrl,
  PublicKey,
  Connection,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { generateKeys } from "./generateKey.js";
const connection = new Connection(clusterApiUrl("devnet"));

console.log("connected...");

const publickey = generateKeys();

const address = new PublicKey(publickey);
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);

console.log(`✅ Finished!`);
