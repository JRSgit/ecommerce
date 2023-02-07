import React from 'react'
import NavBar from '../navbar/NavBar.jsx'

import { 
    Container, 
    Aside, 
    Span,
    ListBuy, 
    ListItem, 
    Paginate,
    H1
} from './Orders'
import logoImg from '../../img/logo.jpg'

const Orders = () => {
    return (
        <>
        <NavBar />
        <hr style={{margin: 20}} />
            <H1>Minhas Compras</H1>
        <Container>
            <ListBuy>
                <ListItem>
                    <div className='imgProd'>
                        <div className='img'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QywpG8IxbS8Be9aKvE76Dg.jpeg" alt="" />
                        </div>
                        <div className='dadosProd'>
                            <Span>Id: Product id</Span>
                            <Span>Nome: Product name</Span>
                            <Span>Price: Product Price</Span>
                        </div>

                    </div>
                    <div className='descProd'>
                        <h3>Data</h3>
                        <Span>12/03/23</Span>
                        <Span style={{alignItems: 'center'}}>12:15:25</Span>
                    </div>
                    <div className='descProd'>
                        <h3>Status</h3>
                        <Span pay="greenyellow">Pago</Span>
                        <Span pay="greenyellow">Entreue</Span>
                        <Span>Rastreio: <a href="#/">BR14225638452GB</a></Span>
                    </div>
                </ListItem>
                <ListItem>
                    <div className='imgProd'>
                        <div className='img'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QywpG8IxbS8Be9aKvE76Dg.jpeg" alt="" />
                        </div>
                        <div className='dadosProd'>
                            <Span>Id: Product id</Span>
                            <Span>Nome: Product name</Span>
                            <Span>Price: Product Price</Span>

                        </div>

                    </div>
                    <div className='descProd'>
                        <h3>Data</h3>
                        <Span>12/03/23</Span>
                       <Span style={{ alignItems: 'center'}}>12:15:25</Span>
                    </div>
                    <div className='descProd'>
                        <h3>Status</h3>
                        <Span pay="greenyellow">Pago</Span>
                        <Span pay="orange">Encaminhado</Span>
                        <Span>Rastreio: <a href="#/">BR14225638452GB</a></Span>
                    </div>
                </ListItem>
                <ListItem>
                    <div className='imgProd'>
                        <div className='img'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QywpG8IxbS8Be9aKvE76Dg.jpeg" alt="" />
                        </div>
                        <div className='dadosProd'>
                            <Span>Id: Product id</Span>
                            <Span>Nome: Product name</Span>
                            <Span>Price: Product Price</Span>

                        </div>

                    </div>
                    <div className='descProd'>
                        <h3>Data</h3>
                        <Span>12/03/23</Span>
                       <Span style={{ alignItems: 'center'}}>12:15:25</Span>
                    </div>
                    <div className='descProd'>
                        <h3>Status</h3>
                        <Span pay="greenyellow">Pago</Span>
                        <Span pay="orange">Encaminhado</Span>
                        <Span>Rastreio: <a href="#/">BR14225638452GB</a></Span>
                    </div>
                </ListItem>
                <ListItem>
                    <div className='imgProd'>
                        <div className='img'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QywpG8IxbS8Be9aKvE76Dg.jpeg" alt="" />
                        </div>
                        <div className='dadosProd'>
                            <Span>Id: Product id</Span>
                            <Span>Nome: Product name</Span>
                            <Span>Price: Product Price</Span>

                        </div>

                    </div>
                    <div className='descProd'>
                        <h3>Data</h3>
                        <Span>12/03/23</Span>
                       <Span style={{ alignItems: 'center'}}>12:15:25</Span>
                    </div>
                    <div className='descProd'>
                        <h3>Status</h3>
                        <Span pay="greenyellow">Pago</Span>
                        <Span pay="orange">Encaminhado</Span>
                        <Span>Rastreio: <a href="#/">BR14225638452GB</a></Span>
                    </div>
                </ListItem>
                <ListItem>
                    <div className='imgProd'>
                        <div className='img'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QywpG8IxbS8Be9aKvE76Dg.jpeg" alt="" />
                        </div>
                        <div className='dadosProd'>
                            <Span>Id: Product id</Span>
                            <Span>Nome: Product name</Span>
                            <Span>Price: Product Price</Span>

                        </div>

                    </div>
                    <div className='descProd'>
                        <h3>Data</h3>
                        <Span>12/03/23</Span>
                       <Span style={{ alignItems: 'center'}}>12:15:25</Span>
                    </div>
                    <div className='descProd'>
                        <h3>Status</h3>
                        <Span pay="greenyellow">Pago</Span>
                        <Span pay="orange">Encaminhado</Span>
                        <Span>Rastreio: <a href="#/">BR14225638452GB</a></Span>
                    </div>
                </ListItem>
                <ListItem>
                    <div className='imgProd'>
                        <div className='img'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QywpG8IxbS8Be9aKvE76Dg.jpeg" alt="" />
                        </div>
                        <div className='dadosProd'>
                            <Span>Id: Product id</Span>
                            <Span>Nome: Product name</Span>
                            <Span>Price: Product Price</Span>

                        </div>

                    </div>
                    <div className='descProd'>
                        <h3>Data</h3>
                        <Span>12/03/23</Span>
                       <Span style={{ alignItems: 'center'}}>12:15:25</Span>
                    </div>
                    <div className='descProd'>
                        <h3>Status</h3>
                        <Span pay="greenyellow">Pago</Span>
                        <Span pay="orange">Encaminhado</Span>
                        <Span>Rastreio: <a href="#/">BR14225638452GB</a></Span>
                    </div>
                </ListItem>
                <ListItem>
                    <div className='imgProd'>
                        <div className='img'>
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QywpG8IxbS8Be9aKvE76Dg.jpeg" alt="" />
                        </div>
                        <div className='dadosProd'>
                            <Span>Id: Product id</Span>
                            <Span>Nome: Product name</Span>
                            <Span>Price: Product Price</Span>

                        </div>

                    </div>
                    <div className='descProd'>
                        <h3>Data</h3>
                        <Span>12/03/23</Span>
                       <Span style={{ alignItems: 'center'}}>12:15:25</Span>
                    </div>
                    <div className='descProd'>
                        <h3>Status</h3>
                        <Span pay="greenyellow">Pago</Span>
                        <Span pay="orange">Encaminhado</Span>
                        <Span>Rastreio: <a href="#/">BR14225638452GB</a></Span>
                    </div>
                </ListItem>
            </ListBuy>
        
        <Aside>
           <h3>Resumo</h3>
           <hr />
           <div className='resumo'>
            <ul>
                <li>Pontuação: <small> 1000 </small></li>
                <li>Produtos comprados: <small> 50 </small></li>
                <li>Ordens Geradas: <small>  50 </small></li>
            </ul>
            <h5>Cliente desde: <small>[ 15/02/2021 ]</small></h5>
           </div>
           <div className='resumo'>
                <h5 className='pontos'> Pontos te dão deneficios</h5>
                <p>
                    Suas pontuação é contada a cada compra realizada,
                    cada valor gera uma pontuação, essa pontuação é 
                    usada pelo sistema da loja para te aplicar descontos
                    incriveis, como: Frete Grátis, Descontos de até 30%,
                    produtos exclusivos, como lançamentos e produtos limitados.
                </p>
                <p>
                    Para ter todos os bonús basta continuar comprando
                    e qualificando nossos produtos e o atendimento.
                </p>
           
           </div>
           <div className="logoImg">
            <img src={logoImg} alt="logo" />
            <h3>RSAS.</h3>
            <h5>Experimente viver.</h5>
           </div>

        </Aside>
        </Container>
        <Paginate>Fim</Paginate>
            
        </>
    )
}

export default Orders
