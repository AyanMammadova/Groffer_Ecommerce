import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddressForm = () => {
    const navigate = useNavigate()
    const [billingDetails, setBillingDetails] = useState({
        billingName: '',
        billingEmail: '',
        billingPhone: '',
        billingAddress: {
            line1: '',
            line2: '',
            city: '',
            state: '',
            postalCode: '',
            country: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nameParts = name.split('.'); // Handle nested fields for billingAddress
        if (nameParts.length > 1) {
            setBillingDetails(prevState => ({
                ...prevState,
                [nameParts[0]]: {
                    ...prevState[nameParts[0]],
                    [nameParts[1]]: value
                }
            }));
        } else {
            setBillingDetails(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { billingPhone, billingAddress } = billingDetails;
        const { postalCode } = billingAddress;

        const phoneRegex = /^\+994\d{9}$/;
        const postalCodeRegex = /^[A-Z]{2}\d{4}$/;

        if (!phoneRegex.test(billingPhone)) {
            alert("Phone number must be in format: +994XXXXXXXXX");
            return;
        }

        if (!postalCodeRegex.test(postalCode)) {
            alert("Postal code must be in format: XX0000 (e.g., AZ1000)");
            return;
        }
        localStorage.removeItem("billingDetails");
        localStorage.setItem("billingDetails", JSON.stringify(billingDetails));
        navigate('/payment');
    };



    return (
        <form onSubmit={handleSubmit} className="w-[90%] mb-[50px] mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Billing Details</h2>

            {/* Name */}
            <div className="mb-4">
                <label htmlFor="billingName" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="billingName"
                    name="billingName"
                    value={billingDetails.billingName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#136450]"
                    required
                />
            </div>

            {/* Email */}
            <div className="mb-4">
                <label htmlFor="billingEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="billingEmail"
                    name="billingEmail"
                    value={billingDetails.billingEmail}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#136450]"
                    required
                />
            </div>

            {/* Phone */}
            <div className="mb-4">
                <label htmlFor="billingPhone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="text"
                    id="billingPhone"
                    name="billingPhone"
                    value={billingDetails.billingPhone}
                    onChange={handleChange}
                    placeholder='+994XXXXXXXXX'
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#136450]"
                    required
                />
            </div>

            {/* Address Line 1 */}
            <div className="mb-4">
                <label htmlFor="billingAddress.line1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                <input
                    type="text"
                    id="billingAddress.line1"
                    name="billingAddress.line1"
                    value={billingDetails.billingAddress.line1}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#136450]"
                    required
                />
            </div>

            {/* Address Line 2 */}
            <div className="mb-4">
                <label htmlFor="billingAddress.line2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
                <input
                    type="text"
                    id="billingAddress.line2"
                    name="billingAddress.line2"
                    value={billingDetails.billingAddress.line2}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#136450]"
                />
            </div>

            {/* City */}
            <div className="mb-4">
                <label htmlFor="billingAddress.city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                    type="text"
                    id="billingAddress.city"
                    name="billingAddress.city"
                    value={billingDetails.billingAddress.city}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#136450]"
                    required
                />
            </div>

            {/* State */}
            <div className="mb-4">
                <label htmlFor="billingAddress.state" className="block text-sm font-medium text-gray-700">State</label>
                <input
                    type="text"
                    id="billingAddress.state"
                    name="billingAddress.state"
                    value={billingDetails.billingAddress.state}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#136450]"
                />
            </div>

            {/* Postal Code */}
            <div className="mb-4">
                <label htmlFor="billingAddress.postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                <input
                    type="text"
                    id="billingAddress.postalCode"
                    name="billingAddress.postalCode"
                    value={billingDetails.billingAddress.postalCode}
                    onChange={handleChange}
                    placeholder='XX0000 (e.g., AZ1000)'
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#136450]"
                    required
                />
            </div>

            {/* Country */}
            <div className="mb-6">
                <label htmlFor="billingAddress.country" className="block text-sm font-medium text-gray-700">
                    Country
                </label>
                <select
                    id="billingAddress.country"
                    name="billingAddress.country"
                    value={billingDetails.billingAddress.country}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#136450]"
                    required
                >
                    <option value="">Select Country</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="TR">Turkey</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="ES">Spain</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="IN">India</option>
                    <option value="BR">Brazil</option>
                    <option value="RU">Russia</option>
                    <option value="CN">China</option>
                    <option value="JP">Japan</option>
                    <option value="KR">South Korea</option>
                    <option value="MX">Mexico</option>
                    <option value="ZA">South Africa</option>
                    <option value="AE">United Arab Emirates</option>
                </select>
            </div>


            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-[#136450] text-white py-2 px-4 rounded-md  focus:outline-none focus:ring-2 "
            >
                Submit
            </button>
        </form>
    );
};

export default AddressForm;