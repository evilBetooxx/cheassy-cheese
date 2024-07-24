var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class updateController {
    constructor(updateCase) {
        this.updateCase = updateCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { batch, quantity, state, startDate, endDate, userId } = req.body;
                const updatedCheese = yield this.updateCase.run(id, batch, quantity, state, new Date(startDate), new Date(endDate), userId);
                if (updatedCheese) {
                    res.json(updatedCheese);
                }
                else {
                    res.status(404).json({ message: "Cheese not found" });
                }
            }
            catch (error) {
                console.log(error);
                res.status(400).json({ message: error.message });
            }
        });
    }
}
