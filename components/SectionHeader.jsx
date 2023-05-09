const SectionHeader = ({ span, h2, p }) => {
  return (
    <div className="flex items-center flex-col text-center gap-1">
      <span className="uppercase text-sm font-bold tracking-widest">
        {span}
      </span>
      <h2 className="text-2xl">{h2}</h2>
      <p className="w-3/5 text-gray-500">{p}</p>
    </div>
  );
};

export default SectionHeader;
