export default function AutomationOptions() {
  return (
    <>
      <div className="automation-options flex flex-col gap-4">
        <p className="font-semibold text-center">Automation Options</p>
        <div className="interval flex justify-center items-center">
          <input
            type="number"
            min="1"
            placeholder="Ex: 4"
            name="frequency"
            id="frequency"
            className="border border-gray-300 rounded-full px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 block w-[50%] p-2.5 shadow-md shadow-black/5"
          />
          <p className="px-4 font-light text-xl w-[50%]">times</p>
        </div>
        <div className="interval flex flex-col justify-center gap-4">
          <p className="px-4 font-light text-xl w-[50%]">every</p>
          <select
            id="intervals"
            className="border border-gray-300 rounded-full px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500 block w-full p-2.5 shadow-md shadow-black/5"
          >
            <option defaultValue="day">Day</option>
            <option value="week">Week</option>
            <option value="2-week">2 Week</option>
            <option value="month">Month</option>
            <option value="2-month">2 Month</option>
            <option value="3-month">3 Month</option>
            <option value="4-month">4 Month</option>
            <option value="5-month">5 Month</option>
            <option value="6-month">6 Monts</option>
            <option value="year">Year</option>
          </select>
        </div>
        <div className="recurring-ops flex flex-col">
          <div className="flex items-center justify-between">
            <label htmlFor="posted" className="px-4 text-md">
              Random Intervals
            </label>
            <input
              type="radio"
              name="posted"
              id="posted"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 pr-4"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="posted" className="px-4 text-md">
              Equal Intervals
            </label>
            <input
              type="radio"
              name="posted"
              id="posted"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 pr-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
