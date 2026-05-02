import express from "express";
import { evaluarRiesgo } from "../services/rgiService.js";

const router = express.Router();

router.post("/analyze", (req, res) => {
  const { observacion } = req.body;

  const resultado = evaluarRiesgo(observacion);

  res.json(resultado);
});

export default router;