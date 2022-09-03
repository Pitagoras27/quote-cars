import { MANUFACTURED_DATA, PLANS } from '../constants';
import { getYear } from '../helpers';
import { ChoosePlan, Selector } from './';

export const QuoterForm = () => {
  const placesManufactured = MANUFACTURED_DATA();
  const modelsYear = getYear();
  const plans = PLANS();

  // TODO: Create and connect with context api

  const onSubmitDataQuoter = () => {}

  return (
    <form onSubmit={onSubmitDataQuoter}>
      <div className="my-5">
        <Selector
          type="Manufactured"
          options={placesManufactured}
          value=""
          onChangeDataSelector={() => {}}
          />
      </div>

      <div className="my-5">
        <Selector
          type="Year"
          value=""
          options={modelsYear}
          onChangeDataSelector={() => {}}
        />
      </div>

      <div className="my-5">
        <label className="block mb-3 font-bold text-gray-400 uppercase">Choose a Plan</label>
        <div className="flex gap-3 items-center">
          {
            plans.map(({ id, name }) => (
              <ChoosePlan
                key={id}
                value={id}
                type={name}
                onChangePlan={() => {}}
              />
            ))
          }
        </div>
      </div>

      <input
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
        value="Cotizar"
      />
    </form>
  )
}