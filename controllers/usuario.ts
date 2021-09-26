import { Request, Response } from "express"
import { Op } from"sequelize"
import Usuario from "../models/usuario"


export const getUsuarios = async ( req: Request , res: Response ) => {

    try {

        const usuarios = await Usuario.findAll({
            where: {
                estado: true
            }
        });

        res.json({
            data: usuarios
        })
    
        
    } catch (error) {
        
        console.log(error)
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }

   
}


export const getUsuario = async ( req: Request , res: Response ) => {

    const { id } = req.params

    try {

        const usuario = await Usuario.findByPk( id )

        if( usuario ){
            res.json({
                data: usuario
            })
        }else{
            res.status(404).json({msg:`No existe un usuario con el id ${ id }`})        
        }
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            msg:'Hable con el administrador'
        })
        
    }

  

}


export const postUsuario = async ( req: Request , res: Response ) => {

    const { body } = req

    try {

    const existeEmail = await Usuario.findOne({
        where: {
            email: body.email
        }
    })

    if( existeEmail ){
        return res.status(400).json({
            msg: 'Ya existe un usuario con el email ' + body.email
        })
    }

    const usuario = Usuario.create( body )

    res.json({ data: usuario })

       
   } catch (error) {

       console.log(error)
       res.status(500).json({
           msg:'Hable con el administrador'
       })

   }

}


export const putUsuario = async ( req: Request , res: Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const usuario = await Usuario.findByPk( id )

        //chequeamos que el usuario que se quiere actualizar exista
        if( !usuario ){
            return res.status(404).json({
                msg: ' No existe un usuario con el id ' + id
            })
        }

        
        //chequeamos que el email no exista para otro usuario
         const existeEmail = await Usuario.findOne({
            where: {            
                [Op.and]: [
                    { email: body.email },
                    { id:  { 
                        [Op.ne]: id
                    } }
                  ]
            }
        })
    
        if( existeEmail ){
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            })
        }
    
        await usuario.update( body )
    
        res.json({ data: usuario })
    
           
       } catch (error) {
    
           console.log(error)
           res.status(500).json({
               msg:'Hable con el administrador'
           })
    
       }
    

}


export const deleteUsuario = async ( req: Request , res: Response ) => {

    const { id } = req.params    

    try {

        const usuario = await Usuario.findByPk( id )
        if( !usuario ){
            return res.status(404).json({
                msg: ' No existe un usuario con el id ' + id
            })
        }

        //Eliminación fisica
        // await usuario.destroy()

        //Eliminación logica
        await usuario.update( { estado: false } )


        res.json({
            data: usuario
        })
            
    } catch (error) {
        
        console.log(error)
        res.status(500).json({
            msg:'Hable con el administrador'
        })

    }

}