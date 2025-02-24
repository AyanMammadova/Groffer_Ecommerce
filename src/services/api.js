
import apiInstance from "./axiosInstance";

async function getAllCategories() {
    const res = await apiInstance.get('Categories')
    return res;
}
async function getAllProducts() {
    const res = await apiInstance.get('Products/all-products')
    return res;
}
async function getAllCoupons() {
    const res = await apiInstance.get('Coupon/get-all')
    return res;
}

async function getProductById(id) {
    const res = await apiInstance.get(`Products/single-product/${id}`)
    return res;
}
async function getProductsByCategory(catid) {
    const res = await apiInstance.get(`Products/Category/${catid}`)
    return res;
}
async function getProductsBySubCategory(subcatid) {
    const res = await apiInstance.get(`Products/SubCategory/${subcatid}`)
    return res;
}
async function getProductsByTag(tagids) {
    const queryString = tagids.map(item => `tagIds=${item.id}`).join("&")
    const res = await apiInstance.get(`Products/TagIds?${queryString}`)
    return res;
}

async function getCartData() {
    const res = await apiInstance.get(`Cart/cart`)
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
async function getFavorites() {
    const res = await apiInstance.get('Wishlist/get-all-wishlists')
    return res;
}


export {
    getAllCategories,
    getProductById,
    getFavorites,
    getAllTags,
    getAllProducts,
    getAllSubCategories,
    getAllCatsWithSubs,
    getCartData,
    getProductsByCategory,
    getProductsBySubCategory,
    getProductsByTag,
    getAllCoupons
}