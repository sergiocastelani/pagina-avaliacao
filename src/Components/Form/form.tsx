import { useForm } from "react-hook-form";
import { Button } from "../Button"
import { Container, StyleForm } from "./Styles";

export const Form = ()=> {
    const  {  register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ():void => {
          
    };
    return(
        <Container className="card-formulario">
            <StyleForm>
                <input 
                    className={errors?.name &&  "input-error"}
                    type="text" placeholder="Digite seu nome" 
                    {...register("name", {required:  true})}
                />
                <input 
                className={errors?.phone &&  "input-error"}
                type="text" placeholder="Digite seu telefone" 
                {...register("phone", {required:  true})}
                />
                <input 
                className={errors?.skillFirst &&  "input-error"}
                type="text" placeholder="Digite sua habilidade 1" 
                {...register("skillFirst", {required:  true})}
                />
                <input 
                className={errors?.skillSecond &&  "input-error"}
                type="text" placeholder="Digite sua habilidade 2" 
                {...register("skillSecond", {required:  true})}
                />
                <input 
                className={errors?.skillThird &&  "input-error"}
                type="text" placeholder="Digite sua habilidade 3" 
                {...register("skillThird", {required:  true})}
                />
                <button onClick={()=> handleSubmit(onSubmit)()}>Cancelar</button>
                <button onClick={()=> handleSubmit(onSubmit)()}>Salvar</button>
            </StyleForm>
        </Container>
    )
}