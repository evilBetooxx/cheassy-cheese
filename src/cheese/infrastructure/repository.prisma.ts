import { PrismaClient } from "@prisma/client";
import { ICheeseRepository } from "../domain/icheese.repository";
import { Cheese } from "../domain/cheese";

export class CheeseRepositoryPrisma implements ICheeseRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getByUser(id: string): Promise<Cheese[]> {
    return await this.prisma.cheese.findMany({
      where: { id },
    });
  }

  async create(cheese: Cheese): Promise<Cheese> {
    const createdCheese = await this.prisma.cheese.create({
      data: {
        batch: cheese.batch,
        quantity: cheese.quantity,
        state: cheese.state,
        startDate: cheese.startDate,
        endDate: cheese.endDate,
        userId: cheese.userId,
      },
    });
    return new Cheese(
      createdCheese.id,
      createdCheese.batch,
      createdCheese.quantity,
      createdCheese.state,
      createdCheese.startDate,
      createdCheese.endDate,
      createdCheese.userId
    );
  }

  async update(cheese: Cheese): Promise<Cheese> {
    const updatedCheese = await this.prisma.cheese.update({
      where: { id: cheese.id },
      data: {
        batch: cheese.batch,
        quantity: cheese.quantity,
        state: cheese.state,
        startDate: cheese.startDate,
        endDate: cheese.endDate,
        userId: cheese.userId,
      },
    });
    return new Cheese(
      updatedCheese.id,
      updatedCheese.batch,
      updatedCheese.quantity,
      updatedCheese.state,
      updatedCheese.startDate,
      updatedCheese.endDate,
      updatedCheese.userId
    );
  }

  async delete(id: string): Promise<void> {
    await this.prisma.cheese.delete({
      where: { id },
    });
  }
}
