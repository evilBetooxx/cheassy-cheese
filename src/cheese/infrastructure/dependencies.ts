import { CheeseRepositoryPrisma } from "./repository.prisma";
import { getController } from "./controllers/getByUser.controller";
import { createController } from "./controllers/create.controller";
import { updateController } from "./controllers/update.controller";
import { getByUser } from "../application/use-cases/getByUser";
import { create } from "../application/use-cases/create";
import { update } from "../application/use-cases/update";
import { deleteController } from "./controllers/delete.controller";
import { Delete } from "../application/use-cases/delete";


const cheeseRepository = new CheeseRepositoryPrisma();

const getByUserCase = new getByUser(cheeseRepository);
export const GetByUserController = new getController(getByUserCase);

const createCase = new create(cheeseRepository);
export const CreateController = new createController(createCase);

const updateCase = new update(cheeseRepository);
export const UpdateController = new updateController(updateCase);

const deleteByIdCase = new Delete(cheeseRepository);
export const DeleteByIdController = new deleteController(deleteByIdCase);