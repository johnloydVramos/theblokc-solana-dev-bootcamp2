import { createMetaplexInstane } from "./metaflex"

async function main(){
    const metaplex  =createMetaplexInstane()
    const metadataUri = 'https://arweave.net/O4hM_iPKzgFne0mzOAB_SoczFfNRw6V_ZOdUl7qYrgI'
    const {nft} = await metaplex.nfts().create({
        uri:metadataUri,
        name:'johnloyd25',
        sellerFeeBasisPoints: 0
    })
    console.log('nft', nft);
}

main()  