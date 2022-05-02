import { InitiatePayload } from "./models/InitiatePayload";
import { ProcessPayload } from "./models/ProcessPayload";

type JSONObject = {
  [key: string]: any
};

export class HyperServices {
  static preFetch(preFetchPayload: any): void;
  initiate(
    initiatePayload: InitiatePayload,
    callback: (event: JSONObject) => void
  ): void;
  process(processPayload: ProcessPayload): void;
  terminate(): void;
  handleBackpress(): boolean;
  isInitialised(): boolean;
}
