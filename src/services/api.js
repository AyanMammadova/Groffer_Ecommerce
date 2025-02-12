import axios from "axios"


async function getAllProducts() {
    const res=await axios.get('https://ecommerce.ibradev.me/products/all')
    return res
}

export{
    getAllProducts
}