import { axiosInstance } from "../api/axios"

export const getPopularMovies = (page) => {
    return axiosInstance.get(`/popular?language=en-US&page=${page}`);
}

export const getUpcomningMovies = (page) => {
    return axiosInstance.get(`/popular?language=en-US&page=${page}`)
}

export const getTopRatedMovies = (page) => {
    return axiosInstance.get(`/top_rated?language=en-US&page=${page}`)
}