export default function LeftMain() {
    return (
      <main>
        <section>
          <div className="left">
            <div className="l_image" />
            <img src="https://avatars.githubusercontent.com/u/81014558?v=4" />
  
            <h2>Mahmoud Ali Khider</h2>
          </div>
          <div className="inf">
            <ul>
              <li>
                <i className="fas fa-briefcase"></i> programer{" "}
              </li>
              <br />
              <li>
                <i className="fas fa-home"></i> Meofia
              </li>
              <br />
              <li>
                <i className="fas fa-envelope"></i> Mahmoud@mail.com
              </li>
              <br />
              <li>
                <i className="fas fa-phone"></i>0102346787
              </li>
            </ul>
            <hr width="80%" />
          </div>
          <div className="skills">
            <h3>
              <i className="fas fa-star"> Skills</i>
            </h3>
            <ul>
              <li>
                <p>Adobe photoshop</p>
                <progress max="100" value="90"></progress>
              </li>
              <li>
                <p>photography</p>
                <progress max="100" value="80"></progress>
              </li>
              <li>
                <p>illustrator</p>
                <progress max="100" value="75"></progress>
              </li>
              <li>
                <p>Media</p>
                <progress max="100" value="50"></progress>
              </li>
            </ul>
          </div>
  
          <div className="language">
            <h3>
              <i className="fas fa-globe-africa"> language</i>
            </h3>
            <ul>
              <li>
                <p>English</p>
                <progress max="100" value="100"></progress>
              </li>
              <li>
                <p>Spanish</p>
                <progress max="100" value="50"></progress>
              </li>
              <li>
                <p>German</p>
                <progress max="100" value="25"></progress>
              </li>
            </ul>
          </div>
        </section>
  
        <section className="reight">
          <div className="one">
            <h1>
              <i className="fas fa-briefcase"></i> Work Experience{" "}
            </h1>
            <br />
            <h3>Front End Developer /w3school.com</h3>
            <p>
              {" "}
              <i className="fas fa-calendar"> </i> jan 2019- <mark>Current</mark>
            </p>
            <p>
              Reade Advanced Materials began revolutionizing the chemicals
              industry over 200 years ago, and today it has secured a position as
              one of the premiere specialty chemical solids distributors in the
              world. With an extensive inorganic , READE represents carefully
              vetted manufacturers as a global distributor,
            </p>
            <hr />
            <h3>Web Developer /something.com</h3>
            <p>
              {" "}
              <i className="fas fa-calendar"> </i>may 2019-Dec 2021
            </p>
            <p>
              Reade Advanced Materials began revolutionizing the chemicals
              industry over 200 years ago, and today it has secured a position as
              one of the premiere specialty chemical solids distributors in the
              world
            </p>
            <hr />
  
            <h3>Graphic Desiner /something.com</h3>
            <p>
              {" "}
              <i className="fas fa-calendar"> </i>may 2019-Dec 2021
            </p>
            <p>
              Reade Advanced Materials began revolutionizing the chemicals
              industry over in the world
            </p>
          </div>
          <div className="two">
            <h2>
              <i className="fas fa-star"></i>Education
            </h2>
            <p>w3school.com</p>
            <p>
              <i className="fas fa-calendar"></i> Farever
            </p>
            <p>web Developer All i nead to know in one place</p>
            <br />
            <hr />
  
            <p>London Bussiness</p>
            <p>
              <i className="fas fa-calendar"></i>2017-2019
            </p>
            <p>web Developer All i nead to know in one place</p>
            <br />
            <hr />
            <p>school of coding</p>
            <p>
              <i className="fas fa-calendar"></i> 2015-2020
            </p>
            <p>web Developer All i nead to know in one place</p>
            <br />
          </div>
        </section>
      </main>
    );
  }
  