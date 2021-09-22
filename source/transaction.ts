import { hash } from "@faustbrian/node-sha256";

export class Transaction {
  readonly #id: string;
  readonly #amount: number;
  readonly #fee: number;
  readonly #nonce: number;

  public constructor(amount: number, fee: number, nonce: number) {
    this.#id = hash(amount.toString()).toString("hex");
    this.#amount = amount;
    this.#fee = fee;
    this.#nonce = nonce;
  }

  public id(): string {
    return this.#id;
  }

  public amount(): number {
    return this.#amount;
  }

  public fee(): number {
    return this.#fee;
  }

  public nonce(): number {
    return this.#nonce;
  }
}
