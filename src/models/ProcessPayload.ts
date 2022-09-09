import type { Service } from "./Service";

export interface ProcessPayload {
  requestId: string;
  service: Service;
  betaAssets: boolean;
  payload: {
    [key: string]: any;
  };
}
