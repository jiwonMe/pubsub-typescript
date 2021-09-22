/**
 * Copyright (c) 2021 Jiwon Park http://jiwon.me
 * License: MIT - https://mit-license.org/
 *
 * https://github.com/jiwonMe/pubsub-ts
 */

import { PubSub } from "./pubsub";
import TOPICS from "./constants/TOPICS";

const pubsub = new PubSub<TOPICS>();

pubsub.sub('test')