import { ICheeseRepository } from "../../domain/icheese.repository";
import { Cheese } from "../../domain/cheese";

export class updateState {
  constructor(private cheeseRepository: ICheeseRepository) {}

  async run(
    id: string,
    state: string,
  ): Promise<Cheese | null> {
    const findCheese = await this.cheeseRepository.getById(id);
    const updatedCheese = new Cheese(
        findCheese.id,
        findCheese.batch,
        findCheese.quantity,
        state,
        findCheese.startDate,
        findCheese.endDate,
        findCheese.userId
    )

    return this.cheeseRepository.update(updatedCheese);
  }
}
