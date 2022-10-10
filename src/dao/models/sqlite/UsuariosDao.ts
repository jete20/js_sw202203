import { IUsuarios } from "../entities/Usuarios";
import { AbstractDao } from "./AbstractDao";
import sqlite from 'sqlite';

export class UsuariosDao extends AbstractDao<IUsuarios>
{
    public constructor(db: sqlite.Database)
    {
        super('USUARIOS', db as sqlite.Database);
        super.exec('CREATE TABLE IF NOT EXISTS USUARIOS (_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, '
        +' name TEXT, '
        +' email TEXT, '
        +' password TEXT);').then().catch(e=>console.error(e));
    }

    public async getUsuarios()
    {
        return super.findAll();
    }

    public async getUsuariosById(identifier: Partial<IUsuarios>)
    {
        try
        {
            const result = await super.findById(identifier);
            return result;
        } catch(ex: unknown)
        {
            console.log("UsuariosDao sqlite: ", (ex as Error).message);
            throw ex;
        }
    }

    public async insertNewUsuarios(newUsuarios: IUsuarios)
    {
        try
        {
            const result = await super.createOne(newUsuarios);
            return result;
        }catch(ex: unknown)
        {
            console.log("UsuariosDao sqlite: ", (ex as Error).message);
            throw ex;
        }
    }

    public async updateNewUsuarios(updateUsuarios: IUsuarios)
    {
        try
        {
            const {_id, ...updateObjetc} = updateUsuarios;
            const result = await super.update({_id}, updateObjetc);
            return result;
        } catch (ex: unknown)
        {
            console.log("UsuariosDao sqlite: ", (ex as Error).message);
            throw ex;
        }
    }

    public async deleteUsuarios( deleteUsuarios: Partial<IUsuarios>)
    {
        try
        {
            const {_id } = deleteUsuarios;
            const result = await super.delete({_id});
            return result;
        } catch (ex: unknown)
        {
            console.log("UsuariosDao sqlite: ", (ex as Error).message);
            throw ex;
        }
    }

}