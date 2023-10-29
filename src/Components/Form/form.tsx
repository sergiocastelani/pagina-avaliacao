import { Button } from "../Button"

export const Form = ()=> {
   
    return(
        <>
            <form>
                <input type="text" placeholder="Digite seu nome" />
                <input type="text" placeholder="Digite seu telefone" />
                <input type="text" placeholder="Digite sua habilidade 1" />
                <input type="text" placeholder="Digite sua habilidade 2" />
                <input type="text" placeholder="Digite sua habilidade 3" />
                <Button
                text="Cancelar" />
                <Button
                text="Salvar"/>    
            </form>
        </>

    )
}