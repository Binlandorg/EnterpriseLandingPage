export interface InputBoxProps {
  $isOpen: boolean
}

export interface IServiceOptions {
  key: string
  name: string
}

export interface MultiSelectProps {
  options: IServiceOptions[]
  onChange: (selectedServices: IServiceOptions[]) => void
  searchPlaceholder: string
  label: string
}
