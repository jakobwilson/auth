import * as mysql from 'mysql';
import config from '../config';
import authors from './queries/authors'

export const Connection = mysql.createPool(config.database)

export const Query = <T = mysql.OkPacket>(query: string, values?: Array<string | number>) => {

    return new Promise<T>((resolve, reject) => {
        Connection.query( query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
}

export default {
    authors
}