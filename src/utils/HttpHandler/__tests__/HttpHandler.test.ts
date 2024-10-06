import { expect } from "jsr:@std/expect";
import { Headers } from "../../constants.ts";
import { HttpHandler } from "../HttpHandler.ts";
import type { Request } from "express";
import { HttpStatus } from "../../ErrorHandler/HttpStatus.ts";
import { statusCodeNames } from "../../ErrorHandler/HttpStatus.ts";

const request = {
    header: (_name: string): string | undefined => Headers.USER,
};

const requestWithoutUser = {
    header: (_name: string): string | undefined => undefined,
};

Deno.test("HttpHandler.getUser should return user when header is present", () => {
    const [error, user] = HttpHandler.getUser(
        request as unknown as Request,
    ); // casting for simplicity
    expect(error).toBeNull();
    expect(user).toBe(Headers.USER);
});

Deno.test("HttpHandler.getUser should return error when header is not present", () => {
    const [error, user] = HttpHandler.getUser(
        requestWithoutUser as unknown as Request,
    ); // casting for simplicity
    expect(user).toBeNull();
    expect(error?.statusCode).toBe(HttpStatus.UNAUTHORIZED);
    expect(error?.message).toBe(statusCodeNames[HttpStatus.UNAUTHORIZED]);
});
