import { Service } from "./Service";

export interface ProcessPayload {
  requestId: string;
  service: Service;
  payload: {
    [key: string]: any;
  };
}
