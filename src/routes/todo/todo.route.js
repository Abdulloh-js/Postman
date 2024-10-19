import {Router} from "express";
import { todoAdd, todoEdit, todoGetid, todoGetall } from "../../controllers/todo/todo.controller.js";

export const router =Router();



router.post('/add', todoAdd);

router.put("/edit/:id", todoEdit );

router.get("/get/:id", todoGetid);

router.get("/get-all", todoGetall);