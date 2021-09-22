import { Transaction } from "./transaction";

it("should create a transaction with a hash", () => {
  const subject = new Transaction(1, 1, 1);

  expect(subject.id()).toStrictEqual(
    "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b",
  );
  expect(subject.amount()).toStrictEqual(1);
  expect(subject.fee()).toStrictEqual(1);
  expect(subject.nonce()).toStrictEqual(1);
});
