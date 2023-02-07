import styled from "styled-components"

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
`

export const Perfil = styled.div`
    background: url('https://img.freepik.com/premium-photo/simple-white-background-with-smooth-lines-light-colors_476363-5220.jpg?w=900'), no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .perfilh3{
        margin-top: 10px;
        font-size: 34px;
        color: #333;
           
    }
    

        .perfil {
            width: 100vw;
            margin-bottom: 10px;
            display: flex;
            margin-top: 40px;
            flex: 1;
            gap: 20px;
            
            .left{
                display: flex;
                flex: 1;
                flex-direction: column;
                padding: 20px 25px;
                align-items: center;
        
        
            
                img{
                    width: 200px;
                    box-shadow: 1px 1px 1px 2px #333;
                    height: 200px;
                    border-radius: 50%;
                    object-fit: cover;
                }
        
                .file {
                    width: fit-content;
                    height: fit-content;
                 }
        
                 .text {
                     text-transform: capitalize;
        
                 }
                input {
                    width: 90%;
                    height: 15px;
                    padding: 10px 15px;
                    outline: none;
                    color: #333;
                    font-size: 16px;
                    border: none;
                    background-color: rgba(9, 9, 9, 0.3);
                    border-radius: 10px;
                    margin-top: 10px;
                }
        
                button {
                    margin-top: 15px;
                    border: none;
                    border-radius: 10px;
                    padding: 10px 15px;
                    background-color: #007890;
                    font-size: 20px;
                    color:rgba(9, 9, 9, 0.3);
                    transition: 0.4s;
        
                    &:hover {
                        cursor: pointer;
                        color: #333;
                        background-color: #008990;
                    }
                }
            }
            
            .right {
                display: flex;
                flex: 1;
                flex-direction: column;
                padding: 20px 25px;
                align-items: center;
        
                h3{
                    font-size: 22px;
                    color: #333;
                    font-weight: 400;
                    padding: 10px 10px;
                    line-height: normal;
                }
                div{
                    display: flex;
                    flex-direction: column;
        
                    img{
                        box-shadow: 1px 1px 1px 2px #333;
                        width: 200px;
                        height: 200px;
                        border-radius: 50%;
                        object-fit: cover;
                    }
        
                    span {
                        padding: 10px 15px;
                        color: #333;
                        font-size: 18px;
        
                    }
                }
            }
        }


`

export const Address = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg?w=740&t=st=1675731557~exp=1675732157~hmac=01d01931730adbd448718abb90d0649efe8c84507454596490a8e63f915976e7'), no-repeat;
    
    h3{
        font-size: 28px;
        color: #333;
        padding: 15px 20px;
    }
    .address {
    /* margin-bottom: 200px; */
    display: flex;
    height: 300px;
    width: 100vw;
    justify-content: center;
    flex-direction: row;
        div{
            display: flex;
            width: 100%;
            align-items: center;
            flex-direction: column;
            padding: 10px 20px;
    
            input {
                width: 80%;
                height: 15px;
                padding: 10px 15px;
                outline: none;
                color: #333;
                font-size: 16px;
                border: none;
                background-color: rgba(9, 9, 9, 0.3);
                border-radius: 10px;
                margin-top: 10px;
            }

            button {
            margin-top: 15px;
            border: none;
            border-radius: 10px;
            padding: 10px 15px;
            background-color: #007890;
            font-size: 20px;
            color:rgba(9, 9, 9, 0.3);
            transition: 0.4s;

            &:hover {
                cursor: pointer;
                color: #333;
                background-color: #008990;
            }
        }
        }

    }
`
export const History = styled.div`
    display: flex;
    height: 30vh;
    gap: 20px;
    margin: 20px;

    div{
        flex: 1;
        padding: 10px 15px;
        border-radius: 8px;
        background-color: red;
    }
`