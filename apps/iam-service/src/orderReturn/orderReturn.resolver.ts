import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrderReturnResolverBase } from "./base/orderReturn.resolver.base";
import { OrderReturn } from "./base/OrderReturn";
import { OrderReturnService } from "./orderReturn.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderReturn)
export class OrderReturnResolver extends OrderReturnResolverBase {
  constructor(
    protected readonly service: OrderReturnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
