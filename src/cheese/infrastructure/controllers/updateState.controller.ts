import { Request, Response } from "express";
import { updateState } from "../../application/use-cases/updateState";

export class updateStateController {
  constructor(private updateStateCase: updateState) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { state } = req.body;
      const updatedCheese = await this.updateStateCase.run(
        id,
        state,
      );
      if (updatedCheese) {
        res.json(updatedCheese);
      } else {
        res.status(404).json({ message: "Cheese not found" });
      }
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}
