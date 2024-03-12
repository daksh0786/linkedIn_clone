import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Home from './components/Home';
import { useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';
// import Home from './Pages/Home'

const router = createBrowserRouter([
{
  path:'/',
  element:<Login/>

},
{
  path:'/home',
  element: <Home />
}

])

function App(props) {

    useEffect(()=>{
        props.getUserAuth()
    },[])


  return (
    <RouterProvider router={router}/>
  );
}

const mapStateToProps = (state) =>{
  return(
    <div></div>
  )
};

const mapDispatchToProps = (dispatch) =>({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
