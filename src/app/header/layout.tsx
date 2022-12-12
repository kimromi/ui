import { Header } from '../../components/Header';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
