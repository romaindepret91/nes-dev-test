// import axios from "axios";

// /**
//  * Retrieve all products in the catalogue from the db
//  * @returns {Promise} Promise object represents all the products of the catalogue
//  */
// export async function getAllProducts() {
//   return await axios.get(`/api/products`);
// }
import { data } from "./data";

export default function getAllAccessories() {
  return data;
}
