import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Login } from "../pages/Login";
import { RegisterEntity } from "../pages/RegisterEntity";
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import { SelectEntity } from "../pages/SelectEntity";
import { RequestMoney } from "../pages/RequestMoney";

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signin" element={<Login />} />
                    <Route
                        path="/register_entity"
                        element={
                            <PrivateRoute>
                                <RegisterEntity />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route
                        path="/request_money"
                        element={
                            <PrivateRoute>
                                <RequestMoney />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/Select_entity"
                        element={
                            <PrivateRoute>
                                <SelectEntity />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
