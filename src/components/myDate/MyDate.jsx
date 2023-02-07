import React from 'react'
import { Container, Perfil, Address, History } from './MyDate'

export const MyDate = () => {
    return (
        <Container>
            <h1>Meu Dados</h1>
            <hr />
            <Perfil>
                <h3 className='perfilh3'>Perfil</h3>
                <div className="perfil">
                    <div className="left">
                        <img src="https://images.pexels.com/photos/10897722/pexels-photo-10897722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <input className='file' type="file" placeholder='Sua imagen de Perfil' />
                        <input className='text' type="text" placeholder='Nome' />
                        <input type="text"  placeholder='Email'/>
                        <input type="password" placeholder='Nova Senha' />
                        <input type="password"  placeholder='Senha Anterior'/>
                        <button>Atualizar Perfil</button>
                    </div>
                    <hr />
                    <div className="right">
                        <div>
                            <img src="https://images.pexels.com/photos/10897722/pexels-photo-10897722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <span>Maria josé Souza Gomes</span>
                            <span>msj@hotmail.com</span>
                            <span>Perfil criado em 12/05/23</span>
                            <span>Atualizado em 14/05/23</span>
                        </div>
                    </div>

                </div>
            </Perfil>
            <Address>
                <h3>Endrereço</h3>
                <div className='address'>
                    <div>
                        <input type="text" name="rua" id="" placeholder='Rua' />
                        <input type="text" name='Bairro' placeholder='Bairro' />
                        <input type="text" name="proximidade" id="proximidade" placeholder='Ponto de referêcia' />
                        <input type="text" name="cidade" id="cidade" placeholder='Cidade'/>

                    </div>
                    <div>
                        <input type="text" name="estado" id="estado" placeholder='Estado' />
                        <input type="text" name="cep" id="cep" placeholder='CEP' />
                        <input type="text" name="complemento" id="complemento" placeholder='Complemento: casa, pedrio...' />
                        <button>Cadastrar Endereço</button>
                    </div>
                </div>  
            </Address>

            <History>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
               
            </History>
        </Container>
    )
}
