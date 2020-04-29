import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Photo } from './entity/Photo'

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'test',
  entities: [Photo],
  // entities: [__dirname + '/entity/*.ts'],
  synchronize: true,
  logging: false
})
  .then((connection) => {
    // here you can start to work with your entities
  })

  ReadModel{
    String key;
    List staffList;
  }
  .catch((error) => console.log(error))
