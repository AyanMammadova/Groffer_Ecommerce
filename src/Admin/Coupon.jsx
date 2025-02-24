import React, { useContext, useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import apiInstance from '../services/axiosInstance';
import { useFormik } from 'formik';
import { CouponSchemas } from '../schemas/AdminSchemas';
import { getAllCoupons, getCouponByCode } from '../services/api';
import toast from 'react-hot-toast';

function Coupon() {
    const [couponData, setCouponData] = useState(null)
    const [actionId, setActionId] = useState(null)
    const [editingCoupon, setEditingCoupon] = useState('')
    const [action, setAction] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [editingData, setEditinData] = useState(null)
    useEffect(() => {
        getAllCoupons().then(res => setCouponData(res.data))
    }, [showForm])
    function calculateDays(expiryDate) {
        const today = new Date();
        const expiry = new Date(expiryDate);
        const timeDiff = expiry - today; // difference in milliseconds
        return Math.floor(timeDiff / (1000 * 3600 * 24)); // convert milliseconds to days
    }

    function handleActions(action, id) {
        setAction(action)
        setActionId(id)
        setShowForm(true)

        if (action === 'put') {
            getCouponByCode(id).then(res => {
                setEditinData(res.data)

                formik.setValues({
                    coupon: res.data.code,
                    days: calculateDays(res.data.expiryDate),
                })
            })
        }
    }


    // const formik = useFormik({
    //     initialValues: {
    //         coupon: '',
    //         days: ''
    //     },
    //     validationSchema: CouponSchemas,
    //     onSubmit: (values) => {
    //         const { coupon, days } = values;

    //         const discountAmount = parseInt(coupon.slice(-2), 10);

    //         const today = new Date();
    //         const expiryDate = new Date(today);
    //         expiryDate.setDate(today.getDate() + parseInt(days))
    //         const formattedExpiryDate = expiryDate.toISOString();

    //         const formData = new FormData();
    //         formData.append('Code', coupon);
    //         formData.append('DiscountAmount', discountAmount);
    //         formData.append('ExpiryDate', formattedExpiryDate);
    //         formData.append('IsPercentage', 'true');

    //         if (action === 'post') {
    //             apiInstance.post('Coupon/add', formData)
    //                 .then(res => {
    //                     setShowForm(false);
    //                     formik.resetForm();
    //                 })
    //                 .catch(err => console.error('Error:', err));
    //         }
    //         else if (action === 'put') {
    //             apiInstance.put(`Categories/${actionId}`, formData)
    //                 .then(res => {
    //                     console.log('Category updated:', res.data);
    //                     setShowForm(false);
    //                     formik.resetForm();
    //                 })
    //                 .catch(err => console.error('Error:', err));
    //         }
    //     },
    // });
    const formik = useFormik({
        initialValues: {
            coupon: editingData ? editingData.code : '',  // Set coupon code from editingData
            days: editingData ? calculateDays(editingData.expiryDate) : ''  // Set days dynamically
        },
        validationSchema: CouponSchemas,
        onSubmit: (values) => {
            const { coupon, days } = values;

            const discountAmount = parseInt(coupon.slice(-2), 10);
            const today = new Date();
            const expiryDate = new Date(today);
            expiryDate.setDate(today.getDate() + parseInt(days));
            const formattedExpiryDate = expiryDate.toISOString();

            const formData = new FormData();
            formData.append('Code', coupon);
            formData.append('DiscountAmount', discountAmount);
            formData.append('ExpiryDate', formattedExpiryDate);
            formData.append('IsPercentage', 'true');

            if (action === 'post') {
                apiInstance.post('Coupon/add', formData)
                    .then(res => {
                        setShowForm(false);
                        formik.resetForm();
                    })
                    .catch(err => console.error('Error:', err));
            } else if (action === 'put') {
                apiInstance.put(`Coupon/update/${editingCoupon}`, formData) // Update the correct coupon using actionId
                    .then(res => {
                        console.log('Coupon updated:', res.data);
                        setShowForm(false);
                        formik.resetForm();
                    })
                    .catch(err => console.error('Error:', err));
            }
        },
    });


    function deleteCoupon(coupon) {
        const couponCode = coupon

        apiInstance.delete('Coupon/delete', {
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(couponCode)
        })
            .then(res => {
                toast.success('Coupon Deleted succesfully!')
                setShowForm(false);
                getAllCoupons().then(res => setCouponData(res.data))
            })
            .catch(err => {
                console.error('Error:', err);
                console.error('Response data:', err.response?.data)
            });
    }




    return (
        <>
            <div
                onClick={() => { setShowForm(false) }}
                className={`${showForm ? 'flex fixed' : 'hidden'}   top-0 z-10  justify-center items-center bg-black/80 h-[100vh] w-[100%]`}>
                <div
                    onClick={(e) => { e.stopPropagation() }}
                    className='w-[40%] z-20 min-h-[40vh] relative bg-black shadow-lg shadow-gray-700 rounded-sm'>
                    <IoIosClose
                        onClick={() => { setShowForm(false) }}
                        className='text-[3em] cursor-pointer absolute top-[10px] right-[10px] text-white' />
                    <form
                        onSubmit={formik.handleSubmit}
                        className='text-white text-[1.2em] pt-[40px] w-[90%] mx-auto'>

                        <div>
                            <label htmlFor="coupon">Coupon</label>
                            <input
                                type="text"
                                id="coupon"
                                name="coupon"
                                placeholder="Coupon"
                                value={
                                    formik.values.coupon
                                }
                                onChange={formik.handleChange}
                                className='w-[100%] p-[10px] my-[10px] rounded-sm text-black bg-white'
                            />
                            {formik.errors.coupon && (
                                <div className="text-red-500 text-sm">{formik.errors.coupon}</div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="days">Days</label>
                            <input
                                type="number"
                                id="days"
                                name="days"
                                placeholder="days"
                                value={
                                    formik.values.days
                                }
                                onChange={formik.handleChange}
                                className='w-[100%] p-[10px] my-[10px] rounded-sm text-black bg-white'
                            />
                            {formik.errors.days && (
                                <div className="text-red-500 text-sm">{formik.errors.days}</div>
                            )}
                        </div>

                        <button
                            className='w-[100%] font-bold cursor-pointer p-[10px] my-[10px] rounded-sm text-black bg-white '
                            type='submit'
                        >
                            {action == 'post' ? 'Add new Coupon' : 'Edit Coupon'}
                        </button>
                    </form>
                </div>
            </div>
            <p className='text-[2em] text-center  pt-[30px] font-bold underline'>Coupon Data</p>
            <button
                type='button'
                onClick={() => {
                    handleActions('post', '')
                }}
                className='ml-[30px] border-2 cursor-pointer hover:bg-white hover:text-black  transition-all duration-300 border-white p-[5px]  rounded-md text-[1.2em] font-[500]'>
                Add new Coupon
            </button>
            <table className='w-[96%]  mx-auto border-2 border-white mt-[30px]'>
                <thead>
                    <tr>
                        <th className='py-[10px] border-2 border-white'>#</th>
                        <th className='py-[10px] border-2 border-white'>Coupon</th>
                        <th className='py-[10px] border-2 border-white'>Discount</th>
                        <th className='py-[10px] border-2 border-white'>Expiry date</th>
                        <th className='py-[10px] border-2 border-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        couponData && couponData.map((item, i) => {
                            return <tr key={i}>
                                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{i + 1}</td>
                                <td className='py-[10px] border-2 px-[10px] border-white font-[500] capitalize'>{item.code}</td>
                                <td className='py-[10px] border-2 px-[10px] border-white font-[500] '>{item.discountAmount}{item.isPercentage ? '%' : ''}</td>
                                <td className='py-[10px] border-2 px-[10px] border-white font-[500]'>{item?.expiryDate}</td>
                                <td className='py-[10px] border-2 text-center border-white font-[500]'>
                                    {/* <button
                                        type='button'
                                        onClick={() => {
                                            setEditingCoupon(item.code)
                                            handleActions('put', item.code)  // Pass coupon code to fetch the data
                                        }}
                                        className='mx-[10px] bg-green-500 py-[4px] rounded-md border-2 cursor-pointer border-green-400 px-[10px]'>
                                        Edit
                                    </button> */}

                                    <button
                                        type='button'
                                        onClick={() => {
                                            deleteCoupon(item.code)
                                        }}
                                        className='mx-[10px] bg-red-600 py-[4px] rounded-md border-2 cursor-pointer border-red-600 px-[10px]'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Coupon
