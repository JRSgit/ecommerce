import styled from "styled-components";

export const H1 = styled.h1`
    text-align: left;
    font-weight: lighter;
    margin-left: 10px;
`
export const Container = styled.div`
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    margin-bottom: 20px;
    h1 {
        text-align: center;
    }
`
export const ListBuy = styled.ul`
    display: flex;
    flex: 3;
    padding: 10px;
    flex-direction: column;
    list-style: none;
`

export const ListItem = styled.li`
    display: flex;
    font-weight: 300;
    height: 13vh;
    border-radius: 10px;
    border-radius: 10px;
    box-shadow: 3px 5px 15px 5px rgba(0,0,0,0.4);
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    padding: 10px 15px;
    background: #fbfbfb ;

    .imgProd {
        display: flex;
        height: 100%;
        /* width: 300px; */
        
        
        .img{
            height: 100%;
            margin-right: 20px;
            width: 100px;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                overflow: hidden;

            }
        }
        .dadosProd {
            font-size: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        
    }
    .descProd{
        display: flex;
        /* align-items: center; */
        overflow: hidden;
        flex-direction: column;

        h3{
            text-align: center;
        }
        
    }
`

export const Aside = styled.div`
    flex: 1;
    margin: 10px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    padding: 10px;

    h3{
        text-align: center;
        font-size: 28px;
        
        font-weight: lighter;
    }

   span{
    font-size: .7rem;
   }

   div{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.resumo {
    background-color: #ebebebeb;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 3px 5px 15px 5px rgba(0,0,0,0.4);

    li{
        background-color: #ccc;
        padding: 5px;
        color: gray;
        font-weight: lighter;
        margin-bottom: 3px;
        border-radius: 8px;

        small {
            padding: 2px;
            background-color: greenyellow;
            color: #000;
            border-radius: 8px;
            border: 1px solid gray;
        }
    }
    .pontos{
        margin-bottom: 10px;
    }
    p{
        padding: 5px;
        color: gray;
    }
    h5{
        text-align: center;
        font-weight: 500;
        font-size: 18px;
    }

   }
.logoImg {
    flex: 1;
    align-items: center;
    img{
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        
    }
}
`
export const Paginate = styled.div`
    text-align: center;
    height: 10vh;
    background-color: teal;
`
export const Span = styled.span`
    text-align: center;
    margin-bottom: 3px;
    padding: 2px;
    border-radius: 9px;
    background-color: ${props => props.pay};
    color: #000;
    border: 1px solid ${props => props.pay ? 'orange' : 'gray' };
    width: fit-content;
`