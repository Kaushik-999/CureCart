
import "./CardImage.css"; // import custom css file
import { RiHeartPulseLine } from "react-icons/ri";
import { FaStethoscope } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";

function CardImage() {
return (
    <div className="card-image-container">
      <div className="card1">
        <div className="icons-container1">
          {/* <RiHeartPulseLine /> */}
          <h2>500</h2>
          <p>SUCCESS SMILE</p>
        </div>
      </div>
      <div className="card1">
        <div className="icons-container1">
          <FaStethoscope />
          <h2 className="count">300</h2>
          <p>HAPPY DONORS</p>
        </div>
      </div>
      <div className="card1">
        <div className="icons-container1">
          <BsFillPeopleFill />
          <h2 className="count">500</h2>
          <p>HAPPY RECIPIENT</p>
        </div>
      </div>
      <div className="card1">
        <div className="icons-container1">
          <FaAward />
          <h2 className="count">345</h2>
          <p>TOTAL AWARDS</p>
        </div>
      </div>
    </div>
  );
}

export default CardImage;
