import { PicRenderer } from "../PicHandler";
import { Header } from "../BaseComponents";

export const ExplorePreview = () => {
	const rows = 3;

	return (
  <PicRenderer rows={ rows } />
	);
};

export default function Explore() {
  return <div>
  <h2> Something here </h2>
  </div>


}
