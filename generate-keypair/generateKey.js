import { Keypair } from "@solana/web3.js";

export const generateKeys = () => {
  const keypair = Keypair.generate();
  return keypair.publicKey.toBase58();
};
