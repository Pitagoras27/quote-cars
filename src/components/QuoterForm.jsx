import { MANUFACTURED_DATA, PLANS } from '../constants';
import { getYear } from '../helpers';
import { useContextQuoter } from '../hooks/useContextQuoter';
import { AlertMessage, ChoosePlan, Selector } from './';

export const QuoterForm = () => {
  const { formData, error, onHandleChange, onSetError } = useContextQuoter();

  const placesManufactured = MANUFACTURED_DATA();
  const modelsYear = getYear();
  const plans = PLANS();

  const onSubmitDataQuoter = (e) => {
    e.preventDefault();

    if(Object.values(formData).includes('')) {
      onSetError();
      return
    }
    onSetError();
    console.log({formData});
  }

  return (
    <>
      { error && <AlertMessage /> }
      <form onSubmit={onSubmitDataQuoter}>
        <div className="my-5">
          <Selector
            type="Manufactured"
            options={placesManufactured}
            value={formData.manufactured}
            onChangeDataSelector={onHandleChange}
            />
        </div>

        <div className="my-5">
          <Selector
            type="Year"
            value={formData.year}
            options={modelsYear}
            onChangeDataSelector={onHandleChange}
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
                  onChangePlan={onHandleChange}
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
    </>
  )
}