import Image from "next/image";
import { ImGithub, ImTwitter, ImLinkedin2 } from 'react-icons/im';
import { Container } from "../components/Container";
import { core } from '../data/team.json';

function TeamMember(data: typeof core[0]) {
  return (
    <div>
      <div className="relative w-28 h-28">
        <Image
          src={data.image}
          alt={data.name}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className='rounded-full'
        />
      </div>
      <div className="font-bold text-xl mt-4"> {data.name} </div>
      <div className="text-violet-200"> {data.role} </div>
      <div className="flex mt-4">
        {
          data.social.github && (
            <a href={data.social.github} target='_blank' rel="noreferrer" className="mr-4">
              <ImGithub className="h-4 w-4" />
            </a>
          )
        }
        {
          data.social.twitter && (
            <a href={data.social.twitter} target='_blank' rel="noreferrer" className="mr-4">
              <ImTwitter className="h-4 w-4" />
            </a>
          )
        }
        {
          data.social.linkedin && (
            <a href={data.social.linkedin} target='_blank' rel="noreferrer" className="mr-4">
              <ImLinkedin2 className="h-4 w-4" />
            </a>
          )
        }
      </div>
    </div>
  )
}

export default function Contribute() {
  return (
    <Container size="full" className="bg-violet-900">
      <Container size="lg" className="flex flex-col justify-center h-[400px] pt-10">
        <h1 className="text-4xl font-black"> Contribute to Lyra </h1>
        <p> Lyra is open-source and licensed under the Apache 2.0 License. </p>
        <p> Make sure to follow the <a href='https://github.com/nearform/lyra/blob/main/CONTRIBUTING.md' target='_blank' rel="noreferrer" className='text-blue-400 hover:underline'>contributing guidelines</a>. </p>
      </Container>

      <Container size="full" className="bg-violet-700 py-20">
        <Container size="lg">

          <h1 className="text-4xl font-black mb-16"> Core team </h1>

          <div className="grid grid-cols-2 md:grid-cols-3">
            {core.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>

        </Container>
      </Container>
    </Container>
  )
}