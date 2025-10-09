//E-Commerce Website Exclusively for students
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
function Web() {
  const [Click, SetClick] = useState(false);
  return (
    <BrowserRouter>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3 shadow-sm rounded mt-2">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-light" to="/">EduMart</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/user">Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/products">View products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/retail">Retail</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes Section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/products" element={<Products />} />
        <Route path="/retail" element={<Retail />} />
      </Routes>
    </BrowserRouter>
  );

    function Home() {
    return (
      <>
        <div class="welcome"> <h1>Welcome to EduMart!</h1>
    <h3>Your trusted partner for all student essentials</h3>
    <p class="lead">EduMart is built exclusively for students. Our motive is to provide quality stationery and educational tools at affordable prices, empowering students to learn smartly and conveniently.</p>
    <h4>Happy Shopping!</h4>
    <img src="https://wallpaperaccess.com/full/2593105.jpg" alt="stationary" width="80%" height="500"/>
</div>
   <section class="why-choose bg-light">
    <div class="container">
      <h2>Why Choose EduMart?</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card p-4">
            <h5>🎓 Student Focused</h5>
            <p>All our products are curated with students in mind, ensuring top quality and affordability.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-4">
            <h5>💰 Budget Friendly</h5>
            <p>We bring you the best offers and deals that fit every student’s pocket.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-4">
            <h5>🚚 Fast Delivery</h5>
            <p>Get your essentials delivered to your doorstep quickly and safely.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="services">
    <div class="container">
      <h2>Our Services</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card p-4">
            <h5>🛒 Online Shopping</h5>
            <p>Shop all your study materials and stationery online with ease.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-4">
            <h5>♻️ Notebook Exchange</h5>
            <p>Encourage sustainability by exchanging used notebooks with others.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card p-4">
            <h5>💡 Student Support</h5>
            <p>Access study tips, guides, and tools to help you excel in academics.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
 
      </>
    );
  }
  function User() {
    return (
    <div className="container mt-5 p-4 border rounded shadow-lg bg-light">
      <h1 className="text-center text-primary mb-4">Welcome to the Sign Up Page!</h1>
      <h2 className="text-center text-secondary mb-3">
        Sign up to stay updated about the discounts and offers
      </h2>
      <h3 className="text-center mb-4">Fill your details below to sign up</h3>

      <form className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">UserName:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-Enter your password"
          />
        </div>
      </form>

      <div className="text-center mt-4">
        {Click ? (
          <h3 className="text-success">
            We got your details... Welcome to the amazing community of web-page name!
          </h3>
        ) : (
          <h3 className="text-danger">
            Please confirm your details before submitting!
          </h3>
        )}

        <button
          type="submit"
          className="btn btn-primary mt-3 px-4"
          onClick={(e) => {
            e.preventDefault();
            SetClick(true);
          }}
        >
          Submit!
        </button>
      </div>
    </div>
  );
}
  
function Products() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 fw-bold text-primary">
        WELCOME TO THE PRODUCTS PAGE!
      </h1>

      <div className="row gy-5">
        {/* Product 1 */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm border-0">
            <img
              src="https://www.invulboekjes.nl/wp-content/uploads/2020/12/studio-stationery-planner-my-pink-planner-per-3-st.jpg"
              className="card-img-top rounded"
              alt="notebook"
              height="300"
            />
            <div className="card-body">
              <h5 className="card-title text-center text-secondary">
                Aesthetic Pink Notebook for Women
              </h5>
              <details className="small">
                <summary className="fw-bold">View Details</summary>
                <p className="mt-2">
                  Aesthetic Thick Spiral Notebook Journal For Women in B5 Format
                  - Stylish Linen Hardcover College Ruled Note Book with 300 Lined
                  Pages. Perfect for Bible Study & Staying Organized.
                </p>
              </details>
              <p>
                  Price: <del>$50</del> <br />
                  Offer Price: <ins>$35</ins>
                </p>
                <button type="button" class="btn btn-primary">
  Buy Now
</button>

              <h6 className="text-warning text-center mt-3">⭐ ⭐ ⭐ ⭐</h6>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm border-0">
            <img
              src="https://m.media-amazon.com/images/I/619-x575S9L._SL1200_.jpg"
              className="card-img-top rounded"
              alt="Panda light"
              height="300"
            />
            <div className="card-body">
              <h5 className="card-title text-center text-secondary">
                Cute Panda Study Lamp
              </h5>
              <details className="small">
                <summary className="fw-bold">View Details</summary>
                <p className="mt-2">
                  Cute Panda Lamps with Timers, 3 Levels Dimmable 7 Colors Panda
                  Light for Kids, LED Squishy Novelty Night Lamp, Food Grade
                  Silicone Touch Nursery LED Mood Light.
                </p>
              </details>
              <p>
                Price: <del>$60</del> <br />
                Offer Price: <ins>$45</ins>
              </p>
              <button type="button" class="btn btn-primary">
  Buy Now
</button>

              <h6 className="text-warning text-center mt-3">⭐ ⭐ ⭐ ⭐</h6>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm border-0">
            <img
              src="https://m.media-amazon.com/images/I/510yAPuX-9L._SX522_.jpg"
              className="card-img-top rounded"
              alt="StickyNotes"
              height="300"
            />
            <div className="card-body">
              <h5 className="card-title text-center text-secondary">
                Camyla Zoo Sticky Notes
              </h5>
              <details className="small">
                <summary className="fw-bold">View Details</summary>
                <p className="mt-2">
                  Camyla Zoo Series Animal Sticky Notes | Cute Kawaii Animal Memo
                  Pads – Puppy, Kitten, Bear & Bunny Designs | 1728 Sheets per Pack.
                </p>
              </details>
              <p>
                  Price: <del>$100</del> <br />
                  Offer Price: <ins>$50</ins>
                </p>
                <button type="button" class="btn btn-primary">
  Buy Now
</button>

              <h6 className="text-warning text-center mt-3">⭐ ⭐ ⭐ ⭐</h6>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm border-0">
            <img
              src="https://m.media-amazon.com/images/I/7131mLRzYYL._SX679_.jpg"
              className="card-img-top rounded"
              alt="Scrapbook"
              height="300"
            />
            <div className="card-body">
              <h5 className="card-title text-center text-secondary">
                Vintage Aesthetic Scrapbook Kit
              </h5>
              <details className="small">
                <summary className="fw-bold">View Details</summary>
                <p className="mt-2">
                  Vintage Aesthetic Scrapbook Kit (346Pcs) with Bullet Junk Journal,
                  Stationery, A6 Grid Notebook – Perfect Gift for Teen Girls & Women.
                </p>
              </details>
              <p>
                  Price: <del>$200</del> <br />
                  Offer Price: <ins>$100</ins>
                </p>
                <button type="button" class="btn btn-primary">
  Buy Now
</button>

              <h6 className="text-warning text-center mt-3">⭐ ⭐ ⭐ ⭐</h6>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm border-0">
            <img
              src="https://m.media-amazon.com/images/I/71O02GLOQqL._SX522_.jpg"
              className="card-img-top rounded"
              alt="Cute pouch"
              height="300"

            />
            <div className="card-body">
              <h5 className="card-title text-center text-secondary">
                Premium Pencil Case
              </h5>
              <details className="small">
                <summary className="fw-bold">View Details</summary>
                <p className="mt-2">
                  PRIME DEALS Canvas Premium Pencil Case Hangable 6 Layer with 3
                  Compartments – Large Capacity Cute Stationery Gift for Girls.
                </p>
              </details>
              <p>
                  Price: <del>$120</del> <br />
                  Offer Price: <ins>$80</ins>
                </p>
                <button type="button" class="btn btn-primary">
  Buy Now
</button>

              <h6 className="text-warning text-center mt-3">⭐ ⭐ ⭐ ⭐</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Retail() {
  return (
    <div className="container">
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold text-primary">WELCOME TO THE RETAIL PAGE</h2>
      </div> 
    <div className="">
<div className="row gy-5 justify-content-center">
      {/* Product 1 */}
      <div className="col-md-6 card col-lg-4 shadow-sm border-0">
        <div className="card-body text-center">
          <h2 className="card-title text-secondary fw-semibold">
            Handwritten Aesthetic Notes
          </h2>
          <img
            src="https://i.redd.it/g882ov8qbda01.jpg"
            alt="Notes"
            height="300"
            width="300"
            className="img-fluid rounded my-3"
          />
          <summary></summary>
          <details className="small text-start">
            <p>
              These handwritten notes are filled with vibrant colours and neat
              layouts that make studying a joy. Each page blends creativity with
              clarity, turning learning into an aesthetic experience.
            </p>
          </details>
          <p>
              Price: <del>$200</del>
              <br />
              Offer Price: <ins>$150</ins>
            </p>
            <button type="button" class="btn btn-primary">
  Buy Now
</button>

          <h3 className="text-warning mt-3">⭐ ⭐ ⭐ ⭐</h3>
        </div>
      </div>
      {/* Product 2 */}
      <div className="col-md-6 card m-5 col-lg-4 shadow-sm border-0">
        <div className="card-body text-center">
          <h2 className="card-title text-secondary fw-semibold">
            Colourful Productivity Notes
          </h2>
          <img
            src="https://i.pinimg.com/1200x/91/b2/6f/91b26f4dc8b7024dcd17f7c510f82f91.jpg"
            alt="Colourful Notes"
            height="300"
            width="300"
            className="img-fluid rounded my-3"
          />
          <summary></summary>
          <details className="small text-start">
            <p>
              A perfect mix of beauty and productivity! These notes use
              colourful pens and tidy handwriting to make even tough topics feel
              light and engaging.
            </p>
          </details>
          <p>
              Price: <del>$300</del>
              <br />
              Offer Price: <ins>$150</ins>
            </p>
            <button type="button" class="btn btn-primary">
  Buy Now
</button>

          <h3 className="text-warning mt-3">⭐ ⭐ ⭐ ⭐</h3>
        </div>
      </div>
      {/* Product 3 */}
      <div className="col-md-6 card col-lg-4 shadow-sm border-0">
        <div className="card-body text-center">
          <h2 className="card-title text-secondary fw-semibold">
            Minimal Aesthetic Notes
          </h2>
          <img
            src="https://i.pinimg.com/736x/5a/06/2b/5a062bc584b8d54e3a02aa94073b3d5a.jpg"
            alt="Minimal Notes"
            height="300"
            width="300"
            className="img-fluid rounded my-3"
          />
          <summary></summary>
          <details className="small text-start">
            <p>
              Every page of these notes is a visual treat — clean handwriting,
              smooth highlights, and an eye-catching design that helps ideas
              stick better.
            </p>
           
          </details>
           <p>
              Price: <del>$100</del>
              <br />
              Offer Price: <ins>$50</ins>
            </p>
            <button type="button" class="btn btn-primary">
  Buy Now
</button>

          <h3 className="text-warning mt-3">⭐ ⭐ ⭐ ⭐</h3>
        </div>
      </div>
      {/* Product 4 */}
      <div className="col-md-6 m-5 card col-lg-4 shadow-sm border-0">
        <div className="card-body text-center">
          <h2 className="card-title text-secondary fw-semibold">
            Pastel Study Notes
          </h2>
          <img
            src="https://www.matrix.edu.au/wp-content/uploads/2019/05/english-guide-year-9-how-to-take-and-write-notes-strategies-visual-mindmap.jpg"
            alt="Pastel Notes"
            height="300"
            width="300"
            className="img-fluid rounded my-3"
          />
          <summary></summary>
          <details className="small text-start">
            <p>
              With pastel shades, neat underlines, and elegant titles, these
              notes turn ordinary lessons into something artistic and motivating
              to read.
            </p>
           
          </details>
           <p>
              Price: <del>$200</del>
              <br />
              Offer Price: <ins>$100</ins>
            </p>
            <button type="button" class="btn btn-primary">
  Buy Now
</button>

          <h3 className="text-warning mt-3">⭐ ⭐ ⭐ ⭐</h3>
        </div>
      </div>
    </div>
    
    </div>
    </div>
  );
}



}


export default Web;