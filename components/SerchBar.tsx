import Button from "./Button";

export default function SerchBar() {
  return (
    <div className="flex w-full h-28 rounded-xl bg-white p-2 shadow-md shadow-black/5">
      <div className="flex w-[50%] justify-center items-center pr-6">
        <div className="flex items-center">
          <input
            type="radio"
            name="posted"
            id="posted"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="posted" className="px-4 text-md">
            Birthday
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="posted"
            id="posted"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="posted" className="px-4 text-md">
            Photo
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="posted"
            id="posted"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="posted" className="px-4 text-md">
            Album
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="posted"
            id="posted"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="posted" className="px-4 text-md">
            Video
          </label>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center w-[50%]">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          id="search"
          className="border w-[450px] border-gray-300 rounded-full px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
        {/* <Button name="Search" tailwindColor="bg-sky-500"/> */}
      </div>
    </div>
  );
}
