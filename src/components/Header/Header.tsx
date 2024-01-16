import { routes } from "@/routes/routes";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <nav>
            {routes.map(({ id, to, title }) => {
              return (
                <Link key={id} href={to}>
                  {title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
