"use client"
import React, { useContext, useEffect } from 'react'
import Products from '@/Components/Products'
import { authContext } from '@/Components/Context'
const page = () => {
    return (
        <Products />
    )
}

export default page