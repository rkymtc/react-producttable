import React, { useState, useEffect } from 'react';
import Pagination from './Pagination'
import axios from 'axios'
import Posts from './Posts'
import { Link } from 'react-router-dom';
import './styles.css';


function List() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://fakestoreapi.com/products')
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>
  }
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(posts.length / postsPerPage)

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h6 className="">Ürün listesi</h6>
        <div className="new btn btn-lg">
          <Link to='/newAdd' style={{ textDecoration: 'none', color: "white" }}>Yeni Ekle</Link>
        </div>
      </div>
      <Posts posts={currentPosts} />
      <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default List;