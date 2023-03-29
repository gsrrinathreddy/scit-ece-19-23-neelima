import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.pinimg.com/originals/97/db/de/97dbde827a010379cd4a8286555efbb9.jpg',
    title: 'Reading Technical Blogs',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.ycYv4EadHod7Rz3Ng68kFQHaFj?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Everyday Workout',
    
  },
  {
    img: 'https://th.bing.com/th/id/OIP.LRGAB3L9BeJnvxJNC8cipgHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Playing Badminton',
    
  },
  {
    img: 'https://th.bing.com/th/id/OIP.MoF-ydzROFr_MJgzQNlHxAHaE8?w=297&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Listening to Music',
    
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.DrJMmncZNfKu9wEYb0Eo7AHaEo?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Reading Books',
    
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.TXH8EC5TfKwu77XEhMBWkQHaEJ?w=325&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Dancing',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  
 
  
  
];