import express from "express";
import mongoose from "mongoose";
import orderModel from "./models/order.js";

//const app = express();

const environment = async () => {
  await mongoose.connect(
    "mongodb+srv://coderhouse:dfbx134uStiXdaBs@cluster0.pnpufdn.mongodb.net/pizzeria"
  );
  /*
  let result = await orderModel.insertMany([
    {
      name: "Turca",
      size: "small",
      price: 20,
      quantity: 5,
      date: new Date().toString(),
    },
    {
      name: "Fugazeta",
      size: "medium",
      price: 7,
      quantity: 16,
      date: new Date().toString(),
    },
    {
      name: "Provolone",
      size: "large",
      price: 30,
      quantity: 8,
      date: new Date().toString(),
    },
    {
      name: "Jamon y Morron",
      size: "medium",
      price: 15,
      quantity: 16,
      date: new Date().toString(),
    },
    {
      name: "Roqueford",
      size: "small",
      price: 7,
      quantity: 20,
      date: new Date().toString(),
    },
  ]);
*/
  let orders = await orderModel.aggregate([
    { $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } },
    { $sort: { totalQuantity: -1 } },
    { $group: { _id: 1, orders: { $push: "$$ROOT" } } },
    {
      $project: {
        _id: 0,
        order: "$orders",
      },
    },
    {
      $merge: {
        into: "reports",
      },
    },
  ]);

  console.log(orders);

  /*let result = await orderModel.insertMany([
    {
      name: "Turca",
      size: "small",
      price: 20,
      quantity: 5,
      date: new Date().toString(),
    },
    {
      name: "Fugazeta",
      size: "medium",
      price: 7,
      quantity: 3,
      date: new Date().toString(),
    },
    {
      name: "Provolone",
      size: "large",
      price: 30,
      quantity: 8,
      date: new Date().toString(),
    },
    {
      name: "Jamon y Morron",
      size: "medium",
      price: 15,
      quantity: 4,
      date: new Date().toString(),
    },
    {
      name: "Roqueford",
      size: "small",
      price: 7,
      quantity: 20,
      date: new Date().toString(),
    },
  ]);*/

  //console.log(result);
};

environment();
