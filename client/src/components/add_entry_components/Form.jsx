import React from 'react'
import Select from './Select'
import InputForm from './InputForm'
import ButtonForm from './ButtonForm'


function Form() {
    return (
        <div className="mx-auto max-w-xl px-5">
            <form className="flex gap-2"  >
                <Select/>
                <InputForm id="description" type="text" name="description" class="flex-1" placeholder="Add description"/>
                <InputForm id="value" type="number" name="value" class="w-20" placeholder="Value" />
                <ButtonForm />
            </form>
        </div>
    )
}

export default Form