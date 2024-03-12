import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre Mim:</Title>
    <Paragraph>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci cumque
      saepe quis maxime, recusandae sint pariatur nihil quasi quam assumenda
      facere libero deleniti fugiat iure veritatis odio quod! Odio, atque.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=wbarcellosn&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=wbarcellosn&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
