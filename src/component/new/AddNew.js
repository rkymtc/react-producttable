import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom";
import Resizer from "react-image-file-resizer";
import './styles.css';

function Add() {
    const { id } = useParams()
    const [postDetails, setPostDetails] = useState({})
    const inputRef = useRef(document.createElement('input'));
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [count, setCount] = useState('')
    const [category, setCategory] = useState('')

    const addPost = () => {
        let requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },

            body: JSON.stringify({
                id: Number(id), title: title, price: Number(price), category: category, stock: Number(count), description: description,

            }),
        };

        fetch("https://fakestoreapi.com/products", requestOptions)
            .then((res) => res.json())
            .then((data) => {

                getPost()
            });
    };
    const getPost = () => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setPostDetails(data);
                alert("Kaydediliyor..")
            })
    }

    const [img, setImg] = useState("");

    const fileChangedHandler = (e) => {
        let fileInput = false;
        if (e.target.files[0]) {
            console.log(e.target.files[0]);
            fileInput = true;
        }
        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                    e.target.files[0],
                    300,
                    300,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        console.log(uri);
                        setImg(uri);
                    },
                    "base64",
                    200,
                    200
                );
            } catch (err) {
                console.log(err);
            }
        }
    };
    

    return (

        <>

            <div className="container d-flex justify-content-center"  >

                <div style={{ width: '10rem', height: '10rem', border: 1, borderRadius: "15px", borderStyle: "solid", borderColor: "gray", textAlign: "center" }}>
                    <img src={img} style={{ width: '7rem', height: '7rem', marginTop: "20px", marginBottom: "20px" }} />
                    <div className="file btn btn-lg ">
                        Upload
                        <input id="uploadBtn" name="file" style={{ marginTop: "15px", color: 'orange' }} type="file" onChange={fileChangedHandler} />
                    </div>
                </div>

                <div className="mx-5 px-5">
                    <Row className="mb-3" xs={1} md={2}>
                        <Form.Group className="mb-3  " >
                            <Form.Label>Ürün Adı</Form.Label>
                            <Form.Control onChange={() => addPost()} />
                        </Form.Group>
                        <Form.Group className="mb-3 " style={{ width: '15rem' }}>
                            <Form.Label>Fiyat</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group className="mb-3 ">
                            <Form.Label>Kategori</Form.Label>
                            <Form.Select aria-label="Default select">
                                <option ></option>
                                <option value="1">men's clothing</option>
                                <option value="2">jewelery</option>
                                <option value="3">electronics</option>
                                <option value="4">women's clothing</option>


                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 " style={{ width: '15em' }} >
                            <Form.Label>Stok</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 " style={{ width: '80%' }} >
                        <Form.Label>Açıklama</Form.Label>
                        <Form.Control as="textarea" rows={3} />

                        <div className="mb-3  my-5" style={{ float: "Right" }}>
                            <Button className="mx-2" variant="danger" as="input" type="reset"></Button>
                            <Button onClick={() => addPost(id)} className="mx-2" variant="danger" as="input" type="reset" value="Kaydet" />
                            
                        </div>
                    </Form.Group>

                </div>

            </div>
            
        </>
    )
}

export default Add