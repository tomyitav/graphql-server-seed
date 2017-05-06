import {PubSub, SubscriptionManager} from "graphql-subscriptions";
import schema from "../schema/schema";

const pubsub = new PubSub();
const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,
});

export { subscriptionManager, pubsub };
