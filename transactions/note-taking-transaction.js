import {
  Keypair,
  Connection,
  Transaction,
  clusterApiUrl,
  TransactionInstruction,
  PublicKey,
  sendAndConfirmTransaction,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const keypair = new Keypair();
const PING_PROGRAM_ADDRESS = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
const PING_PROGRAM_DATA_ADDRESS =
  "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";
const programId = new PublicKey(PING_PROGRAM_ADDRESS);
const pingProgramDataId = new PublicKey(PING_PROGRAM_DATA_ADDRESS);

const connection = new Connection(clusterApiUrl("devnet"));
// console.log(keypair.publicKey.toBase58());
// to airdrop the sol for given public key account
await connection.requestAirdrop(keypair.publicKey, LAMPORTS_PER_SOL * 1);
async function sendPingTransaction(connection, payer) {
  const transaction = new Transaction();

  const instruction = new TransactionInstruction({
    keys: [
      {
        pubkey: pingProgramDataId,
        isSigner: false,
        isWritable: true,
      },
    ],
    programId,
  });

  transaction.add(instruction);

  const signature = await sendAndConfirmTransaction(connection, transaction, [
    payer,
  ]);
  return signature;
}

const signature = await sendPingTransaction(connection, keypair);

console.log("✅Your transaction completed and signature is: " + signature);
