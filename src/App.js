import './App.css';
import Video from './pages/video.js';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
        likes={10}
        messages={20}
        shares={30} 
        name="Paulo"
        description="Brecker o goleiro"
        music="musica épica 1"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
        likes={56}
        messages={32}
        shares={87} 
        name="Carlos"
        description="Bird"
        music="musica feliz"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
        <Video
        likes={64}
        messages={13}
        shares={64} 
        name="Paula"
        description="Brecker "
        music="musica épica 3"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
        likes={58}
        messages={55}
        shares={5} 
        name="Gustavo"
        description="gato"
        music="Clack your hands"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />

        
      </div>
    </div>
  );
}

export default App;
