const jsonServer=require('json-server')

const appointServer=jsonServer.create()

const cors=require('cors')

appointServer.use(cors())

const middleware=jsonServer.defaults()

appointServer.use(middleware)

const router=jsonServer.router('db.json')

appointServer.use(router)

const PORT=8006

appointServer.listen(PORT,()=>{
    console.log(`_________ Server starts at port.....${PORT}`);
})
