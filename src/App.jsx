import './App.css'

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src="logo.jpg" width="80px" />
            </div>
            <nav>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Account</a></li>
              </ul>
            </nav>
            <img src="images/cart.png" width="30" height="30" />
          </div>
          
          <div className="row">
            <div className="col-2">
              <h2>GIVE YOUR STYLE <br />A NEW OUTFIT!</h2>
              <a href="" className="btn">Explore now &#8594;</a>
            </div>
          </div>
        </div>
      </div>

      {/* featuring category */}
      <div className="categories">
        <div className="container">
          <div className="col-3">
            <img src="images/category-1.jpg" />
            <img src="images/category-2.jpg" />
            <img src="images/category-3.jpg" />
          </div>
        </div>
      </div>

      {/* featuring products */}
      <h2 id="title">Featured products</h2>
      <div className="small-container">
        <div className="col-4">
          <img src="shopping.webp" />
          <h4>Aesthetic black jeans</h4>
          <p>&#9733;&#9733;&#9733;&#9734;</p>
          <p>$20.34</p>
          <button>Add to cart</button>
        </div>
        <div className="col-4">
          <img src="t shirt.jpeg" />
          <h4>Good quality blue t-shirt</h4>
          <p>&#9733;&#9733;&#9733;&#9734;</p>
          <p>$20.34</p>
          <button>Add to cart</button>
        </div>

        <div className="col-4">
          <img src="hoddie.jpeg" />
          <h4>Aesthetic black hoddie</h4>
          <p>&#9733;&#9733;&#9733;&#9734;</p>
          <p>$21.34</p>
          <button>Add to cart</button>
        </div>
        
        <div className="col-4">
          <img src="shoes.jpg" width="220" />
          <h4>Best quality sneakers</h4>
          <p>&#9733;&#9733;&#9733;&#9734;</p>
          <p>$15.22</p>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default App