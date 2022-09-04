export const ChoosePlan = ({ value, type,  onChangePlan }) => (
  <div className="flex gap-3 items-center">
    <label>{ type }</label>
    <input
      type="radio"
      name="plan"
      value={value}
      onChange={onChangePlan}
    />
  </div>
)