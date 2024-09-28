import type { Transaction } from "../model.ts";

export interface CreateTransactionDto
    extends Omit<Transaction, "id" | "dateCreated" | "dateModified"> {}
