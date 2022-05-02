import { InitiatePayload } from "./models/InitiatePayload";
import { ProcessPayload } from "./models/ProcessPayload";

export class HyperServices {
  static preFetch(preFetchPayload: any): void;
  initiate(
    initiatePayload: InitiatePayload,
    callback: (event: string) => void
  ): void;
  process(processPayload: ProcessPayload): void;
  terminate(): void;
  handleBackpress(): boolean;
  isInitialised(): boolean;
}
