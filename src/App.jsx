
import './App.css'
import Home from './components/Home'

function App() {


  return (
    <>
    <main className="w-full max-h-screen h-screen min-h-screen 
          flex  flex-col relative overflow-hidden 
            bg-[url('https://media-hosting.imagekit.io/5ed7241ad83b4b0b/Light-Pink-Background-Wallpaper%20(1).jpg?Expires=1837694497&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PK0dnm-8U9NdN~Io7Q1iLGccVglFHpchagrJ5hpUYp8oVK15FFBYOhSIDyXPIpoM6aJYzjdXEZc7HuJStxbUv8xNnD5igqWwaNjo1j6gM9LSP2FfwwVtPhD8sOsab2fk3QkrbwbbMquNU26RAtKo6HKjO5mQYoLlK-tskSqL8Pe0Htjq1E8iyn6QoChAM7BYlaVSgT1BikytMAaUPl8mj26D~7ispOu3~RazNuiAdJzaDy~ucFB95mlARm-~mzxd1ZJpWLSS~QSk9hg9vcbDVYlG6xFN2sJPCLDRLcpERVqn0RV8K8OkbKxJHOyEDNt2AnFGBt0emLo9yin0DIpgBA__')] bg-cover bg-no-repeat bg-center ">
            <div className="absolute  z-10 inset-0 flex justify-center items-center">
              <Home/>
            </div>
          
         </main>
    </>
  )
}

export default App
