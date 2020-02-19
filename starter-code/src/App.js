import React, { Component } from "react";

const IdCard = props => {
  return (
    <div className="field">
      <p style={{ float: "left" }}>
        <img src={props.picture} />
      </p>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
    </div>
  );
};

const Greetings = props => {
  const languages = {
    de: "Hallo",
    en: "Hello",
    fr: "Bonjour",
    es: "Hola"
  };

  return (
    <div>
      {languages[props.lang]} {props.children}
    </div>
  );
};

const Random = props => {
  return (
    <div>{Math.floor(Math.random() * (props.max - props.min) + props.min)}</div>
  );
};

const BoxColor = props => {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    // backgroundImage: 'url(' + imgUrl + ')',
  };

  return (
    <div style={divStyle}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
};

const CreditCard = props => {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color
    // backgroundImage: 'url(' + imgUrl + ')',
  };

  return (
    <div style={divStyle}>
      <p>{props.type}</p>
      <p> {props.number} </p>
      <p>
        Expires{props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p> {props.owner} </p>
    </div>
  );
};

class LikeButton extends React.Component {
  state = {
    count: 0
  };
  countClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.countClick}>{this.state.count}Likes</button>
      </div>
    );
  }
}

class ClickablePicture extends React.Component {
  divStyle2 = {
    height: "200px",
    width: "200px"
    // backgroundImage: 'url(' + imgUrl + ')',
  };
  state = {
    glassOn: false,
    image: this.props.img
  };

  addGlass = () => {
    if (this.state.glassOn) {
      this.setState({
        glassOn: false,
        image: this.props.img
      });
    } else {
      this.setState({
        glassOn: true,
        image: this.props.imgClicked
      });
    }
  };
  render() {
    return (
      <div>
        <img
          style={this.divStyle2}
          onClick={this.addGlass}
          src={this.state.image}
        />
      </div>
    );
  }
}

class Dice extends React.Component {
  divStyle = {
    height: "200px",
    width: "200px"
    // backgroundImage: 'url(' + imgUrl + ')',
  };

  state = {
    // counter: Math.floor(Math.random() * (6 - 1) + 1),
    img: `/img/dice${Math.floor(Math.random() * (7 - 1) + 1)}.png`
  };

  changeDice = () => {
    this.setState({
      img: `/img/dice-empty.png`
    });

    setTimeout(() => {
      this.setState({
        img: `/img/dice${Math.floor(Math.random() * (7 - 1) + 1)}.png`
      });
      console.log(this.state);
    }, 1000);
  };
  render() {
    return (
      <div>
        <img
          onClick={this.changeDice}
          style={this.divStyle}
          src={this.state.img}
        />
      </div>
    );
  }
}

class Carousel extends React.Component {
  state = {
    number: 0
  };

  leftClick = () => {
    if (this.state.number <= 0) {
      this.setState({
        number: 3
      });
    } else {
      this.setState({
        number: this.state.number - 1
      });
    }
  };

  rightClick = () => {
    if (this.state.number > 2) {
      this.setState({
        number: 0
      });
    } else {
      this.setState({
        number: this.state.number + 1
      });
    }
  };

  render() {
    // console.log(this.props.imgs[this.state.number]);
    return (
      <div>
        <button onClick={this.leftClick}>Left</button>
        <img src={this.props.imgs[this.state.number]} />
        <button onClick={this.rightClick}>Right</button>
      </div>
    );
  }
}

class NumbersTable extends React.Component {
  render() {
    return <div></div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14").toString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1988-05-11").toString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <h1>CreditCard</h1>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
        <h1>LikeButton</h1>
        <LikeButton />
        <LikeButton />

        <h1>ClickablePicture</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
        <h1>Dice</h1>
        <Dice />
        <h1>Carousel</h1>
        <Carousel
          imgs={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg"
          ]}
        />
        <h1>NumbersTable</h1>
        <NumbersTable limit={12} />
      </div>
    );
  }
}

export default App;
