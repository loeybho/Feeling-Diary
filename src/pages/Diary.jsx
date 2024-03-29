import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params.id);
  return <div></div>;
};

export default Diary;
