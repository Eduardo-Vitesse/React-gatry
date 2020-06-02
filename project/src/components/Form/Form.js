import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './Form.css'

const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0
}

function PromotionForm() {

// Variável que vai receber os valores
const [values, setValues] = useState(initialValue)
const history = useHistory()

//Função para pegar os valores dos inputs
function onChange(event){
    const {name, value} = event.target
    setValues({ ...values, [name]: value })
}

// Função para submeter o formulário
function onSubmit(event){
    event.preventDefault()
    axios.post('http://localhost:5000/promotions', values)
     .then((response) => {
        history.push('/')
     })
}

    return (
        <div>
            <h1>Promo Show</h1>
            <h2>Nova promoção</h2>

            <form onSubmit={onSubmit}>
                <div className="promotion-fomr__group">
                    <label htmlFor="title">Título</label>
                    <input id="title" name="title" type="text" onChange={onChange}/>
                </div>

                <div className="promotion-fomr__group">
                    <label htmlFor="url">Link</label>
                    <input id="url" name="url" type="text" onChange={onChange}/>
                </div>

                <div className="promotion-fomr__group">
                    <label htmlFor="imageUrl">Image (URL)</label>
                    <input id="imageUrl" name="imageUrl" type="text" onChange={onChange}/>
                </div>

                <div className="promotion-fomr__group">
                    <label htmlFor="price">Preço</label>
                    <input id="price" name="price" type="number" onChange={onChange}/>
                </div>

                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default PromotionForm
