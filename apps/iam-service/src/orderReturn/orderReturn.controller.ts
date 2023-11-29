import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderReturnService } from "./orderReturn.service";
import { OrderReturnControllerBase } from "./base/orderReturn.controller.base";

@swagger.ApiTags("orderReturns")
@common.Controller("orderReturns")
export class OrderReturnController extends OrderReturnControllerBase {
  constructor(
    protected readonly service: OrderReturnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
