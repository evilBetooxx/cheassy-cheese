var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Cheese } from "../../domain/cheese";
export class create {
    constructor(cheeseRepository) {
        this.cheeseRepository = cheeseRepository;
    }
    run(batch, quantity, state, startDate, endDate, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cheese = new Cheese("", batch, quantity, state, startDate, endDate, userId);
            return this.cheeseRepository.create(cheese);
        });
    }
}
