import { logger } from "../logger.ts";
import { type HttpStatus, statusCodeNames } from "./HttpStatus.ts";
import type { Response } from "express";

export class ApiError extends Error implements ApiError {
    constructor(
        message: string,
        public statusCode: HttpStatus,
        public exceptions?: Record<string, string>,
    ) {
        super(message);
    }

    public forward(prefix?: string): ApiError {
        if (prefix) {
            this.message = `${prefix}: ${this.message}`;
        }

        return this;
    }
}

export class ErrorHandler {
    public static build(
        statusCode: HttpStatus,
        message?: string,
        exceptions?: Record<string, string>,
    ): ApiError {
        return new ApiError(
            message ?? statusCodeNames[statusCode],
            statusCode,
            exceptions,
        );
    }

    public static send(error: ApiError, res: Response): void {
        const { message, statusCode, exceptions } = error;
        logger.error(message);
        res.status(statusCode).send({
            message,
            statusCode,
            exceptions,
        });
    }
}
