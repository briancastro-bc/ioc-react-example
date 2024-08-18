import { Outlet, useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => navigate('/product/123')}>Product 123</button>
    </nav>
  );
};

const Root = () => {
  return (
    <>
      <Navigation/>
      <Outlet/>
    </>
  );
}

export default Root;