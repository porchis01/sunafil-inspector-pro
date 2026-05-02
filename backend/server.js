import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { observacion } = req.body;

  // respuesta temporal (luego conectamos PDFs)
  res.json({
    rgi: true,
    nr: 25,
    nivel: "Intolerable (IT)",
    normas_vulneradas: [
      "Ley 29783 - Art. 21",
      "DS 005-2012-TR - Art. 38"
    ],
    medida_inspectiva: "Paralización de trabajos"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor activo en puerto", PORT);
});