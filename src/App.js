
import React, { Component } from "react";
import styled from 'styled-components'; 
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box
}
`;


const Info = styled.div`
border: 1px black;
// display:flex
border-style: solid;
width: 23%;
margin: 1rem;
`;

const Container = styled.div`
display: flex;
justify-content: space-evelygn;
flex-wrap: wrap;
width: 62%;
`;

const BoxResult = styled.div`
width: 34%;
height: 564px;
overflow: overlay;
`;

const BoxContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`;


const Conteudo = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

`;

const BoxCarro = styled.div`
display: flex;
justify-content: space-between;
border: 1px;
border-style: solid;
`;

const Text = styled.div`
text-align: center;
font-size: 13px;
`
const CarroResult = styled.div`
display:flex;
justify-content: space-between;
background-color: aqua;
`;

const Inforesult = styled.div`
border-style: solid;
margin: 1rem;
border-color: aqua;
`;

const BtnAdd = styled.button`
height: 17px;
width: 16px;
border-radius: 50px;
background-color: black;
color: white;
display: flex;
justify-content: center;
margin: 1rem;
border: none;
`;

const Name = styled.p`
margin: 1rem;
`;

const Btnremover = styled.button`
margin: 1rem;
border-radius: 50px;
color: aqua;
border: none
`;

const BoxInfo = styled.div`
display: flex;
justify-content: space-around;
`;

const InfoTipo = styled.div`
display: flex;
justify-content: space-evenly;
width: 25%;
`;

const InfoValor = styled.div`
display: flex;
justify-content: space-evenly;
width: 45%
`
const BoxFooter = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 94%;
`;

const CarResult = styled.div`
display: flex;
justify-content: flex-end;
width: 65%;
`

class App extends Component {
    state={
        carros:[
            {
                id: 1,
                carro: "Jetta",
                marca: "Volkswagen",
                valor: 144000,
                estilo: "Sedan"
            },
            {
                id: 2,
                carro: "Polo",
                marca: "Volkswagen",
                valor: 70000,
                estilo: "Hatch"
            },
            {
                id: 3,
                carro: "T-Cross",
                marca: "Volkswagen",
                valor: 123000,
                estilo: "SUV"
            },
            {
                id: 4,
                carro: "Tiguan R-line",
                marca: "Volkswagen",
                valor: 146000,
                estilo: "SUV"
            },
            {
                id: 5,
                carro: "Civic",
                marca: "Honda",
                valor: 115000,
                estilo: "Sedan"
            },
            
            {
                id: 6,
                carro: "Corolla",
                marca: "Toyota",
                valor: 110000,
                estilo: "Sedan"
            },
            {
                id: 7,
                carro: "Corolla Cross",
                marca: "Toyta",
                valor: 184000,
                estilo: "Suv"
            },
            {
                id: 8,
                carro: "Compass",
                marca: "Jeep",
                valor: 132000,
                estilo: "SUV"
            },
            {
                id: 9,
                carro: "Golf G TI",
                marca: "Volkswagen",
                valor: 138000,
                estilo: "Hatch"
            }
        ],
    result: [],
    };


        
add = (id) => { 
    this.setState({
        result: this.state.result.concat(
            this.state.carros.filter((item) => {
                return item.id === id;
            })
        )
    });
}


apagar = (id) => {
    this.setState({
        result: this.state.result.filter((item) => {
           return item.id !== id;
       }) 
    });
};


render() {
    return(
        <BoxContainer>
            <h1>Loja de Carros!</h1>
            <Conteudo>                 
                <Container>
                    {this.state.carros.map((item) => (
                        <Info>
                            <BoxCarro>
                                <p>{item.carro}</p>
                                <BtnAdd onClick={() => {this.add(item.id)}}>+</BtnAdd>

                            </BoxCarro>
                            <Text>
                                <p>Montadora: {item.marca}</p>
                                <p>Preço: {item.valor.toLocaleString
                                ("pt-br", { style: "currency", currency: "BRL" })}</p>
                                <p>Tipo: {item.estilo}</p>

                            </Text>
                        </Info>
                    ))}
                </Container>
                <BoxResult>
                    {this.state.result.map((item, index) => (
                        <Inforesult key={index}>
                            <CarroResult>
                                <Name>{item.carro}</Name>
                                <Btnremover
                                    onClick={() => {
                                        this.apagar(item.id);
                                    }}
                                    >
                                        -
                                </Btnremover>
                            </CarroResult>
                            <BoxInfo>
                                <InfoTipo>
                                    <p>Tipo: </p>
                                    <p> {item.estilo} </p>
                                </InfoTipo>
                                <InfoValor>
                                    <p> Preço: </p> 
                                    <p> {item.valor.toLocaleString
                                    ("pt-br", { style: "currency", currency: "BRL" })} </p>
                                </InfoValor>
                            </BoxInfo>
                        </Inforesult>
                    ))}
                </BoxResult>
                <BoxFooter>
                    <CarResult>
                        <h2>Total</h2>
                    </CarResult>
                    <div>
                        {this.state.result.reduce((ac, vt) =>
                            ac + vt.valor, 0).toLocaleString
                            ("pt-br", { style: "currency", currency: "BRL" })}
                    </div>
                </BoxFooter>
            </Conteudo>
                        
        </BoxContainer>

        )
    }
}

export default App