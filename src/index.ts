import express, { Request, Response } from 'express'
import cors from 'cors'
import { db } from './database/knex'
import { TuserDB } from './types'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})


app.get("/users", async (req: Request, res: Response) => {
    try {
		const result = await db("users")
        res.status(200).send({ message: "Usuarios:", result })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.post("/users", async (req: Request, res: Response) => {
    try {
        const {id, name, email, password} = req.body
        if(!id){
          res.status(400)
          throw new Error ("id deve ser string")

        }
        if(id.length < 4){
            res.status(400)
            throw new Error ("id deve possuir pelo menos 4 caracteres")
        }
        if(!name){
            res.status(400)
            throw new Error ("name deve ser string")

        }
        if(name.length < 2 ) {
        res.status(400)
        throw new Error ("name deve possuir pelo menos 2 caracteres")
        }
       if (!email){
        res.status(400)
        throw new Error ("email deve ser string")
       }
       if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
       )){
        res.status(400)
        throw new Error ("password deve conter apenas letras (maiúsculas e minúsculas), dígitos e os caracteres especiais mencionados, e deve ter no mínimo 8 caracteres.")
       }

       const [useridexistente] : TuserDB[] | undefined[] = await db ("users").where({email})
       if (useridexistente){
        res.status(400)
        throw new Error (" email já existente")

       }
       const novouser: TuserDB = {
        id,
        name,
        email,
        password
       }
       await db ("users").insert(novouser)
       res.status(201).send({
        messagem: "usuario criado com sucesso",
        user: novouser
       })


    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})



app.put("/users/:id", async (req: Request, res: Response) => {
    try {
        const userId = req.params.id; 
        const { name, email, password } = req.body; 

        const existingUser: TuserDB = await db("users").where({ id: userId }).first();
        if (!existingUser) {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }

        existingUser.name = name || existingUser.name; 
        existingUser.email = email || existingUser.email; 
        existingUser.password = password || existingUser.password; 

        await db("users").where({ id: userId }).update(existingUser);

        res.status(200).json({ message: "Usuário atualizado com sucesso", user: existingUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});


app.delete("/users/:id", async (req: Request, res: Response) => {
    try {
     const iddelete = req.params.id
     const useridexistente : TuserDB[] | undefined[] = await db("users").where({id: iddelete})
     
     if(!useridexistente){
      res.status(400)
      throw new Error (" id não encontrado")

     }
     await db ("users").del().where({id: iddelete})
     res.status(200).send({message:"user deletado com sucesso"})

    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})


