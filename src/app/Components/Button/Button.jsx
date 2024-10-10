export const Button = ({ children, onClick, className }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`bg-voilet-100 hover:bg-blue-200 text-voilet-50 font-bold py-2 px-4 rounded-md ${className}`}
      >
        {children}
      </button>
    </>
  );
};
