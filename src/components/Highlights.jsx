import img from "../ce2369059521b0f605f529364315839f3d4ea3ac";

function Highlights() {
  return (
    <section className='highlights'>
      <h3>Specials</h3>
      <button>Online Menu</button>
      <main className='cards' id='card1'>
        <img src={img} alt=''></img>
        <div className='text-container'>
          <span>
            <h2>Greek salad</h2>
            <h3>$12.99</h3>
          </span>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <h3>Order a delivery</h3>
        </div>
      </main>
      <main className='cards' id='card2'>
        <img src={img} alt=''></img>
        <div className='text-container'>
          <span>
            <h2>Greek salad</h2>
            <h3>$12.99</h3>
          </span>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <h3>Order a delivery</h3>
        </div>
      </main>
      <main className='cards' id='card3'>
        <img src={img} alt=''></img>
        <div className='text-container'>
          <span>
            <h2>Greek salad</h2>
            <h3>$12.99</h3>
          </span>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <h3>Order a delivery</h3>
        </div>
      </main>
    </section>
  );
}
export default Highlights;
