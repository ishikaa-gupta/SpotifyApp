const express= require("express");
const cors=require("cors")
const bodyParser=require('body-parser')
const SpotifyWebApi= require('spotify-web-api-node');


const app=express();
app.use(cors());
app.use(bodyParser.json());

app.post('/refresh',(req,res)=>{
  const refreshToken = req.body.refreshToken
  const spotifyApi= new SpotifyWebApi({
        
    redirectUri:'http://localhost:3000',
    clientId: 'a5a426ba49a74f4b897a06201bdf9a8b',
    clientSecret: '2a36e41321f04e4b882c7052990e5536',
    refreshToken 
  })

  spotifyApi.refreshAccessToken().then(data => {
    res.json({
      accessToken: data.body.accessToken,
      expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})  




app.post('/login',(req,res)=>{
    const code=req.body.code;

    const spotifyApi= new SpotifyWebApi({
        
      redirectUri:'http://localhost:3000',
      clientId: 'a5a426ba49a74f4b897a06201bdf9a8b',
      clientSecret: '2a36e41321f04e4b882c7052990e5536' 
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })
})

app.listen(3001, () => {
  console.log(`Server listening on port 3001`);
});