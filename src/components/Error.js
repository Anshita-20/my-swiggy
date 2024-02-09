import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log('Error',err);
return (
    <>
    <h1>Opps!! Something went wrong.</h1>
    <h2>{err.data}</h2>
    <h3>{err.status} : {err.statusText}</h3>
    </>
)
}
export default Error;