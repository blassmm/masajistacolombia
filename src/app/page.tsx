import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Header />
      <Main />
    </div>
  );
}
