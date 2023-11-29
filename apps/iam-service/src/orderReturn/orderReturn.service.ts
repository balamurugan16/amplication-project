import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderReturnServiceBase } from "./base/orderReturn.service.base";

@Injectable()
export class OrderReturnService extends OrderReturnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
