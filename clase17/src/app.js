import express from "express";
import mongoose from "mongoose";
import orderModel from "./models/order.js";
import { studentModel } from "./models/students.js";
import { generateRandomName } from "./randomNames.js";
import studentRouter from "./routes/students.route.js";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students", studentRouter);
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

const environment = async () => {
  await mongoose.connect(
    "mongodb+srv://coderhouse:dfbx134uStiXdaBs@cluster0.pnpufdn.mongodb.net/pizzeria"
  );

  //paginacion

  // agregations
  /* let students = await studentModel.aggregate([
    { $sort: { grade: -1 } },

    { $group: { _id: "$gender", promedio: { $avg: "$grade" } } },
    { $sort: { promedio: -1 } },

    //{ $match: { size: "medium" } },//se comenta  para mostrar el ejemplo de aplicar todas  las pizzas
    /* { $group: { _id: "$group", totalQuantity: { $sum: "$quantity" } } },
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

  console.log(students);*/
  /*let myData = [];
  for (let x = 0; x <= 100; x++) {
    myData.push(generateRandomName());
  }
  console.log(myData);
  let result = await studentModel.insertMany(myData);
*/
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
  /*let orders = await orderModel.aggregate([
    //{ $match: { size: "medium" } },//se comenta  para mostrar el ejemplo de aplicar todas  las pizzas
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
*/
  //console.log(orders);

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

const server = app.listen(3434, () => console.log(`Listening on PORT ${3434}`));
