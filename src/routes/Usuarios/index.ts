import { Router } from 'express';
import { IUsuario, Usuarios } from '@libs/Usuarios';

const router = Router();
const usuariosInstance = new Usuarios();

router.get('/', async (_req, res) => {
    try {
        res.json(await usuariosInstance.getAllUsuarios());
    } catch (ex) {
        console.error(ex);
        res.status(503).json({ error: ex });
    }
});

router.get('/byindex/:index', async (req, res) => 
{
    try {
        const { index } = req.params;
        res.json(await usuariosInstance.getUsuariosByIndex(+index));
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ 'msg': 'Error al obtener Registro' });
    }
});

router.post('/new', async (req, res) => {
    try {
        const newUsuarios = req.body as unknown as IUsuario;
        //VALIDATE

        const newUsuariosIndex = await usuariosInstance.addUsuarios(newUsuarios);
        res.json({ newIndex: newUsuariosIndex });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.put('/update/:index', async (req, res) => {
    try {
        const { index } = req.params;
        const usuariosFromForm = req.body as IUsuario;
        await usuariosInstance.updateUsuarios(+index, usuariosFromForm);
        res.status(200).json({ "msg": "Registro Actualizado" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.delete('/delete/:index', async (req, res) => {
    try
    {
        const { index } = req.params;
        console.log("index", index);
        if (usuariosInstance.deleteUsuarios(+index))
        {
            res.status(200).json({ "msg": "Registro Eliminado" });
        }
        else
        {
            res.status(500).json({ "msg": "Error al eliminar Registro" });
        }
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ 'msg': 'Error al eliminar Registro' });
    }
});

export default router;