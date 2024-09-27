import type { TransactionType } from "./types.ts";

export class Transaction {
  private id: string | null = null;
  private dateCreated: Date;
  private dateModified: Date;
  private description: string | null = null;

  constructor(private amount: number, private type: TransactionType) {
    this.dateCreated = new Date();
    this.dateModified = new Date();
  }

  public getId() {
    return this.id;
  }

  public getAmount() {
    return this.amount;
  }

  public getType() {
    return this.type;
  }

  public getDateCreated() {
    return this.dateCreated;
  }

  public getDateModified() {
    return this.dateModified;
  }

  public getDescription() {
    return this.description;
  }

  public setDateModified() {
    this.dateModified = new Date();
  }

  public setAmount(amount: number) {
    this.amount = amount;
  }

  public setType(type: TransactionType) {
    this.type = type;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public setId(id: string) {
    this.id = id;
  }
}
