import useAuth from "../hooks/useAuth";

const Dashboard = ({ code }) => {
//   const accessToken = useAuth(code);
  return (
    <>
      <div>login success!</div>
      <h2>your code thingy: {code}</h2>
    </>
  );
};

export default Dashboard;
