import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Abc = () => {

	const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwt-token');
        if(!token) {
            navigate('/login')
        }
    },[])

	return (
		<div className="container">
            Secret Page for Logged user only...
		</div>
	);
};