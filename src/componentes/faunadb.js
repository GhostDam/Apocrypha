//require
var faunadb = require('faunadb'),
q = faunadb.query
//cliente
const cliente = new faunadb.Client({ secret: 'fnADji7pt6ACE3iZFrOAwxLUNIBbssSu6CbY_iUF'})//secret got db

const Fauna = {
    data:{
          get(){
              return  cliente.query(
                          q.Map(
                                  q.Paginate(q.Match(q.Index('all_walls'))),
                                  q.Lambda("x", q.Get(q.Var("x")))
                              )
                          )
                          // .then(response => {
                          //     console.log(response);
                          // })
          },
          save(wall){
              return    cliente.query(
                  q.Create(
                      q.Collection('walls'),
                              {data:
                                  {
                                      "nombre": wall.nombre,
                                      "grito": wall.grito,
                                      "ubicacion": "por definir",
                                      "linea1": {
                                        "dovah": wall.l1dovah,
                                        "español": wall.l1español
                                      },
                                      "linea2": {
                                        "dovah": wall.l2dovah,
                                        "español": wall.l2español
                                      },
                                      "linea3": {
                                        "dovah": wall.l3dovah,
                                        "español": wall.l3español
                                      },
                                      "linea4": {
                                        "dovah": wall.l4dovah,
                                        "español": wall.l4español
                                      }
                              }
                                  })
              )
              .then(function(response) {
                      console.log(response)   
                  })
               },
          read(ref){
            return cliente.query(
              q.Get(q.Ref(q.Collection('walls'), ref))
            )
          },
          update(ref, data){
              return cliente.query(
                q.Update(
                  q.Ref(q.Collection('walls'), ref),
                  {
                    data: {
                      "nombre": data.nombre,
                      "grito": data.grito,
                      "ubicacion": "por definir",
                      "linea1": {
                        "dovah": data.l1dovah,
                        "español": data.l1español
                      },
                      "linea2": {
                        "dovah": data.l2dovah,
                        "español": data.l2español
                      },
                      "linea3": {
                        "dovah": data.l3dovah,
                        "español": data.l3español
                      },
                      "linea4": {
                        "dovah": data.l4dovah,
                        "español": data.l4español
                      }
              },
                  },
                )
              )
          },
          delete(ref){
              return cliente.query(
                  q.Delete(
                      q.Ref(
                          q.Collection('walls'), ref)
                          )
              ).then(function(response) {
                  console.log(response)   
              })
          }
    }
}
export default Fauna

    //query crear

    // createP = cliente.query(
    //     q.Create(q.Collection('test'),
    //        {data:{testField: 'testValue'}
    //     })
    // )
    //respuesta del query
    // createP.then(function(response){
    //     console.log(response)
    // })
