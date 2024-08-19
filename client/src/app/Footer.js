import Link from "next/link";

export default function footer() {

  return (
    <div className="footer flex justify-between">
          <div className="foots">
          <Link href="/">Home</Link>
          <Link href="/trips">Trips</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/meals">Meals</Link>
          <Link href="/news">News</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          </div>
          <img src="/images/icons.png" alt="Icons" className="horizontal-image"/>
        </div>
  );
}
