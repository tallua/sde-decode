import React, { useState } from 'react';
import './App.css';
import { Container, Grid, IconButton, ImageList, ImageListItem, List, ListItem, ListItemText } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import UndoIcon from '@mui/icons-material/Undo';
import { Box } from '@mui/system';


const MAX_SEQUENCE = 13;

const alphabets = [
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y',
  'z'
];

function App() {
  let [sequence, setSequence] = useState<string[]>([]);
  let [anagrams,] = useState<string[]>(Array(26).fill('empty'));

  let filledSequence = sequence.concat(Array(MAX_SEQUENCE - sequence.length).fill('empty'));

  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="md">
          <Box>
            <ImageList
              cols={alphabets.length}
              gap={1}>
              {
                alphabets.map((ch, index) =>
                  <ImageListItem
                    key={`${index}:${ch}`}
                    onClick={() => {
                      if (MAX_SEQUENCE <= sequence.length) {
                        return;
                      }

                      setSequence(sequence.concat(ch));
                    }}>
                    <img
                      src={`letters/${ch}.png`}
                      alt={ch} />
                  </ImageListItem>
                )
              }
            </ImageList>
          </Box>
          <Box>
            <ImageList
              cols={MAX_SEQUENCE}
              gap={1}>
              {
                filledSequence.map((ch, index) =>
                  <ImageListItem
                    key={`${index}:${ch}`}>
                    <img
                      src={`letters/${ch}.png`}
                      alt={ch} />
                  </ImageListItem>
                )
              }
            </ImageList>
          </Box>
          <Grid container justifyContent="flex-end">
            <IconButton onClick={() => {
              if (sequence.length === 0) {
                return;
              }

              setSequence(sequence.slice(0, sequence.length - 1));
            }}>
              <UndoIcon color='info' />
            </IconButton>
            <IconButton onClick={() => setSequence([])}>
              <RestartAltIcon color='info' />
            </IconButton>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <List>
                {
                  anagrams.slice(0, 13).map((str) =>
                    <ListItem key={str}>
                      <ListItemText> str </ListItemText>
                    </ListItem>
                  )
                }
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                {
                  anagrams.slice(13, 26).map((str) =>
                    <ListItem key={str}>
                      <ListItemText> str </ListItemText>
                    </ListItem>
                  )
                }
              </List>
            </Grid>
          </Grid>
        </Container>

      </header>
    </div>
  );
}

export default App;
