import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Grid, IconButton, ImageList, ImageListItem, List, ListItem, ListItemText } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import UndoIcon from '@mui/icons-material/Undo';
import { Box } from '@mui/system';


const MAX_ALPHABET_LENGTH = 26;
const MAX_SEQUENCE = 13;

const alphabets = [
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y',
  'z'
];

function GenerateCaesars(str: string): string[] {
  let caesars: string[] = [];

  for (let inc = 0; inc < MAX_ALPHABET_LENGTH; ++inc) {
    let caesar = Array.from(str)
      .map((ch) => ch.charCodeAt(0) + inc)
      .map((ch) => 'z'.charCodeAt(0) < ch ? ch - MAX_ALPHABET_LENGTH : ch);
    caesars.push(String.fromCharCode(...caesar));
  }

  console.log(caesars);
  return caesars;
}

function App() {
  let [sequence, setSequence] = useState<string[]>([]);
  let [caesars, setCaesars] = useState<string[]>(Array(26).fill('empty'));

  useEffect(() => {
    setCaesars(GenerateCaesars(sequence.join('')));
  }, [sequence]);

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
                  caesars.slice(0, MAX_ALPHABET_LENGTH / 2).map((str, index) =>
                    <ListItem key={`${index}:${str}`}>
                      <ListItemText> {str} </ListItemText>
                    </ListItem>
                  )
                }
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                {
                  caesars.slice(MAX_ALPHABET_LENGTH / 2, MAX_ALPHABET_LENGTH).map((str, index) =>
                    <ListItem key={`${index}:${str}`}>
                      <ListItemText> {str} </ListItemText>
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
