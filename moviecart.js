import { Component } from "react";
import "./index.css";

class Moviecart extends Component {
  render() {
    return (
      <div className="main">
        {/* Movie Card 1 */}
        <div className="movie-card">
          <div className="left">
            <img alt='poster' src="https://m.media-amazon.com/images/I/51KxmNsnWtL._SX300_SY300_QL70_FMwebp_.jpg"></img>
          </div>

          <div className="right">
            <div className="title">The Avengers</div>
            <div className="plot">Super Natural power shown in the movie</div>
            <div className="price">₹199</div>

            <div className="footer">
              <div className="rating">8.2</div>
              <button className="str-btn">★</button>
              <button className="favourite-btn">Add to Favorite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Movie Card 2 */}
        <div className="movie-card">
          <div className="left">
            <img alt='poster' src="https://m.media-amazon.com/images/I/51j6r6qLH0S._SX300_SY300_QL70_FMwebp_.jpg"></img>
          </div>

          <div className="right">
            <div className="title">Inception</div>
            <div className="plot">A thief who enters the dreams of others.</div>
            <div className="price">₹299</div>

            <div className="footer">
              <div className="rating">8.8</div>
              <button className="str-btn">★</button>
              <button className="favourite-btn">Add to Favorite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Movie Card 3 */}
        <div className="movie-card">
          <div className="left">
            <img alt='poster' src="https://m.media-amazon.com/images/I/51IZBp-6QxL._SX300_SY300_QL70_FMwebp_.jpg"></img>
          </div>

          <div className="right">
            <div className="title">Joker</div>
            <div className="plot">An exploration of a man disregarded by society.</div>
            <div className="price">₹249</div>

            <div className="footer">
              <div className="rating">8.4</div>
              <button className="str-btn">★</button>
              <button className="favourite-btn">Add to Favorite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecart;
