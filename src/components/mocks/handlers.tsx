// import { HttpResponse, http } from 'msw'
// import { Context } from 'react'

// export const handlers = [
//   http.get('https://jsonplaceholder.typicode.com/users', (req:, res:HttpResponse, ctx:Context) => {
//     return res(
//       ctx.status(200),
//       ctx.json([
//         {
//           name: 'Bruce Wayne',
//         },
//         {
//           name: 'Clark Kent',
//         },
//         {
//           name: 'Princess Diana',
//         },
//       ])
//     )
//   }),
// ]