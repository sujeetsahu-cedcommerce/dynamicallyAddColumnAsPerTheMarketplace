import { Grid } from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";

const AppManager = () => {
  const [Column, setColumn] = useState();
  const [DataSource, setDataSource] = useState();
  const columns = [
    {
      align: "center",
      dataIndex: "name",
      key: "name",
      title: "Name",
      width: 100,
      show: true,
    },
    {
      align: "center",
      dataIndex: "age",
      key: "age",
      title: "Age",
      width: 100,
      show: true,
    },
    {
      align: "center",
      dataIndex: "address",
      key: "address",
      title: "Address",
      width: 100,
      show: true,
    },
  ];
  const dataSource = [
    {
      address: "10 Downing Street",
      age: 32,
      key: "1",
      name: "Mike",
    },
    {
      address: "10 Downing Street",
      age: 42,
      key: "2",
      name: "John",
    },
    {
      address: "10 Downing Street",
      age: 32,
      key: "13",
      name: "Mike",
    },
    {
      address: "10 Downing Street",
      age: 42,
      key: "",
      name: "John",
    },
  ];
  const mktplace = sessionStorage.getItem("marketplace");
  const getDatas = () => {
    import(
      `../../../../${mktplace}/Settings` /* webpackChunkName : "Settings&&dataSource" */
    ).then((module) => {
      const tempSetting = columns.concat(module.Setting);
      const Setting = tempSetting.filter((item) => {
        if (item.show) return item;
      });
      const tempDataSource = [];
      dataSource.forEach((item, index) => {
        item = { ...item, ...module.dataSource[index] };
        tempDataSource.push(item);
      });
      setColumn(Setting);
      setDataSource(tempDataSource);
    });
  };

  useEffect(() => {
    getDatas();
  }, [mktplace]);

  return (
    <div>{columns && <Grid columns={Column} dataSource={DataSource} />}</div>
  );
};

export default AppManager;
