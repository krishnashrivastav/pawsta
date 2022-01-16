import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'lucylife',
      caption: 'Heyyyy, Lucy here ;)',
      imageUrl: 'https://www.purina.com.au/-/media/project/purina/main/breeds/puppies/puppy-cocker-spaniel.jpg'
    },
    {
      username: 'lucylife',
      caption: 'Heyyyy, Lucy here ;)',
      imageUrl: 'https://www.purina.com.au/-/media/project/purina/main/breeds/puppies/puppy-cocker-spaniel.jpg'
    }
  ]);
  
  return (
    <div className="App">
      
    <div className="app__header">
      <img 
        className='app__headerImage'
        src='pawsta logo 1.png'
        alt=''      
      />
    </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

      <Post username='lucylife' caption='Heyyyy, Lucy here ;)' imageUrl='https://www.purina.com.au/-/media/project/purina/main/breeds/puppies/puppy-cocker-spaniel.jpg'/>
      <Post username='tom_thecat' caption='Heyyyy, Tom here ;)' imageUrl='https://s.w-x.co/in-cat_in_glasses.jpg'/>
      <Post username='max_' caption='Heyyyy, Max here ;)' imageUrl='https://www.cnn.com/interactive/2021/12/world/two-dogs-catching-treats-cnnphotos/media/images/s_7F29DB66001B627FB4116B1739A280DEF61638AA9E0A9DBFC611A65816DB3720_1639757371977_01-191013_Stargardt_Fero_54-1.jpg'/>
      <Post username='jerry_themouse' caption='Heyyyy, Jerry here ;)' imageUrl='https://www.petassure.com/petassure/file-streams/page/xfSztPIGGwHM4jHr00N2u5tips-on-common-hamster-ailments.jpg.jpg'/>

    </div>
  );
}

export default App;
