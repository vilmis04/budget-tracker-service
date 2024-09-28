import { ErrorHandler } from "../utils/ErrorHandler/ErrorHandler.ts";
import { HttpStatus } from "../utils/ErrorHandler/HttpStatus.ts";
import type { CreateTransactionDto } from "./dto/createTransactionDto.ts";
import type { Transaction } from "./model.ts";

export class TransactionService {
  constructor() {}

  public getAll(): ErrFirst<Transaction[]> {
    const list: Transaction[] = [];

    return [null, list];
  }

  public get(id: UUID): ErrFirst<Transaction> {
    return [
      ErrorHandler.build(
        HttpStatus.NOT_FOUND,
        `service: transaction with id ${id} not found`,
      ),
      null,
    ];
  }

  public create(_transactionDto: CreateTransactionDto): ErrFirst<Transaction> {
    return [
      ErrorHandler.build(HttpStatus.NOT_IMPLEMENTED),
      null,
    ];
  }

  public update(_id: UUID, _transaction: Transaction): ErrFirst<Transaction> {
    return [ErrorHandler.build(HttpStatus.NOT_IMPLEMENTED), null];
  }

  public delete(_id: UUID): ErrFirst<UUID> {
    return [ErrorHandler.build(HttpStatus.NOT_IMPLEMENTED), null];
  }
}
