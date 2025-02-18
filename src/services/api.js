
import apiInstance from "./axiosInstance";

async function getAllCategories() {
    const res = await apiInstance.get('Categories')
    return res;
}
async function getAllSubCategories() {
    const res = await apiInstance.get('SubCategories')
    return res;
}


export{
    getAllCategories,
    getAllSubCategories,
}