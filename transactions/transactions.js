import { Transaction, SystemProgram } from "@solana/web3.js";
import { generateKeys } from "../generate-keypair/generateKey";
//transaction
//instruction
// sending
const transaction = new Transaction();
const publicKey = generateKeys();

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: sender,

  toPubkey: recipient,

  lamports: LAMPORTS_PER_SOL * amount,
});

transaction.add(sendSolInstruction);
