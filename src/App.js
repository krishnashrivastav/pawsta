import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';
import Modal from '@mui/material/Modal';
import { Box, Button, makeStyles, Typography } from '@mui/material';

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: '${top}%',
//     left: '${left}%',
//     transform: 'translate(-${top}%, -${left}%)',
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     },
// }));

//From Dumy Code:::
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [modalStyle] = useState(getModalStyle);
  // const classes = useStyles();

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id : doc.id,
        post : doc.data()
      })));
    })
  }, []);

  return (
    <div className="app">

    <Modal
      open={open}
      onClose={handleClose} 
    >

    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>

      {/* <div style={modalStyle} className={classes.paper}>
        <h2>I am a Modal</h2>
      </div> */}
    </Modal>  

    <div className="app__header">
      <img 
        className='app__headerImage'
        src='pawsta logo 1.png'
        alt=''      
      />
    </div>

    <Button onClick={() => setOpen(true)}>
      Sign Up
    </Button>

      { 
        posts.map(({id, post}) => (
          <Post key ={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

      {/* <Post username='lucylife' caption='Heyyyy, Lucy here ;)' imageUrl='https://www.purina.com.au/-/media/project/purina/main/breeds/puppies/puppy-cocker-spaniel.jpg'/>
      <Post username='tom_thecat' caption='Heyyyy, Tom here ;)' imageUrl='https://s.w-x.co/in-cat_in_glasses.jpg'/>
      <Post username='max_' caption='Heyyyy, Max here ;)' imageUrl='https://www.cnn.com/interactive/2021/12/world/two-dogs-catching-treats-cnnphotos/media/images/s_7F29DB66001B627FB4116B1739A280DEF61638AA9E0A9DBFC611A65816DB3720_1639757371977_01-191013_Stargardt_Fero_54-1.jpg'/>
      <Post username='jerry_themouse' caption='Heyyyy, Jerry here ;)' imageUrl='https://www.petassure.com/petassure/file-streams/page/xfSztPIGGwHM4jHr00N2u5tips-on-common-hamster-ailments.jpg.jpg'/> */}

    </div>
  );
}

export default App;
