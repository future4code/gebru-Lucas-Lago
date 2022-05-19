import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";
import TripDetailPage from "../Pages/TripDetailPage";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage/> }/>
                <Route path="/trips/list" element={ <ListTripsPage/> }/>
                <Route path="/trips/application" element={ <ApplicationFormPage/> }/>
                <Route path="/login" element={ <LoginPage/> }/>
                <Route path="/admin/trips/list" element={ <AdminHomePage/> }/>
                <Route path="/admin/trips/create" element={ <CreateTripPage/> }/>
                <Route path="/admin/trips/:id" element={ <TripDetailPage/> }/>
            </Routes>
        </BrowserRouter>
    )
}
