import { Router } from "express";
import {
  GetByUserController,
  CreateController,
  UpdateController,
} from "./dependencies";

const CheeseRouter = Router();

CheeseRouter.get("/:id", GetByUserController.run.bind(GetByUserController));
CheeseRouter.post("/", CreateController.run.bind(CreateController));
CheeseRouter.put("/:id", UpdateController.run.bind(UpdateController));

export default CheeseRouter;