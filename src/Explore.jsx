import Pic from "./Pic";

const ExplorePreview = () => {

const numPics=12;

return (
    <div className="image-grid h-[100%] grid justify-center content-center grid-cols-3 grid-rows-4 gap-[1px]">
      {Array.from({ length: numPics }).map((_, index) => (
        <Pic key={index} />
      ))}
    </div>
  );
}
export default ExplorePreview;
