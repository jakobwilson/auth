import * as mysql from 'mysql';
import config from '../config';
import authors from './queries/authors'

interface Obj {
    [propName: string]: unknown
  }

export const Connection = mysql.createPool(config.database)

export const Query = <T = mysql.OkPacket>(query: string, values?: Array<string | number | Obj>) => {

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