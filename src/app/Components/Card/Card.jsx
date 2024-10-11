import { SimpleCard } from "..";

const simpleCards = [
  {
    id: 1,
    number: 10,
    title: "Newly Hired People",
    description: "Increase since last quarter",
  },
  {
    id: 2,
    number: 251,
    title: "Active People",
    description: "Increase since last quarter",
  },
  {
    id: 3,

    title: "New hires",
  },
  {
    id: 4,
    title: "Salary range of employees",
  },
];

export function Card() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center lg:flex-row mb-8">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h4 className="pt-6 text-4xl text-black">Employee Overview,</h4>
        </div>
      </div>

      <div className="flex gap-8">
        {simpleCards.map((item) => (
          <SimpleCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
