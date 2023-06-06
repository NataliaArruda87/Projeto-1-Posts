import './styles.css'

export const TextInput = ({ searchValue, handleChance }) => {
  return (
    <input
      className='text-input'
      type='search'
      onChange={handleChance}
      value={searchValue}
      placeholder='Type your search...'
    />
  )
}