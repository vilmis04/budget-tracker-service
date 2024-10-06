import type { Request } from "express";
import { Headers } from "../constants.ts";
import { HttpStatus } from "../ErrorHandler/HttpStatus.ts";
import { ErrorHandler } from "../ErrorHandler/ErrorHandler.ts";

export class HttpHandler {
    static getUser(request: Request): ErrFirst<string> {
        const user = request.header(Headers.USER);
        if (!user) {
            return [ErrorHandler.build(HttpStatus.UNAUTHORIZED), null];
        }

        return [null, user];
    }
}
