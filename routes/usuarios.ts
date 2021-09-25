import { Router } from 'express'
import { deleteUsuario, getUsuario, getUsuarios, potUsuario, putUsuario } from '../controllers/usuario'


const router = Router()

router.get('/', getUsuarios )
router.get('/:id', getUsuario )
router.post('/', potUsuario )
router.put('/:id', putUsuario )
router.delete('/:id', deleteUsuario )

export default router