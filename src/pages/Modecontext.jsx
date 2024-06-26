/* eslint-disable react/prop-types */
import { createContext } from "react";
//import { useNavigate } from "react-router-dom";
export const Modecontext = createContext({
  logindata: {},
});
export const ModecontextProvider = (props) => {
  //const navigate = useNavigate();
  const logindata = JSON.parse(localStorage.getItem("logindata"));
  // console.log(data);

  // const [logindata, setLoginData] = useState({});

  // const userData = () => {
  //   setLoginData(data);
  // };

  // useEffect(() => {
  //   userData();
  // }, []);

  return (
    <Modecontext.Provider value={{ logindata }}>
      {props.children}
    </Modecontext.Provider>
  );
};
