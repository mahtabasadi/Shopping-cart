import Layout from "../Layout/Layout";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import http from "../services/httpService";
const HomePage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);
  useEffect(() => {
    http.get("/product").then((res) => console.log(res.data));
  }, []);
  return (
    <Layout>
      <div className="container">
        {categories.map((category) => (
          <li style={{ display: "block" }}>
            <Link to={`/products/category/${category.split(" ").join("-")}`}>{category}</Link>
          </li>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
