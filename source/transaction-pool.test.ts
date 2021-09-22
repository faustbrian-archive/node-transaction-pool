import { Transaction } from "./transaction";
import { TransactionPool } from "./transaction-pool";

it("should push and pull and a transaction", () => {
  const subject = new TransactionPool();
  const transaction = new Transaction(1, 1, 1);

  expect(subject.size()).toStrictEqual(0);

  subject.push(transaction);

  expect(subject.size()).toStrictEqual(1);

  subject.pull(transaction.id());

  expect(subject.size()).toStrictEqual(0);
});
