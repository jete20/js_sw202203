import { getConnection } from "@models/sqlite/SqliteConn";
import { UsuariosDao } from "@models/sqlite/UsuariosDao";
export interface IUsuario {
    name: string;
    email: string;
    password: string;
};
export class Usuarios
{
    private dao: UsuariosDao;
    public constructor()
    {
        getConnection()
            .then(conn => {
                this.dao = new UsuariosDao(conn);
            })
            .catch(ex => console.error(ex));
    }

    // Consultas
    public getAllUsuarios()
    {
        return this.dao.getUsuarios();
    }

    public getUsuariosByIndex(index: number)
    {
        return this.dao.getUsuariosById({_id: index});
    }

    public addUsuarios(usuarios: IUsuario)
    {
        return this.dao.insertNewUsuarios(usuarios);
    }

    public updateUsuarios(index: number, usuarios: IUsuario)
    {
        return this.dao.update({_id: index}, usuarios);
    }

    public deleteUsuarios(index: number)
    {
        return this.dao.deleteUsuarios({_id: index});
    }
}