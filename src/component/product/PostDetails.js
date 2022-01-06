import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom";

function PostDetails() {
    const { id } = useParams()
    const [postDetails, setPostDetails] = useState({})

    const getPost = () => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setPostDetails(data);
            })
    }

    const deletePost = (id) => {

        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch('https://fakestoreapi.com/products/' + id, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                getPost();

            })
        alert('Siliniyor!')
    }


    useEffect(() => {

        fetch('https://fakestoreapi.com/products/' + id)
            .then((res) => res.json())
            .then((data) => {
                setPostDetails(data);
            })

    }, [])



    const addCountry = () => {

        alert("Kaydedildi")
    }
    return (

        <>
            <Link to="/post" style={{ textDecoration: 'none' }}> Geri Dön </Link>
            <div className="container d-flex justify-content-center"  >

                <div style={{ width: '10rem', height: '10rem', border: 1, borderRadius: "15px", borderStyle: "solid", borderColor: "gray", textAlign: "center" }}>
                    <img style={{ width: '7rem', height: '7rem', marginTop: "20px" }} src={postDetails?.image} />
                </div>
                <div className="mx-5 px-5">
                    <Row className="mb-3" xs={1} md={2}>
                        <Form.Group className="mb-3  " >
                            <Form.Label>Ürün Adı</Form.Label>
                            <Form.Control defaultValue={postDetails?.title} />
                        </Form.Group>
                        <Form.Group className="mb-3 " style={{ width: '15rem' }}>
                            <Form.Label>Fiyat</Form.Label>
                            <Form.Control defaultValue={postDetails?.price} />
                        </Form.Group>
                        <Form.Group className="mb-3 ">
                            <Form.Label>Kategori</Form.Label>
                            <Form.Select defaultValue="">
                                <option>{postDetails?.category}</option>

                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 " style={{ width: '15em' }} >
                            <Form.Label>Stok</Form.Label>
                            <Form.Control defaultValue={postDetails?.rating?.count} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 " style={{ width: '78%' }} >
                        <Form.Label>Açıklama</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={postDetails?.description} />

                        <div className="mb-3  my-5" style={{ float: "Right" }}>
                            <Button onClick={() => deletePost(id)} className="mx-2" variant="danger" as="input" type="reset" value="Ürünü Sil" />
                            <Button onClick={() => addCountry(id)} className="mx-2" variant="danger" as="input" type="reset" value="Kaydet" />

                        </div>
                    </Form.Group>

                </div>

            </div>






        </>
    )
}



export default PostDetails