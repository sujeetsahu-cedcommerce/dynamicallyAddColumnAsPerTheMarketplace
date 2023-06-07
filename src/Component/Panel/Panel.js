import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Menu } from "../../core/Menu";

const Panel = () => {
  const [RouteMenus, setRouteMenus] = useState([]);
  const naviagte = useNavigate();
  // console.log("Core Menu", Menu);
  // let marketPlace = "google";
  let marketPlace = "bwp_meta";
  // let marketPlace = "zoho";
  sessionStorage.setItem("marketplace", marketPlace);

  /**we can use the promises */
  const getMenues = () => {
    import(`../../${marketPlace}/Menu` /* webpackChunkName : "menus" */).then(
      (module) => {
        // console.log(module.Menu);
        const temp = Menu.concat(module.Menu);
        setRouteMenus(temp);
      }
    );
  };

  /**or we can also use the async await */
  // const getMenues = async () => {
  //   const menu = (await import(`../../bwp_meta/Menu`).then(module))
  //     .default;
  //   console.log("marketlace menu", menu);
  // };

  useEffect(() => {
    getMenues();
  }, []);

  return (
    <>
      <nav>
        {RouteMenus.map((item) => {
          return (
            <button
              key={item.path}
              onClick={() => {
                console.log("item", item);
                naviagte(item.path);
              }}
            >
              {item.content}
            </button>
          );
        })}
      </nav>
      <Routes>
        {RouteMenus.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={item.component}
            ></Route>
          );
        })}
      </Routes>
    </>
  );
};

export default Panel;
