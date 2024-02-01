import { useLanguageContext } from 'context/Language/useLanguageContext'
import { languageOptions } from 'context/Language/langConfig'
import Select from 'ui/Select/Select'

const LanguageSwitcher: React.FC = () => {
  const { language, handleLanguage } = useLanguageContext()

  const handleLanguageSwith = (language: string) => {
    handleLanguage(language)
  }

  return (
    <Select
      options={languageOptions}
      selectedId={language.locale}
      onChange={handleLanguageSwith}
    />
  )
}

export default LanguageSwitcher
