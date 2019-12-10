import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
})


export const register = payload => api.post(`/register`, payload).then((response)=>{console.log(response)})
export const login = payload => api.post(`/login`, payload).then((response)=>{return response})
export const getMonthWorkout = () => api.get()

const apis ={
    register,
    login
}
export default apis