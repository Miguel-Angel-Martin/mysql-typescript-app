import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'Seas_1234',
        port: 3306,
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
}