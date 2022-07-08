import React from 'react'
import SearchBar from './SearchBar'

export default function useSearchBar(placeholder, onSubmit) {

    const [value, setValue] = React.useState('')

    function onChange(event) {
        setValue(event.target.value)
    }


    const bar = (
        <SearchBar value={value} placeholder = {placeholder} onChange = {onChange} onSubmit = {onSubmit}/>
    )

    return [bar, value]
}
