import spinny from '../assets/Microprocessor.svg';

function UploadPage() {
  return (
    
    <main className = 'bg-dark'>
        <img src={spinny} className="App-logo" alt="spinny" />
        <p>
          Lets Go
        </p>
		<p className='lead'>bootstrap</p>
        <a
          className="App-link"
          href="https://github.com/Who7F"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
		 
        </a>
    </main>
    
  );
}

export default UploadPage;