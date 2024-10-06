import type { Router } from "express";
import { TransactionService } from "./service.ts";
import { Controller } from "../utils/Controller/Controller.ts";
import { ErrorHandler } from "../utils/ErrorHandler/ErrorHandler.ts";
import { HttpHandler } from "../utils/HttpHandler/HttpHandler.ts";
import { HttpStatus } from "../utils/ErrorHandler/HttpStatus.ts";

export class TransactionController extends Controller {
  private service = new TransactionService();

  constructor(app: Router, router: Router) {
    super(app, router, "/transactions");
  }

  registerRoutes(): void {
    this.get("/", (_req, res) => {
      const [error, list] = this.service.getAll();
      if (error) {
        ErrorHandler.send(error, res);
        return;
      }
      res.send(list);
    });

    this.get("/:id", (req, res) => {
      const [error, list] = this.service.get(req.params.id);
      if (error) {
        ErrorHandler.send(error.forward(this.prefix), res);
        return;
      }
      res.send(list);
    });

    this.post("/", (req, res) => {
      const [authError, username] = HttpHandler.getUser(req);
      if (authError) {
        ErrorHandler.send(authError, res);
        return;
      }

      const [error, list] = this.service.create(username, req.body);
      if (error) {
        ErrorHandler.send(error, res);
        return;
      }
      res.status(HttpStatus.CREATED).send(list);
    });

    this.put("/:id", (req, res) => {
      const [error, list] = this.service.update(req.params.id, req.body);
      if (error) {
        ErrorHandler.send(error.forward(this.prefix), res);
        return;
      }
      res.send(list);
    });

    this.delete("/:id", (req, res) => {
      const [error, list] = this.service.delete(req.params.id);
      if (error) {
        ErrorHandler.send(error.forward(this.prefix), res);
        return;
      }
      res.send(list);
    });
  }
}
