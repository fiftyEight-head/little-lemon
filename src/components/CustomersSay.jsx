import testimoImg1 from "../08c5772c481233a30a46aeca552132053604e2a8";

function CustomersSay() {
  return (
    <section className='testimonials-bg'>
      <main className='testimonials'>
        <h1>Testimonials</h1>
        <div className='users' id='card-1'>
          <h2>Rating</h2>
          <img src={testimoImg1} alt='carlos'></img>
          <h3>Name</h3>
          <p>Review text</p>
        </div>
        <div className='users' id='card-2'>
          <h2>Rating</h2>
          <img src={testimoImg1} alt='' />
          <h3>Name</h3>
          <p>Review text</p>
        </div>
        <div className='users' id='card-3'>
          <h2>Rating</h2>
          <img src={testimoImg1} alt='carlos'></img>
          <h3>Name</h3>
          <p>Review text</p>
        </div>
        <div className='users' id='card-4'>
          <h2>Rating</h2>
          <img src={testimoImg1} alt='carlos'></img>
          <h3>Name</h3>
          <p>Review text</p>
        </div>
      </main>
    </section>
  );
}

export default CustomersSay;
