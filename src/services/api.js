
import apiInstance from "./axiosInstance";

async function getAllCategories() {
    const res = await apiInstance.get('Categories')
    return res;
}
async function getAllProducts() {
    const res = await apiInstance.get('Products/all-products')
    return res;
}

async function getAllSubCategories() {
    const res = await apiInstance.get('SubCategories')
    return res;
}
async function getAllTags() {
    const res = await apiInstance.get('Tags')
    return res;
}
async function getAllCatsWithSubs() {
    const res = await apiInstance.get('Categories/WithSubcategories')
    return res;
}


export{
    getAllCategories,
    getAllTags,
    getAllProducts,
    getAllSubCategories,
    getAllCatsWithSubs
}