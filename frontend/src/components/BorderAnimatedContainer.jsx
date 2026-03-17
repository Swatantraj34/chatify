function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse flex overflow-hidden">

      <div className="w-full h-full bg-slate-900 rounded-2xl flex">
        {children}
      </div>

    </div>
  );
}

export default BorderAnimatedContainer;