import { useEffect, useState } from "react";
import Button from "../components/button";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";


function HomePage() {
    const [books, setBooks] = useState([])
    const fetchBooks = async() => {
        const response = await axios.get("http://localhost:4000/api/books")
        setBooks(response.data.datas)
    }
    useEffect(()=>{
        fetchBooks()
    },[])
    console.log(books, "This is books")
    return (

        <>

            <Navbar />

            < Button title="SignUp" />
            < Button title="Login" />
            < Button title="Skip" />

            <div className="flex flex-wrap">
                {
                    books.map(function(book){
                        return (
                            <Card book={book}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HomePage