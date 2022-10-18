import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

export const getAllAxios = async () => {
    const request = axios.get(baseUrl); 
    const response = await request;
    return response.data;
}

export const createAxios = async newObject => {
    const request = axios.post(baseUrl, newObject);
    const response = await request;
    return response.data;
}

export const updateAxios = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    const response = await request;
    return response.data;
}

export const deleteAxios = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    const response = await request;
    return response.data;
}