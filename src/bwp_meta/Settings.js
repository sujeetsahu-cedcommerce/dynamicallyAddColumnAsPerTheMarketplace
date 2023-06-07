import { Button } from "@cedcommerce/ounce-ui";

export const Setting = [
  {
    align: "center",
    dataIndex: "metrices",
    key: "matrices",
    title: "Metrices",
    width: 100,
    show: true,
  },
  {
    align: "center",
    dataIndex: "action",
    key: "action",
    title: "Action",
    width: 100,
    show: true,
  },
];

export const dataSource = [
  {
    action: <Button>Delete</Button>,
    metrices: "1-10",
  },
  {
    action: <Button>Delete</Button>,
    metrices: "1-8",
  },
  {
    action: <Button>Delete</Button>,
    metrices: "1-6",
  },
  {
    action: <Button>Delete</Button>,
    metrices: "1-4",
  },
];
