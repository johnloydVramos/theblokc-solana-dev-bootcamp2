import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
import * as token from '@solana/spl-token'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
import { Signer } from 'crypto';
async function main(){
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)
    const amount = 1000000 * LAMPORTS_PER_SOL;


   const mintToken =  await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('H4ZVddDnVHekKkgnW2BKGU1qBFMXx6qKiBET78ZezLyX'),
        new Web3.PublicKey('85pYqu4V7L592EY1hcT1kbmF5JzS5os5JV1vJyKLkU33'),
        signer,
        amount
    )

    console.log('Token Account', mintToken);
}

main()
