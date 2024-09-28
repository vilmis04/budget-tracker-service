import type { RequestHandler, Router } from "express";

export abstract class Controller {
  abstract registerRoutes(): void;

  constructor(
    private readonly app: Router,
    protected readonly router: Router,
    protected readonly prefix: string,
  ) {}

  public use(): void {
    this.registerRoutes();
    this.app.use(this.prefix, this.router);
  }

  protected get(
    path: string,
    callback: RequestHandler,
  ): void {
    this.router.get(path, callback);
  }

  protected put(
    path: string,
    callback: RequestHandler,
  ): void {
    this.router.put(path, callback);
  }

  protected post(
    path: string,
    callback: RequestHandler,
  ): void {
    this.router.post(path, callback);
  }

  protected delete(
    path: string,
    callback: RequestHandler,
  ): void {
    this.router.delete(path, callback);
  }
}
