import { Express, Router, Request, Response } from "express";
import { Product } from "../utils/products/Product";
import { middlewareAuth } from "./middlewares/middlewares";

import {
  getProducts,
  newProduct,
  deleteByID,
  upgradeById,
  getProductById,
} from "../utils/products/products";
const router = Router();

router.get("/:id?", (req, res) => {
  if (req.params.id) {
    const product = getProductById(req.params.id)
      .then((resp) => {
        res.status(201).send(resp);
      })

      .catch((err) => {
        res.status(400).json();
      });
  } else {
    const products = getProducts()
      .then((resp) => {
        res.status(201).send(resp);
      })

      .catch((err) => {
        res.status(400).json();
      });
  }
});

router.post("/",middlewareAuth, (req: Request, res: Response) => {
  const body = req.body;

  const product: Product = new Product(
    body.timestamp,
    body.nombre,
    body.descripcion,
    body.foto,
    body.precio,
    body.stock
  );
  newProduct(product).then((resp) => {
    res.status(201).send(resp);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

router.delete("/:id?",middlewareAuth, (req: Request, res: Response) => {
  if(req.params.id){

    deleteByID(req.params.id)
    .then((resp) => {
      res.status(201).send(resp);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  }
  else
    res.send("Id no ingresado")

});


export { router };
