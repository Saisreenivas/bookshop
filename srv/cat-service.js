const cds = require('@sap/cds')
module.exports = async function (){

  const db = await cds.connect.to('db') // connect to database service
  const { Books } = db.entities         // get reflected definitions

  // Add some discount for overstocked books
    this.after ('READ','Books', each => {
        if (each.stock > 111)  each.title += ` -- 11% discount!`
    })


  // Reduce stock of ordered books if available stock suffices
  this.before ('CREATE', 'Orders', async req => {
    // const {book,amount} = req.data
    const tx = cds.transaction(req), order = req.data;
    if(order.Items){
        const affectedRows = await tx.run(order.Items.map(item=>
            UPDATE(Books) .where({ID:item.book_ID})
                .and(`stock >=`, item.amount)
                .set(`stock -=`, item.amount)
            )
        )
        if (affectedRows.some(row => !row)) req.error(409, 'Sold out, sorry')     
    }
  })

}