import { useParams } from "react-router-dom";

export default function PicPage() {
	const { id } = useParams();

	const path = `/pics/img${id}.jpg`;
  console.log(path);
	return <img src={ path } />;
}
