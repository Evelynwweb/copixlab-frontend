import React from 'react'
import { useState,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
const VerifyEmail = ({route}) => {
    const [loader,setLoader] = useState(true)
    const params = useParams()
    const navigate = useNavigate()
    const [validUrl, setValidUrl] = useState()
    useEffect(() => {
                    setLoader(true)
            //         const referUser = async()=>{
            //         try {
            //             const url = `${route}/${params.id}/refer`
            //             const req = await fetch(url,{
            //                 headers:{
            //                     'Content-Type':'application/json'
            //                 }
            //             })
            //             const res = await req.json()
            //             setLoader(false)
            //             if (res.status === 400) {
            //                 navigate('/signup')
            //             }
            //             else {
            //                 navigate('/signup')
            //                 localStorage.setItem('referedUser',res.referredUser)
            //             }
            //         } catch (error) {
            //         console.log(error)
            //         setLoader(false)
            //         navigate('/signup')
            //             }
            // }
            const verifyEmailUrl = async()=>{
                try {
                    const url = `${route}/${params.id}/verify/${params.token}`
                    const req = await fetch(url,{
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                    const res = await req.json()
                    console.log(res)
                    setLoader(false)
                    if (res.status === 200) {
                        setValidUrl(true)
                    }
                    
                } catch (error) {
                    console.log(error)
                    setValidUrl(false)
                    setLoader(false)
                }
            }
            verifyEmailUrl()
    },[params])
    return (
    <>
        {
            
           loader && <Loader />
            }
            {
                validUrl ? <p>email verified</p> : <p>verification link has expired</p>
            }
    </>    
  )
}

export default VerifyEmail