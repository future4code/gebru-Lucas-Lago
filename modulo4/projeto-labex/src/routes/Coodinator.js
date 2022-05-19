import { Navigate } from "react-router-dom"

export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToTripsPage = (navigate) => {
    navigate('/trips/list')
}

export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToApplicationFormPage = (navigate) => {
    navigate('/trips/application')
}

export const goToAdminHomePage = (navigate) => {
    navigate('/admin/trips/list')
}

export const goToCreateTripPage = (navigate) => {
    navigate('/admin/trips/create')
}

export const goToTripDetailPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goToBackPage = (navigate) => {
    navigate(-1)
}