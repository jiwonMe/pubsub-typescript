/**
 * Copyright (c) 2021 Jiwon Park http://jiwon.me
 * License: MIT - https://mit-license.org/
 *
 * https://github.com/jiwonMe/pubsub-ts
 */

export default class PubSub<Store> {
  private hooks: Map<keyof Store, any>;

  constructor() {
    this.hooks = new Map();
  }

  sub<Topic extends keyof Store>(topic: Topic, ...hooks: Store[Topic][]) {
    const currentHooks = this.hooks.get(topic);
    if (currentHooks !== undefined && currentHooks.length > 0) {
      this.hooks.set(topic, [...currentHooks, ...hooks])
    } else {
      this.hooks.set(topic, [...hooks]);
    }
  }

  unsub<Topic extends keyof Store>(topic: Topic) {
    if (this.hooks.get(topic) !== undefined) {
      this.hooks.delete(topic);
      return true; // delete successfully
    } else {
      console.error(`'${topic}' was not registered`);
      return null; // delete failed
    }
  }

  // @ts-expect-error
  pub<Topic extends keyof Store>(topic: Topic, message: Parameters<Store[Topic]>) {
    const currentHooks = this.hooks.get(topic);
    if (currentHooks !== undefined && currentHooks.length > 0){
      return this.hooks.get(topic)(message);
    } else {
      console.error(`'${topic}' was not registered`);
      return null;
    }
  }
}
