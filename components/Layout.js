import NavBar from "./NavBar";

export default function Layout({ children }) {
  //children Layout 사이 전부
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
