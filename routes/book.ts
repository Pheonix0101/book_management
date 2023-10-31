import express from "express";
import {
  insertRecord,
  getData,
  updatebyBookId,
  remove,
  findbyId,
} from "../controller/book_controller";

const router = express.Router();

router.post("/insert", insertRecord);
router.get("/get", getData);
router.post("/update/:book_id", updatebyBookId);
router.delete("/delete", remove);
router.post("/findbyId/:book_id", findbyId);

export default router;
