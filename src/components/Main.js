import img from '../ce2369059521b0f605f529364315839f3d4ea3ac'
import testimoImg1 from '../08c5772c481233a30a46aeca552132053604e2a8'

function Main(){
    return (
        <>
            <div className='wrapper'>
                <section className='hero'>
                    <div className='hero-container'>
                        <img src={img} alt=''/>
                            <button>Reserve a Table</button>
                        <main className='container' >
                            <h2>Little Lemon</h2>
                            <h3>Chicago</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </main>
                    </div>
                </section>
                <section className='highlights'>
                    <h3>Specials</h3>
                    <button>Online Menu</button>
                    <main className='cards' id='card1' >
                        <img src={img} alt=''></img>
                        <div className='text-container'>
                            <span>
                                <h2>Greek salad</h2>
                                <h3>$12.99</h3>
                            </span>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
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
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
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
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            <h3>Order a delivery</h3>
                        </div>
                    </main>
                </section>
                <section className='testimonials-bg'>
                    <main className='testimonials'>

                            <h1>Testimonials</h1>
                            <div className='users' id='card-1'>
                                <h2>Rating</h2>
                                <img src={testimoImg1}alt='carlos' ></img>
                                <h3>Name</h3>
                                <p>Review text</p>
                            </div>
                            <div className='users' id='card-2'>
                                <h2>Rating</h2>
                                <img src={testimoImg1} alt=''/>
                                <h3>Name</h3>
                                <p>Review text</p>
                            </div>
                            <div className='users' id='card-3'>
                                <h2>Rating</h2>
                                <img src={testimoImg1}alt='carlos' ></img>
                                <h3>Name</h3>
                                <p>Review text</p>
                            </div>
                            <div className='users' id='card-4'>
                                <h2>Rating</h2>
                                <img src={testimoImg1}alt='carlos' ></img>
                                <h3>Name</h3>
                                <p>Review text</p>
                            </div>

                    </main>
                </section>
                <section className='about'>
                    <section className='text-section'>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </section>
                    <section>
                        <img src='../ce2369059521b0f605f529364315839f3d4ea3ac.jpg' alt=''/>
                        <img src='../' alt=''/>
                    </section>
                </section>
            </div>
        </>

    )
}
export default Main