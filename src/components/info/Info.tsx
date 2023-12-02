import "./Info.css";
import imageone from "../../../public/assets/infop.png";
import imaged from "../../../public/assets/infopd.png";
import infotr from "../../../public/assets/infotree.png";
import bi from "../../../public/assets/bi.png";
import st from "../../../public/assets/st.png";
import bk from "../../../public/assets/bk.png";
import et from "../../../public/assets/teather.png";
import gp from "../../../public/assets/group.png";
import ls from "../../../public/assets/clarity.png";
import pc from "../../../public/assets/pcimage.png";
const Info = () => {
  return (
    <div className="wrapper">
      <div className="slide-section">
        <div className="info-bar">
          <p className="bar-text">Building Succesful Buisness since 1985</p>
        </div>
        <div className="info-section" id="about">
          <h3 className="info-header">
            The <span>LOCALE</span> Way
          </h3>
          <p className="info-p">
            Learn about our travel management services for Corporate, Sports,
            Entertainment, Groups, Events and Leisure.
          </p>
          <div className="info-images">
            <div className="image-ct">
              <img src={imageone}></img>
              <div className="info-py">
                <h3>Travel Technology</h3>
                <br></br>
                <p>
                  Big scale transportation for sports events and corporate
                  serivce
                </p>
              </div>
            </div>
            <div className="image-ct">
              <img src={imaged}></img>
              <div className="info-py">
                <h3>Speed and efficiency</h3>
                <br></br>
                <p>
                  Efficient skies, global ties, your cargo's journey is <br></br> our
                  commitment.
                </p>
              </div>
            </div>

            <div className="image-ct">
              <img src={infotr}></img>
              <div className="info-py">
                <h3>Spend Smarter</h3>
                <br></br>
                <p>
                  Cost effective, discounts in bigger cargos, all shipments
                  insured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper">
        <div id="div1">
          {" "}
          <h3 className="about-h2">
            Our <span>LOCALE</span> Way
          </h3>
          <h4 className="about-h4">Well-crafted at every touchpoint</h4>
          <p className="about-p">
            Locale Travel is an independent, Australian owned and operated
            company. Our staff have project managed some of the most difficult
            travel and freight logistic tasks in Australia. As a company we are
            fully experienced in all areas of travel management. From our
            innovative corporate travel solutions, to our expertise in strategic
            planning for Sporting organisations, LOCALE Travel creates
            one-of-a-kind experiences for our partners.
          </p>
        </div>
        <div id="div2"></div>
      </div>
      <div id="wrapper">
        <div id="div3"></div>
        <div id="div4">
          {" "}
          <h3 className="about-h2">
            Why <span>LOCALE</span> Travel
          </h3>
          <h4 className="about-h4">Well-crafted at every touchpoint</h4>
          <p className="about-p">
            The combined experience across our board, management and employees
            runs into the HUNDREDS of years. We have a great blend of aged,
            experience to youthful, energy. The services you require we have
            done, are doing, and will continue to do. We have all come together
            for the sole purpose of providing the BEST for YOU. We know every
            client and organisation is different and special in their way. We
            love constructing solutions and programs that are suited to you.
          </p>
        </div>
      </div>

      <div className="offers-section" id="discover">
        {" "}
        <div className="offers-bar">
          <h2>What we offer</h2>{" "}
          <p>
            Learn about our travel management services for Corporate, Sports,
            Entertainment, Groups, Events and Leisure.
          </p>
        </div>
        <div className="pic-one">
          <h3>Buisness travel</h3>
        </div>
        <div className="pic-two">
          <h3>Leisure</h3>
        </div>
        <div className="pic-three">
          <h3>Sports</h3>
        </div>
        <div className="pic-four">
          <h3>Entertainment</h3>
        </div>
        <div className="pic-five">
          <h3>Online Booking Tools</h3>
        </div>
      </div>
      <div className="wedo-section" id="options">
        <h3>
          What <span>We Do</span>
        </h3>
        <p>
          Learn about our travel management services for Corporate, Sports,
          Entertainment, Groups, Events and Leisure.
        </p>
        <div className="square-wrapper">
          <div className="square-info">
            <img src={bi}></img>
            <h4>Unique Event Travel</h4>
            <p>
              Locale Travel provides a full spectrum of Event Travel Management
              Services. We can provide the hotel rooms you need. We can provide
              the transfers you need from the airport to the hotel.
            </p>
          </div>
          <div className="square-info">
            <img src={st}></img>
            <h4>Corporate</h4>
            <p>
              At Locale Travel, our job is to guide you through this fast-paced
              environment, ensuring your travel program is running smoothly and
              efficiently while your travellers receive the best in customer
              service, technology and security.
            </p>
          </div>

          <div className="square-info">
            <img src={bk}></img>
            <h4>Sports</h4>
            <p>
              Sport isn’t confined to office hours – and neither are we. It's
              inevitable that most of the last minute glitches that occur tend
              to happen out of business hours, when many sports travel
              management companies have closed their doors and gone home.
            </p>
          </div>
          <div className="square-info">
            <img src={et}></img> <h4>Entertainment</h4>
            <p>
              Highly experienced staff that understand the flexibility and
              organisation that’s needed. Over three decades of experience with
              touring parties. Close relationships with the travel suppliers you
              use. Exceptional service and benefits when you need it now. Not
              later.
            </p>
          </div>
          <div className="square-info">
            <img src={gp}></img>
            <h4>Conference travels</h4>
            <p>
              Your successful group travel and conference is created from a mix
              of the right people, resources and know-how. Take advantage of our
              unique group travel & conference technology tools.
            </p>
          </div>
          <div className="square-info">
            <img src={ls}></img>
            <h4>Leisure</h4>
            <p>
              You can be confident your leisure and holiday travel will be a
              unique and well crafted 'event' - because Locale Travel will apply
              the quality and personal attention and experience we apply to all
              our travel solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="read-section">
        <h2>
          READ ABOUT THE <span>LOCALE</span> TECHNOLOGY
        </h2>
        <h4>
          Multiple cloud based travel systems configured and combined to your
          requirements.
        </h4>
        <img src={pc}></img>
        <p>
          Mi facilisi cras pharetra semper risus ac odio. Sit donec nunc libero
          nunc vel ipsum quam. Ac netus tincidunt elementum nam fringilla
          egestas etiam. Pharetra congue in dolor imperdiet. Lectus vivamus
          elementum elit venenatis sed. Proin quisque amet, elit tellus dictum
          nunc. Etiam id turpis tortor eu blandit. Duis consequat est nec
          consectetur. Semper bibendum ut ante nibh aliquam diam vitae enim
          pellentesque. Pretium, mi tortor, non ac et. Quis faucibus non auctor
          vel interdum sed. Ipsum elit rutrum ornare sapien.
        </p>
      </div>
      <div className="contact-section">
        <div className="phone">
        </div>
        <div className="contact-form" id="contact">
          <h3>Contact us now</h3>{" "}
          <h4>Fill out the form below.</h4>
          <form>
            <input type="text" id="full-name" name="full-name" placeholder="Full name" required /><br></br>
            <input type="email" id="email" name="email" placeholder="Email" required /><br></br>
            <input type="text" id="subject" className="subject" name="subject" placeholder="Message" required /><br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="talk-section">
        <h4>What are you waiting for?</h4>
        <h2>Lets talk travel</h2>
        <button>Contact us</button>
      </div>
    </div>
  );
};

export default Info;
