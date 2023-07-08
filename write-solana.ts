import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
console.log(process.env.SOL_PRIVATE_KEY)

async function main() {
    const transaction = new Web3.Transaction();
    const sendSolInstruction = SystemProgram.transfer({
        fromPubkey: new Web3.PublicKey('Coft8A52E3AkZ4grR6ZvQPSMti3kizs8ej645RBWVT2v'),
        toPubkey: new Web3.PublicKey('E7injXRRjpgz47wuuWRZL1BA8onAycwhadPYqyYWqrST'),
        lamports: .1 * LAMPORTS_PER_SOL
    })
    transaction.add(sendSolInstruction)
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const keyPairFromSecret = Web3.Keypair.fromSecretKey(base58DecodedPK)

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))

    const txHash = await sendAndConfirmTransaction(connection, transaction, [keyPairFromSecret]);
    console.log('txHash', txHash)
}

main()