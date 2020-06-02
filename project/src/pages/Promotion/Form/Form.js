import React from 'react'
import { useParams } from 'react-router-dom'
import PromotionForm from '../../../components/Form/Form'
import UIContainer from '../../../components/UI/Container/Container'

function Form() {

    const { id } = useParams

    return (
        <UIContainer>
            <PromotionForm/>
        </UIContainer>
    )
}

export default Form
