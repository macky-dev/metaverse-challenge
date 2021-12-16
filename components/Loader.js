const Loader = () => {
  return (
    <div className="bg-fuchsia-400 p-4 rounded-full flex space-x-2">
      <div className="w-5 h-5 bg-yellow-300 rounded-full animate-bounce animation-delay-100"></div>
      <div className="w-5 h-5 bg-yellow-300 rounded-full animate-bounce animation-delay-200"></div>
      <div className="w-5 h-5 bg-yellow-300 rounded-full animate-bounce animation-delay-300"></div>
    </div>
  );
};

export default Loader;
