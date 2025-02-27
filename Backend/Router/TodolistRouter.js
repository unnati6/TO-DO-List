import express from 'express';
import { adddata, deletedata, getd } from '../Controller/TodolistController.js';
const router = express.Router();
router.post("/Addlist",adddata);
router.get("/Getdata",getd)
router.delete('/delete/:id',deletedata)
export default router;