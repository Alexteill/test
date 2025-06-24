import { Btn } from '@/devlink/Btn';
import { Navbar } from '@/devlink/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Btn text="Click me" link={{ href: "#" }}></Btn>
    </main>
  );
}
