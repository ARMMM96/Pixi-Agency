const axios = require("axios");
require("dotenv").config();

const APILINK = process.env.API_URL;

exports.fetchAllProducts = async () => {
  const response = await axios.get(`${APILINK}`);
  return response.data;
};

exports.fetchProductById = async (id) => {
  const response = await axios.get(`${APILINK}/${id}`);
  return response.data;
};

exports.createProduct = async (productData) => {
  const response = await axios.post(`${APILINK}`, productData);
  return response.data;
};

exports.updateProduct = async (id, productData) => {
  const response = await axios.put(`${APILINK}/${id}`, productData);
  return response.data;
};

exports.deleteProduct = async (id) => {
  await axios.delete(`${APILINK}/${id}`);
};
