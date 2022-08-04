import Link from "next/link"
import GitHubButton from 'react-github-btn'
import { Container } from "../Container";

const pages = [
  {
    name: "Docs",
    href: "https://nearform.github.io/lyra",
    external: true
  },
  {
    name: "Benchmarks",
    href: "/benchmarks",
  },
  {
    name: "Contribute",
    href: "/contribute",
  }
];

export function NavBar() {
  return (
    <div className="w-full backdrop-blur-sm fixed z-20">
      <Container>
        <div className="flex justify-between py-6 m-auto">
          <div className="font-bold text-3xl">
            <Link href='/' passHref>
              <a>
                ✨ Lyra
              </a>
            </Link>
          </div>

          <div className="flex items-center">
            {
              pages.map(page => (
                <Link href={page.href} passHref key={page.href}>
                  <a className="hover:text-slate-300 mr-4">
                    {page.name}
                  </a>
                </Link>
              ))
            }
          </div>
        </div>
      </Container>
    </div>
  )
}