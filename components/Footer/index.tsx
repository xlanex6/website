import { Container } from "../Container";

export function Footer() {
  return (
    <Container size="full" className="bg-violet-900">
      <Container className="py-10">
        <div className="text-center">
          Lyra, developed and sponsored by <b>NearForm</b>. <br />
          Licensed under the Apache 2.0 license.
        </div>
      </Container>
    </Container>
  )
}