import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import BlogDetails from "../BlogDetails/BlogDetails";
import blog from "/portfolio web/src/assets/blog.jpg";
import "./Blog.css";
const Blog = () => {
  let location = useLocation();
  const [data, setData] = useState([]);
  // const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/blogger/v3/blogs/2399953/pages?key=AIzaSyBsArr2lK3rFvVek6QDvcvmj6uruWSpct0"
      );
      setData(response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);
  // const id = navigate(`/blog/${e.id}`);

  return (
    <>
      <div className="blog">
        {data.map((e) => (
          <Card key={e.id} style={{ width: "70%" }}>
            <Card.Img variant="top" src={blog} />
            <Card.Body>
              <Card.Title>{e.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Publish {e.published}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Link
                to={`/blog/${e.id}`}
                state={{ state: { data: data, id: e.id } }}>
                View Details
              </Link>
              {/* <Link
                to={{
                  pathname: `/blog/${e.id}`,
                  state: { postId: e.id }, // Include the post ID in the state
                }}>
                View Details
              </Link> */}
              {/* <Link to={id}>View Details</Link> */}
            </Card.Body>
          </Card>
        ))}{" "}
      </div>
    </>
  );
};

export default Blog;
