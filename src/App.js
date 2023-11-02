import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <header className='menu p-3'>
        <h3>Company name</h3>
        <nav>
          <a href="#" className="text-dark">Features</a>
          <a href="#" className="text-dark">Enterprise</a>
          <a href="#" className="text-dark">Support</a>
          <a href="#" className="text-dark">Pricing</a>
        </nav>
        <a href="#" className="btn btn-outline-primary text-primary bg-light">Sign up</a>
      </header>
      <section className='pt-5'>
        <h1 className='mt-5 text-center'>Pricing</h1>
        <p className='text-center'>Quickly build an effective pricing table for your potential customers with this <br />
          Bootstrap example. It's built with default Bootstrap components and utilities with <br />
          little customization.</p>
        <div className='mt-5 mb-5 all'>
          <div className='free mr-3'>
            <div className='textFree'>Free</div>
            <div>
              <h2 className='text-center pt-3'>$0 <span className='mo'>/ mo</span></h2>
              <p className='text-center'>10 users included <br />
                2 GB of storage <br />
                Email support <br />
                Help center access</p>
              <button className='signUp btn btn-light btn-outline-primary text-primary'>
                <a href='' className='btnA'> Sign up for free </a>
              </button>
            </div>
          </div>
          <div className='free mr-3'>
            <div className='textFree'>Pro</div>
            <div>
              <h2 className='text-center pt-3'>$15 <span className='mo'>/ mo</span></h2>
              <p className='text-center'>20 users included <br />
                10 GB of storage <br />
                Priority email support <br />
                Help center access</p>
              <button className='btn btn-primary text-light'>
                <a href='' className='btnB'>Get started</a>
              </button>
            </div>
          </div>
          <div className='free mr-3'>
            <div className='textFreeB'>Enterprise</div>
            <div>
              <h2 className='text-center pt-3'>$29 <span className='mo'>/ mo</span></h2>
              <p className='text-center'>30 users included <br />
                15 GB of storage <br />
                Phone and email support <br />
                Help center access</p>
              <button className='btn btn-primary text-light'>
                <a href='' className='btnC'>Contact us</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className='pb-5'>
        <hr />
        <div className="first">
          <p>© 2017-2018</p> <br /> <br /><br /><br /><br /><br />
        </div>
        <div className="second">
          <p className='p'>Features</p>
          <a href="#" className='footerA'>Cool stuff</a> <br />
          <a href="#" className='footerA'>Random feature</a> <br />
          <a href="#" className='footerA'>Team feature</a> <br />
          <a href="#" className='footerA'>Stuff for developers</a> <br />
          <a href="#" className='footerA'>Another one</a> <br />
          <a href="#" className='footerA'>Last time</a>
        </div>
        <div className="second">
          <p className='p'>Resources</p>
          <a href="#" className='footerA'>Resources</a> <br />
          <a href="#" className='footerA'>Resource name</a> <br />
          <a href="#" className='footerA'>Another resource</a> <br />
          <a href="#" className='footerA'>Final resource</a> <br />
          <br /> <br />
        </div>
        <div className="second">
          <p className='p'>About</p>
          <a href="#" className='footerA'>Team</a> <br />
          <a href="#" className='footerA'>Locations</a> <br />
          <a href="#" className='footerA'>Privacy</a> <br />
          <a href="#" className='footerA'>Terms</a> <br />
          <br /> <br />
        </div>
      </footer>
    </div>
  );
}

export default App;
