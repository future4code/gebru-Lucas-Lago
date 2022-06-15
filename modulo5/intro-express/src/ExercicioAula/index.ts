// import express from 'express';
// import cors from 'cors';
// import {Request, Response} from 'express';
// import { users } from './data';

// const app = express()
// app.use(express.json())
// app.use(cors())

// app.get('/', (req:Request, res: Response )=>{
//   res.status(200).send("Deu Certo!")
// })

// app.post('/cadastro', (req: Request, res: Response) => {
//   console.log('body: ',req.body)
//   console.log('query:',req.query)
//   console.log('headers:',req.headers)

//   res.status(200).send("Usuário cadastrado com sucesso!")
// })

// // Exercício Aula

// app.get('/playlists', (req: Request, res: Response) => {
  
//   try{
//     const listaUsuarios = users;

//     const userPlaylist = listaUsuarios.map((cadaUsuario) => {
//       return cadaUsuario.playlists
//     })

//     const resultado = userPlaylist.flat(1)

//     res.status(200).send(resultado)
//   }
//   catch(error){
//     res.status(400).end("Playlists não encontradas!")
//   }
// })


// app.get('/tracks', (req: Request, res: Response) => {
//   try{

//     console.log(req.query)

//     const playlistId = req.query.id
//     let playTracks: {}[]= []

//     for(let element of users){
//       for(let playlist of element.playlists){
//         if(playlist.id === playlistId){
//           playTracks.push(playlist.tracks)
//         }
//       }
//     }
//     res.status(200).send(playTracks)

//   }catch(error){

//     res.status(400).end("id não encontradas!")

//   }
// })


// app.delete('playlist/:id', (req: Request, res: Response) => {
//   try{

//     const id = req.params.id;

//     for(let element of users){
//       let index = element.playlists.findIndex((playlist) => playlist.id === id)

//       if(index > -1){
//         element.playlists.splice(index, 1)
//       }
//     }

//     res.status(200).send("playlist deletada")
//   }catch(error){
//     res.status(400).end("id não encontradas!")
//   }
// })


// app. delete('/track', (req: Request, res: Response) => {
//   try{

//     const trackId = req.query.trackId;
//     const playlistId = req.query.plailistId;
//     let newPlaylist

//     for(let element of users){
//       for(let playlist of element.playlists){
//         if(playlist.id === playlistId){
//           let index = playlist.tracks.findIndex((track) => {track.id === trackId})

//           newPlaylist = playlist

//           if(index > -1){
//             playlist.tracks.splice(index, 1)
//           }
//         }
//       }
//     }
//   res.status(200).send(newPlaylist)
// }catch(error){
//   res.status(400).end("id não encontradas!")
// })


// app.listen(3003, () => {
//   console.log('Servidor de pé')
// })

// // import { AddressInfo } from "net";

// // const app = express();
// // app.use(express.json());

// // const server = app.listen(process.env.PORT || 3003, () => {
// //   if (server) {
// //     const address = server.address() as AddressInfo;
// //     console.log(`Server is running in http://localhost:${address.port}`);
// //   } else {
// //     console.error(`Failure upon starting server.`);
// //   }
// // });;