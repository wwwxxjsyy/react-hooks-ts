import { useHistory } from 'react-router-dom';
import { useContext, useEffect } from "react"
import { CountContext } from "../../routes/index"

const Login = () => {
    // const { dispatch, state } = useContext(CountContext)

    let history = useHistory();

    const goHome = () => {
        // dispatch({ type: 'login' })
    }
    // useEffect(() => {
    //     if (state.isLogin) {
    //         history.push("/home")
    //     }
    // }, [state.isLogin])
    return <div>
        <div onClick={goHome}> 登陆</div>
        {/* <div onClick={() => dispatch({ type: 'add' })}>Add</div> */}
    </div>
}

export default Login