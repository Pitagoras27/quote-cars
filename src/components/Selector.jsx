export const Selector = ({ type, value, options, onChangeDataSelector }) => {
  return (
    <>
      <label className="block mb-3 font-bold text-gray-400 uppercase">{ type }</label>
      <select
        name={type}
        className="w-full p-3 bg-white border border-gray-200"
        value={value}
        onChange={onChangeDataSelector}
      >
        <option value="">{`-- Select ${type} --`}</option>
        {
          options.map(({ id, name }) => (
            <option key={id} value={ id }> { name } </option>
          ))
        }
      </select>
    </>
  )
}