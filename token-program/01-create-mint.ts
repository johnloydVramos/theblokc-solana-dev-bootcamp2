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
   

   const tokenMint =  await token.createMint(
        connection,
        signer,
        new Web3.PublicKey('Coft8A52E3AkZ4grR6ZvQPSMti3kizs8ej645RBWVT2v'),
        new Web3.PublicKey('E7injXRRjpgz47wuuWRZL1BA8onAycwhadPYqyYWqrST'),
        9
    )

    console.log('tokenMint', tokenMint.toBase58());
}

main()
