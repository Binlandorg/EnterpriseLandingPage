import { forwardRef } from 'react'

import {
  InputSearchWrapper,
  StyledInputSearch,
} from './SearchMultiSelect.styles'
import { ISearch } from 'types/ui/SearchMultiSelect'

const InputSearch = forwardRef<HTMLInputElement, ISearch>(
  ({ value, onChange, placeholder, icon }, ref) => {
    return (
      <InputSearchWrapper>
        <StyledInputSearch
          type="search"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
        />
        {icon}
      </InputSearchWrapper>
    )
  }
)

export default InputSearch
