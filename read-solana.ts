import * as Web3 from '@solana/web3.js'

const publicKey = new Web3.PublicKey('Coft8A52E3AkZ4grR6ZvQPSMti3kizs8ej645RBWVT2v');

async function main(){
    console.log();
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))

    const balance = await connection.getBalance(publicKey)
    console.log('balance', balance);

    const accountInfo = await connection.getAccountInfo(publicKey)
    console.log('accountInfo', accountInfo?.data.toString())
}

main()