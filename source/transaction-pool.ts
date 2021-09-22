import { Transaction } from "./transaction";

export class TransactionPool {
  readonly #items: Record<string, Transaction> = {};

  public size(): number {
    return Object.keys(this.#items).length;
  }

  public push(transaction: Transaction): void {
    this.#items[transaction.id()] = transaction;
  }

  public pull(id: string): Transaction {
    const transaction: Transaction | undefined = this.#items[id];

    if (transaction === undefined) {
      throw new Error(`Transaction ${id} does not exist.`);
    }

    delete this.#items[id];

    return transaction;
  }
}
