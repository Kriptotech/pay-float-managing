import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Login } from "../pages/Login";
import { RegisterEntity } from "../pages/RegisterEntity";
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import { SelectEntity } from "../pages/SelectEntity";
import { CoinSelled } from "../pages/CoinSelled";
import { Market } from "../pages/Market";
import { CoinBeeingSelled } from "../pages/CoinBeeingSelled";
import { AproveSellers } from "../pages/AproveSellers";
import { AproveSeller } from "../pages/AproveSeller";
import { AprovedSells } from "../pages/AprovedSells";
import { AprovedSell } from "../pages/AprovedSell";
import { UnaprovedSells } from "../pages/UnaprovedSells";
import { UnaprovedSell } from "../pages/UnaprovedSell";

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
                    <Route
                        path="/coin_selled"
                        element={
                            <PrivateRoute>
                                <CoinSelled />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/market"
                        element={
                            <PrivateRoute>
                                <Market />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/coin_beeing_selled"
                        element={
                            <PrivateRoute>
                                <CoinBeeingSelled />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/aprove_sellers"
                        element={
                            <PrivateRoute>
                                <AproveSellers />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/aprove_seller"
                        element={
                            <PrivateRoute>
                                <AproveSeller />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/aproved_sells"
                        element={
                            <PrivateRoute>
                                <AprovedSells />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/aproved_sell"
                        element={
                            <PrivateRoute>
                                <AprovedSell />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/unaproved_sells"
                        element={
                            <PrivateRoute>
                                <UnaprovedSells />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/unaproved_sell"
                        element={
                            <PrivateRoute>
                                <UnaprovedSell />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
