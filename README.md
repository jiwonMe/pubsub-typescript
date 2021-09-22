# pubsub-ts

## Usage
```ts
import { PubSub } from "./pubsub";

interface TOPICS {
    'ADD': (a: number, b: number) => number;
    'GET_USER_ID': (userName: string) => string;
}

const pubsub = new PubSub<TOPICS>();

pubsub.sub('ADD', (a: number, b: number) => (a+b));
pubsub.sub('MINUS', )

```