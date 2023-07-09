import { createMetaplexInstane } from "./metaflex"
import {toMetaplexFile} from '@metaplex-foundation/js'
import fs from 'fs'

const buffer = fs.readFileSync(__dirname + "/pic.jpg");
const file = toMetaplexFile(buffer, "image.jpg");

const metaplex  =createMetaplexInstane()

async function main(){
    const imageUrl = await metaplex.storage().upload(file)
    console.log('image Url', imageUrl);
}
main()