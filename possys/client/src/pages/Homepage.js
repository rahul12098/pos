import React, { useState, useEffect } from "react";
import DefaultLayout from "./../components/DefaultLayout";
import axios from 'axios';
import ItemList from "../components/ItemList";
import { Col, Row } from 'antd';


const Homepage = () => {
  const [itemsData, setItemsData] = useState([]); //empty array

  useEffect(() => {

    const getAllItems = async () => {

      try {
        const { data } = await axios.get("http://localhost:5000/api/items/get-item");
        setItemsData(data);
        console.log(data);
      }
      catch (error) {
        console.log(error);
      }
    }
    getAllItems();
  },[]);
  return (
    <DefaultLayout>
      <Row>
        {
          itemsData.map(item =>(
            <Col xs={24} lg={6} md={12} sm={6}>
            <ItemList item={item}/>
            </Col>
          ))
        }
      </Row>
      
    </DefaultLayout>
  );
};

export default Homepage;