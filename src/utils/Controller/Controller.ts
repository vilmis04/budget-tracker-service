import type { Router } from "express";

export abstract class Controller {
  abstract registerRoutes(): void;

  constructor(
    private app: Router,
    protected router: Router,
    private prefix: string,
  ) {}

  public use(): void {
    this.registerRoutes();
    this.app.use(this.prefix, this.router);
  }
}
