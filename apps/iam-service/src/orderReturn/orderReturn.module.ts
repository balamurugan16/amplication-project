import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderReturnModuleBase } from "./base/orderReturn.module.base";
import { OrderReturnService } from "./orderReturn.service";
import { OrderReturnController } from "./orderReturn.controller";
import { OrderReturnResolver } from "./orderReturn.resolver";

@Module({
  imports: [OrderReturnModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderReturnController],
  providers: [OrderReturnService, OrderReturnResolver],
  exports: [OrderReturnService],
})
export class OrderReturnModule {}
