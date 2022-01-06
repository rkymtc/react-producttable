import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import { ArrowRightOutlined} from '@ant-design/icons';
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <>
      <table>
        <thead>
        <tr>
          <td>ürün resmi</td>
          <td>ürün adı</td>
          <td>ürün açıklaması</td>
          <td>fiyat</td>
          <td>detay</td>
        </tr>
        </thead>
        <tbody>
        {

          posts && posts.map((item,key) => {
            return (
              <tr key={key}>
                <td> <img src={item.image} width="60" height="60" /></td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td><Link to={'/postDetails/' + item.id} style={{ textDecoration: 'none', color: "black" }}><ArrowRightOutlined /></Link></td>
                
                <td></td>
              </tr>

            )
          })
        }
        </tbody>
      </table>
    </>

  );
};

export default Posts;
