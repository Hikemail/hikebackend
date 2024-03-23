import { Pool } from "node:pg";

const pool = new Pool({
  connectionString: "",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
