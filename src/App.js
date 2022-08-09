import ContactBtn from "./js/components/ContactBtn/ContactBtn.jsx";
import Navbar from "./js/components/Navbar/Navbar.jsx";
import PageHeader from "./js/components/PageHeader/PageHeader.jsx";
import SkillsIntro from "./js/components/SkillsIntro/SkillsIntro.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageHeader />
      <SkillsIntro />
      <ContactBtn />
    </div>
  );
}

export default App;
