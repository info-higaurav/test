import app from './app/app'
import userRoutes from './app/routes/user.routes'

app.use('/',userRoutes)

app.listen(3000,()=>{
    console.log('Server Status is OK')
})