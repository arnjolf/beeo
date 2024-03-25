import Company from "../Company/Company";
import History from "../History/History";
import Slogan from "../Slogan/Slogan";
import VideoBox from "../VideoBox/VideoBox";

export default function Main() {
  return (
    <main>
      <VideoBox />
      <Slogan />
      <Company />
      <History />
    </main>
  );
}
