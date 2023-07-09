import { createMetaplexInstane } from "./metaflex"

const metaplex  =createMetaplexInstane()

const metadata = { 
    name: "johnloyd25.sol.NFT",
    description: "My first solana NFT using metaplex token Standard",
    image: "https://arweave.net/nFHTJrea-R8kWoWnHlonrfhk0g9A6_vdti1qMbiRSNE",
    Attributes: [
        {
            trait_type: 'Event',
            value: 'Solana Developers Bootcamp'
        }
    ]
} 

async function main(){
    const {uri} = await metaplex.nfts().uploadMetadata(metadata)
    console.log('metadata uri', uri);
}

main()