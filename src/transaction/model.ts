import type { TransactionType } from "./types.ts";

export class Transaction {
  constructor(
    private id: string,
    private dateCreated: Date,
    private dateModified: Date,
    private description: string | null,
    private amount: number,
    private type: TransactionType,
    private userId: string,
    private category: string,
    private subcategory: string | null,
  ) {}

  public getId(): string | null {
    return this.id;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getType(): TransactionType {
    return this.type;
  }

  public getCategory(): string {
    return this.category;
  }

  public getSubcategory(): string | null {
    return this.subcategory;
  }

  public getDateCreated(): Date {
    return this.dateCreated;
  }

  public getDateModified(): Date {
    return this.dateModified;
  }

  public getDescription(): string | null {
    return this.description;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public setType(type: TransactionType): void {
    this.type = type;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  public setSubcategory(subcategory: string): void {
    this.subcategory = subcategory;
  }
}
