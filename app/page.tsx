
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<div>
  <div>
<ul className = "bg-red-400">
    

<li><Link href="/">Homepage</Link></li>
<li><Link href="about">about</Link></li>
<li><Link href="contact">contact</Link></li>
<li><Link href="service/">service</Link></li>
<li><Link href="Webdev/">Webdev</Link></li>
</ul>
</div>
</div>

);
}
