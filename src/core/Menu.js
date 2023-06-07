import React from "react";
import AppManager from "../Component/Panel/Component/appManager/AppManager";
import Product from "../Component/Panel/Component/product/Product";
import Setting from "../Component/Panel/Component/setting/Setting";
// type roleI = "admin" | "user" | "bda";

export const Menu = [
  {
    id: "appManager",
    content: "App Manager",
    path: "/apps",
    component: <AppManager />,
  },
  {
    id: "product",
    content: "Product",
    path: "/product",
    component: <Product />,
  },
  {
    id: "setting",
    content: "Setting",
    path: "/setting",
    component: <Setting />,
  },
];
