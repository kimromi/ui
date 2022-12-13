import './global.css';
import { Header } from '../components/Layouts/Header';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
