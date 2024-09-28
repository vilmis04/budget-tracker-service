import type { Router } from "express";
import { TransactionService } from "./service.ts";
import { Controller } from "../utils/Controller/Controller.ts";

export class TransactionController extends Controller {
  private service = new TransactionService();

  constructor(app: Router, router: Router) {
    super(app, router, "/transactions");
  }

  registerRoutes(): void {
    this.router.get("/", (_req, res) => {
      const result = this.service.getAll();
      res.send(result);
    });
  }
}
