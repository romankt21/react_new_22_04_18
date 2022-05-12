import axios from "axios";
import basseURL from "../constants/urls";

const axiosService =axios.create({basseURL});

export {axiosService}