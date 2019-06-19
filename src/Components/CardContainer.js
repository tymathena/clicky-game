import React from "react";
import { Row, Col } from "./Grid";
import Card from "./Card";

const baselineCards = [
  {
    img:
      "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs",
    clicked: false
  },
  {
    img:
      "http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg",
    clicked: false
  },
  {
    img:
      "https://amp.businessinsider.com/images/5b22c10042e1cc25fc535e38-750-563.jpg",
    clicked: false
  },
  {
    img:
      "https://tractive.com/static/images/product-images/tratr3g/tractive-gps-3g-dogtracker-dalmatian-dog.jpg",
    clicked: false
  },
  {
    img:
      "https://pixel.nymag.com/imgs/daily/vulture/2019/01/14/14-a-dogs-way-home.w700.h700.jpg",
    clicked: false
  },
  {
    img:
      "https://www.animalhouseshelter.com/wp-content/uploads/2019/05/Ace-1-600x600.png",
    clicked: false
  }
];

class CardContainer extends React.Component {
  state = {
    cards: [
      {
        img:
          "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs",
        clicked: false
      },
      {
        img:
          "http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg",
        clicked: false
      },
      {
        img:
          "https://amp.businessinsider.com/images/5b22c10042e1cc25fc535e38-750-563.jpg",
        clicked: false
      },
      {
        img:
          "https://tractive.com/static/images/product-images/tratr3g/tractive-gps-3g-dogtracker-dalmatian-dog.jpg",
        clicked: false
      },
      {
        img:
          "https://pixel.nymag.com/imgs/daily/vulture/2019/01/14/14-a-dogs-way-home.w700.h700.jpg",
        clicked: false
      },
      {
        img:
          "https://www.animalhouseshelter.com/wp-content/uploads/2019/05/Ace-1-600x600.png",
        clicked: false
      }
    ]
  };

  //Fisher-Yates shuffler
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleClick = e => {
    let temp;

    if (this.state.cards[e].clicked) {
      this.lose();
    } else {
      temp = this.state.cards;
      temp[e].clicked = true;

      this.setState({
        cards: this.shuffle(temp)
      });

      this.clickWin();
    }
  };

  componentDidMount() {
    console.log("Maaybe shuffled");
    this.setState({
      cards: this.shuffle(this.state.cards)
    });
  }

  lose() {
    this.setState({
      cards: baselineCards
    })
    
    alert("You Lose");

  }

  clickWin() {
    for(let i=0; i < this.state.cards.length; i++) {
      if (!this.state.cards[i].clicked) {
        return false
      }
    }
    alert("You Win")
    this.setState({
      cards: baselineCards
    })
  }

  render() {
    return (
      <Row>
        <Col size="md-4">
          <Card
            img={this.state.cards[0].img}
            clicked={this.state.cards[0].clicked}
            clickFn={() => this.handleClick(0)}
          />
          <Card
            img={this.state.cards[1].img}
            clicked={this.state.cards[1].clicked}
            clickFn={() => this.handleClick(1)}
          />
        </Col>

        <Col size="md-4">
          <Card
            img={this.state.cards[2].img}
            clicked={this.state.cards[2].clicked}
            clickFn={() => this.handleClick(2)}
          />
          <Card
            img={this.state.cards[3].img}
            clicked={this.state.cards[3].clicked}
            clickFn={() => this.handleClick(3)}
          />
        </Col>

        <Col size="md-4">
          <Card
            img={this.state.cards[4].img}
            clicked={this.state.cards[4].clicked}
            clickFn={() => this.handleClick(4)}
          />
          <Card
            img={this.state.cards[5].img}
            clicked={this.state.cards[5].clicked}
            clickFn={() => this.handleClick(5)}
          />
        </Col>
      </Row>
    );
  }
}

export default CardContainer;
