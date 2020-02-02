//require
var faunadb = require('faunadb'),
q = faunadb.query
//cliente
const cliente = new faunadb.Client({ secret: 'fnADji7pt6ACE3iZFrOAwxLUNIBbssSu6CbY_iUF'})

const Fauna = {
    data:{
    get(){
        cliente.query(
                // q.Get(q.Ref(q.Collection('walls'), '256201835083203091'))

                q.Paginate(q.Match(q.Ref('indexes/all_walls')))

        ).then(function(response){
            console.log(response)
        })
    },
    save(){
        cliente.query(
            q.Create(
                q.Collection('walls'),
                         {data:
                            {
                                "id": '',
                                "nombre": "Santuario del velo de la nieve",
                                "grito": "desarmar",
                                "ubicacion": "https://vignette.wikia.nocookie.net/elderscrolls/images/0/0f/Santuario_Velo_Map.jpg/revision/latest?cb=20150418151531&path-prefix=es",
                                "linea1": {
                                  "dovah": "Brothi wahlaan qethsegol kulii",
                                  "español": "Brothi construyó esta piedra"
                                },
                                "linea2": {
                                  "dovah": "vahrukt odrav keyn-haal",
                                  "español": "En memoria a Odrav mano de Yunque"
                                },
                                "linea3": {
                                  "dovah": "Wo drun pogaas zin wah",
                                  "español": "Quien trajo mucho honor al"
                                },
                                "linea4": {
                                  "dovah": "Brod Sahqo-strunmah",
                                  "español": "Clan montaña-roja"
                                }
                        }
                    })
         )
        .then(function(response) {
                console.log(response)   
            })
    },
    delete(){
        cliente.query(
            q.Delete(
                q.Ref(
                    q.Collection('test'), '256197182097457684')
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
