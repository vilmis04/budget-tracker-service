import type { Router } from "express";
import { TransactionService } from "./service.ts";
import { Controller } from "../utils/Controller/Controller.ts";

// export class TransactionController {
//   private prefix = "/transaction";
//   private service = new TransactionService();

//   constructor(private app: Router, private router: Router) {}

//   public use() {
//     this.registerRoutes();
//     this.app.use(this.prefix, this.router);
//   }

//   private registerRoutes() {
//     this.router.get("/", (_req, res) => {
//       const result = this.service.getTransactions();
//       res.send(result);
//     });
//   }
// }

export class TransactionController extends Controller {
  private service = new TransactionService();

  constructor(app: Router, router: Router) {
    super(app, router, "/transactions");
  }

  registerRoutes() {
    this.router.get("/", (_req, res) => {
      const result = this.service.getTransactions();
      res.send(result);
    });
  }
}
