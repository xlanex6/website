import { Container } from "../components/Container";
import { LyraDemo } from "../components/Demo";

export default function Demo() {
  return (
    <Container size="full" className='bg-violet-900'>
      <div className="h-[400px] pt-10">
        <Container size="lg" className="flex flex-col justify-center h-full">
          <h1 className="text-4xl font-black"> Try Lyra </h1>
          <p>Type a search term to perform a full-text search on a dataset of 37,859 historical events.</p>
        </Container>
      </div>

      <Container size="full" className="bg-violet-600 py-20">
        <Container size="lg" className="min-h-[300px]">
          <LyraDemo />
        </Container>
      </Container>
    </Container>
  )
}