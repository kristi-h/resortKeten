const Img = ({ src }) => {
  return (
    <div className="h-[1200px] w-[1200px]">
      <img className="block h-full w-full" src={src} alt="" />
    </div>
  );
};

export default Img;
