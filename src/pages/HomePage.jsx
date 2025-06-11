import { useEffect, useState } from "react";
import Button from "../components/button";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";


function HomePage() {
    const fetchBooks = async() => {
        const response = await axios.get("http://localhost:4000/api/books")
        console.log(response.data.datas)
    }
    useEffect(()=>{
        fetchBooks()
    },[])
    return (

        <>

            <Navbar />

            < Button title="SignUp" />
            < Button title="Login" />
            < Button title="Skip" />

            <div className="flex flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default HomePage