import { Pool } from "pg";
import { IHealthCheck } from "../iheatlhcheck.svc";

export class HealthCheck implements IHealthCheck {
  pool: Pool;
  constructor(pool: Pool) {
    this.pool = pool;
  }
  async healthcheck(): Promise<boolean> {
    const client = await this.pool.connect();
    try {
      await client.query("SELECT 1 as healtcheck");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      client.release();
    }
  }
}
