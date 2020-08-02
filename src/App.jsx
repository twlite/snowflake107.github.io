import React from 'react';
import logo from './Snowflake.png';
import canvacord from "./canvacord.png";
import ytdl from "./ytdl.png";
import quickmongo from "./quickmongo.png";
import { Card, CardGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import MetaTags from 'react-meta-tags';

function App() {
  return (
    <div className="wrapper">
      <MetaTags>
        <title>Snowflake</title>
        <meta name="description" content="Hello, my name is Snowflake." />
        <meta property="og:title" content="Snowflake" />
        <meta property="og:image" content={logo} />
      </MetaTags>
    </div>
    <div className="container">
      <div className="jumbotron bg-transparent dark text-white mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <img src={logo} className="logo mb-5" alt="logo" draggable="false" />
        </div>
        <h1 className="text-center">Snowflake</h1>
        <p className="text-center">I create random things</p>
        <div className="dropdown-divider"></div>
        <div className="d-flex align-items-center justify-content-center mt-4">
          <Button variant="info" className="rounded mb-3 mr-3" href="https://discord.gg/2SUybzb" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} /> Discord
          </Button>
          <Button variant="danger" className="rounded mb-3 mr-3" href="https://www.youtube.com/channel/UCvklmpoAZntoOpr7EyTierA" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} /> YouTube
          </Button>
          <Button variant="secondary" className="rounded mb-3 mr-3" href="https://github.com/Snowflake107" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </Button>
        </div>
      </div>
      <div className="jumbotron bg-transparent dark text-white">
        <h2 className="text-white mb-3">My Projects</h2>
        <CardGroup>
          
          <Card className="bg-dark text-white mr-3">
            <Card.Img variant="top" src={ytdl} />
            <Card.Body>
              <Card.Title>Discord YTDL Core</Card.Title>
              <Card.Text>
                YTDL wrapper for discord bots with custom FFmpeg args support.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info" href="https://npmjs.com/package/discord-ytdl-core" target="_blank" rel="noopener noreferrer">View on NPM</Button>
            </Card.Footer>
          </Card>

          <Card className="bg-dark text-white mr-3">
            <Card.Img variant="top" src={canvacord} />
            <Card.Body>
              <Card.Title>Canvacord</Card.Title>
              <Card.Text>
                Simple and easy to use wrapper for node-canvas.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info" href="https://npmjs.com/package/canvacord" target="_blank" rel="noopener noreferrer">View on NPM</Button>
            </Card.Footer>
          </Card>

          <Card className="bg-dark text-white mr-3">
            <Card.Img variant="top" src={quickmongo} />
            <Card.Body>
              <Card.Title>QuickMongo</Card.Title>
              <Card.Text>
                Quick mongodb wrapper for beginners.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info" href="https://npmjs.com/package/quickmongo" target="_blank" rel="noopener noreferrer">View on NPM</Button>
            </Card.Footer>
          </Card>

        </CardGroup>
      </div>
    </div>
  );
}

export default App;
