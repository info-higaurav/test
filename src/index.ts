import app from './app/app'
import adminRoutes from './app/routes/admin.reoutes'
import userRoutes from './app/routes/user.routes'

app.use('/',userRoutes)
app.use('/admin', adminRoutes)

app.listen(3000,()=>{
    console.log('Server Status is OK')
})