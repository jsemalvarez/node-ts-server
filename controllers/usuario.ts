import { Request, Response } from "express"


export const getUsuarios = ( req: Request , res: Response ) => {

    res.json({
        msg: 'getUsuarios'
    })

}


export const getUsuario = ( req: Request , res: Response ) => {

    const { id } = req.params

    res.json({
        msg: 'getUsuario',
        id
    })

}


export const potUsuario = ( req: Request , res: Response ) => {

    const body = req

    res.json({
        msg: 'potUsuario',
        body
    })

}


export const putUsuario = ( req: Request , res: Response ) => {

    const { id } = req.params
    const body = req

    res.json({
        msg: 'putUsuario',
        body,
        id
    })

}


export const deleteUsuario = ( req: Request , res: Response ) => {

    const { id } = req.params

    res.json({
        msg: 'putUsuario',
        id
    })

}