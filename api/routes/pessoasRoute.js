const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.getPessoas);
router.get("/pessoas/:id", PessoaController.getOnePeople);
router.post("/pessoas", PessoaController.createPeople);
router.put("/pessoas/:id", PessoaController.modificPeople);
router.delete("/pessoas/:id", PessoaController.deletePeople);
module.exports = router;
