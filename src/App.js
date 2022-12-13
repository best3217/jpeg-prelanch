import Header from "./components/header";
import Footer from "./components/footer";
import ConnectBtn from "./components/connectBtn";
import titleImg from "./assets/images/lading_title.png"
import landingBg from "./assets/images/landing.png"
import "./assets/sass/app.scss"

export default function Home() {
  return (
    <>
      <Header />

      <main className="landing-page">
        <h4 className="sub-title">
          Earn, Hedge and Speculate on your favorite NFTs
        </h4>
        <img src={titleImg} alt="title" className="title" />
        <ConnectBtn className="btn btn-waitlist">Join Waitlist</ConnectBtn>
        <img src={landingBg} alt="background" className="landing-bg" />
      </main>

      <Footer />
    </>
  );
}
