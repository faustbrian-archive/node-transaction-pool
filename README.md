**You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/faustbrian).**

---

# @faustbrian/node-transaction-pool

[![npm version](https://badgen.net/npm/v/@faustbrian/node-transaction-pool)](https://npm.im/@faustbrian/node-transaction-pool)

## Installation

```
pnpm install @faustbrian/node-transaction-pool
```

## Usage

```ts
import { Transaction, TransactionPool } from "@faustbrian/node-transaction-pool";

const transactionPool = new TransactionPool();
const transaction = new Transaction(1, 1, 1);

console.log(subject.size()) // 0

subject.push(transaction);

console.log(subject.size()) // 1

subject.pull(transaction.id());

console.log(subject.size()) // 0
```

## License

This is an open-sourced software licensed under the [AGPL-3.0-or-later](LICENSE).
