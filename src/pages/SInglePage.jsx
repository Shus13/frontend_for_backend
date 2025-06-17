import { Link, useNavigate, useParams } from "react-router-dom"
import Button from "../components/button"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"




function SinglePage(){
    const navigate = useNavigate()
    const {id} = useParams()
    const[book,setBook] = useState({})
    const fetchBook = async()=>{
        const response = await axios.get("http://localhost:4000/api/books/" + id)
        setBook(response.data.datas)
    }
    useEffect(()=>{
        fetchBook()
    },[])

    const deleteBook = async()=> {
        const response = await axios.delete("http://localhost:4000/api/books/" + id)

        if (response.status === 200){
            // naviagate to home page
            alert("Deleted Successfully")
            navigate("/")
        } else{
            alert("Something went wrong!!!")
        }
    }
    return (
        <>
        <Navbar />
        <Button title="SinglePage"/>
        <h1>{book.bookName}</h1>
        <p>{book.bookAuthor}</p>
        <p>{book.bookPrice}</p>
        <button onClick ={deleteBook}>Delete Me</button>
        <Link to={`/edit-page/${id}`}><button>Edit Me</button></Link>
        </>
    )
}

export default SinglePage