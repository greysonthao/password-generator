import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Generator() {
  const [password, setPassword] = React.useState("NEW PASSWORD");
  const [movie, setMovie] = React.useState("");
  const [song, setSong] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [seedPhrase, setSeedPhrase] = React.useState("");

  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }

  function shuffle(word) {
    let arr = word.split("");
    let newArr = arr.filter((char) => char !== " ");
    let n = newArr.length;

    for (let i = 0; i < n - 1; ++i) {
      let j = getRandomInt(n);

      let temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }

    word = newArr.join("");
    return word;
  }

  const generatePassword = () => {
    const movieLetters = shuffle(movie);
    const songLetters = shuffle(song);
    const randomNumber = Math.floor(number * (Math.random() * number));
    setPassword(movieLetters + "!" + songLetters + "%" + randomNumber);
  };

  return (
    <div>
      <Card
        elevation={20}
        sx={{
          padding: "5rem 10rem 5rem 10rem",
          background: "rgba(255, 255, 255, 0.25)",
        }}
      >
        <Stack spacing={2} padding="0 5rem 0 5rem">
          <TextField
            id="outlined-basic"
            label="Favorite movie?"
            variant="outlined"
            onChange={(e) => setMovie(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Favorite song?"
            variant="outlined"
            onChange={(e) => setSong(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Favorite number?"
            variant="outlined"
            onChange={(e) => setNumber(e.target.value)}
          />
          <Typography
            variant="h4"
            color="white"
            sx={{ margin: "2re 2rem 2re 2rem" }}
          >
            {password}
          </Typography>

          <Button
            variant="contained"
            onClick={generatePassword}
            sx={{
              backgroundColor: "#4457CF",
              fontWeight: "bold",
              marginTop: "2rem",
            }}
          >
            Generate
          </Button>
        </Stack>
      </Card>
    </div>
  );
}

export default Generator;
