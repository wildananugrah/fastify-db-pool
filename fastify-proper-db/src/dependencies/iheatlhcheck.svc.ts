export interface IHealthCheck {
  healthcheck(): Promise<boolean>;
}
