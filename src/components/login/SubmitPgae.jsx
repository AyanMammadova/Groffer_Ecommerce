import React, { useState } from 'react'
import Countdown from 'react-countdown';
import apiInstance from '../../services/axiosInstance';
import { useNavigate } from 'react-router-dom';

function SubmitPgae() {
    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    const [timerKey, setTimerKey] = useState(Date.now());
    const isRegistered = localStorage.getItem("registerstatus")
    const registeredEmail = localStorage.getItem("registeredemail")
    console.log('registered boolean: ' + isRegistered)
    console.log('registered email: ' + registeredEmail)
    const [code, setCode] = useState("");
    const [resend, setResend] = useState(false)
    const [timeover, setTimeover] = useState(false)
    const [isTimerActive, setIsTimerActive] = useState(true);



    const handleConfirm = () => {
        const formData = new FormData();
        formData.append('email', registeredEmail);
        formData.append('confirmkey', code);
        apiInstance.post(
            'Auth/submit-register',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )

            .then(res => {
                localStorage.setItem("confirmeduser", true)
                console.log('Success: ', res);
                console.log('Success.data: ', res.data);
                navigate('/my-account')
                setToken(res.data);

            })
            .catch(err => {
                localStorage.setItem("confirmeduser", false)
                console.error('Errorum:', err.response.data.Message);
            });
    };
    const handleResend = () => {
        apiInstance.post(
            `Auth/resend-confirmation-code?email=${encodeURIComponent(registeredEmail)}`,
            null,
            {
                headers: {
                    'accept': '*/*',
                },
            }
        )
            .then(res => {
                console.log('Success:', res);
                setToken(res.data);
                setTimeover(false);
                setIsTimerActive(true);
                setTimerKey(Date.now());
            })
            .catch(err => {
                console.error('Error:', err.response ? err.response.data : err.message);
            });
    };

    const handleTimerEnd = () => {
        setCode("");
        setTimeover(true);
        setIsTimerActive(false);
    };

    const renderer = ({ minutes, seconds }) => {
        return (
            <span className="text-red-500 font-semibold">
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
            </span>
        );
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-[100%] py-[20px] bg-gray-100">
                <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">

                    <h2 className="text-2xl font-semibold mb-4">
                        {
                            timeover ? 'Time for your confirm code expired,do u want to resend it?' : 'Enter Confirmation code we sent to dsdsl'
                        }

                    </h2>

                    <input
                        type="text"
                        maxLength="6"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="border p-2 w-full rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Kod daxil edin"
                    />
                    {isTimerActive && (
                        <p className="pt-[10px] text-red-500 font-semibold mb-2">
                            Qalan vaxtınız: <Countdown key={timerKey} date={Date.now() + 180000} onComplete={handleTimerEnd} renderer={renderer} />
                        </p>
                    )}
                    <p className={`${timeover ? 'block' : 'hidden'}  font-semibold mb-2`}>
                        <button
                            type='button'
                            onClick={() => { setResend(true), setTimeover(false), handleResend() }}
                            className='underline py-[10px] cursor-pointer'
                        >
                            Resend Confirmation code
                        </button>
                    </p>
                    <button
                        onClick={() => handleConfirm()}
                        className="mt-4 font-[500] text-[1.2em] bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full"
                    >
                        Confirm
                    </button>

                </div>
            </div>
        </>
    )
}

export default SubmitPgae
