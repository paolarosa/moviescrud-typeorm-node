import 'dotenv/config'
import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import path from 'path'

const dataSourceConfig = (): DataSourceOptions => {
    
    const entitiesPath = './entities/**.entity.{ts,js}'
    console.log(entitiesPath)
    const migrationsPath = './migrations/**.{ts,js}'

    const dbUrl: string | undefined = process.env.DATABASE_URL
    if(!dbUrl){
        throw new Error('Env var DATABASE_URL does not exists')
    }
    const nodeEnv: string | undefined = process.env.NODE_ENV
    if(nodeEnv === 'test'){
        return {
            type: 'sqlite',
            database: ':memory',
            synchronize: true,
            entities: [entitiesPath]
        }
    }
    return{
        type: 'postgres',
        url: dbUrl,
        synchronize: false,
        logging: true,
        migrations:[migrationsPath],
        entities:[entitiesPath]
    }
}

const AppDataSource = new DataSource(dataSourceConfig())
export { AppDataSource }