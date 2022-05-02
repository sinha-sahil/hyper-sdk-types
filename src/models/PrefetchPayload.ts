import { Service } from "./Service";

export interface PreFetchPayload {
  service: Service;
  payload: {
    clientId: string;
  };
}
