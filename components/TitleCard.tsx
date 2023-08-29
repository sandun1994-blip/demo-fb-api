interface TitleCardProps {
  postCount: number;
}

export default function TitleCard({ postCount }: TitleCardProps) {
  const enableClass = postCount > 0 ? "text-black" : "text-gray-400";

  return (
    <div className="flex w-full h-28 rounded-xl bg-white p-2 shadow-md shadow-black/5">
      <div className="flex items-center justify-center w-[75%]">
        <h2 className={"font-semibold text-xl " + enableClass}>
          {postCount > 0
            ? `Scheduled posts for today (${new Date()
                .toISOString()
                .slice(0, 10)})`
            : "Scheduled posts for today (Not yet..)"}
        </h2>
      </div>
      <div className="flex flex-col w-[25%] justify-center items-end pr-6">
        <div className="flex items-center">
          <label htmlFor="posted" className="px-4 text-md">
            Posted
          </label>
          <input
            type="radio"
            name="posted"
            id="posted"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="not-posted" className="px-4 text-md">
            Not-Posted
          </label>
          <input
            type="radio"
            name="not-posted"
            id="not-posted"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
