import { Prisma } from "@prisma/client";
import { PrismaService } from "../../prisma/PrismaService";

export default class UserService {
  async create(user: Prisma.UserCreateInput) {
    const data = await PrismaService.user.create({ data: user });

    return data;
  }

  async getById(id: number) {
    const data = await PrismaService.user.findUnique({ where: { id } });

    return data;
  }

  async getUser() {
    const users = await PrismaService.user.findMany();

    return users;
  }

  async update(id: number, user: Prisma.UserUpdateInput) {
    const data = await PrismaService.user.update({ where: { id }, data: user });

    return data;
  }
}
