import React from 'react'
import Title from '../component/Title'
import DetailSection from '../component/DetailSection'
import SkillSection from '../component/SkillSection'
import ServiceSection from '../component/ServiceSection'
import react from '../image/react.png'
import fullstack from '../image/fullstack.png'
import spring from '../image/spring.png'
import app from '../image/app.png'

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={'details'} span={'details'} />
      <DetailSection />

      <Title title={'skills'} span={'skills'} />
      <div className="skills-container">
        <h1>Code</h1>
        <SkillSection skill={'JavaScript/ReactJS'} progress={'40%'} />
        <SkillSection skill={'JavaScript/ReactNative'} progress={'10%'} />
        <SkillSection skill={'Java/SpringBoot'} progress={'80%'} />
        <SkillSection skill={'Machine Learning/AI'} progress={'10%'} />
        <SkillSection skill={'Python/Flask'} progress={'70%'} />
        <SkillSection skill={'TypeScript/Angular'} progress={'60%'} />
        <SkillSection skill={'Vi/Bash/LateX'} progress={'90%'} />
      </div>

      <div className="skills-container">
        <h1>Data</h1>
        <SkillSection skill={'LinkedData/SparQL'} progress={'5%'} />
        <SkillSection skill={'noSQL/MongoDB'} progress={'40%'} />
        <SkillSection skill={'SQL/PostgreSql'} progress={'50%'} />
      </div>

      <div className="skills-container">
        <h1>Infra</h1>
        <SkillSection skill={'Git/GitHub/GitLab'} progress={'90%'} />
        <SkillSection skill={'GraphQL/GraphQLPlayground'} progress={'10%'} />
        <SkillSection skill={'AWS/Terraform'} progress={'90%'} />
      </div>

      <Title title={'services'} span={'service'} />
      <div className="services-container">
        <ServiceSection image={fullstack} title={'fullstack'} text={'Flask'} />
        <ServiceSection image={spring} title={'backend'} text={'Python'} />
        <ServiceSection image={react} title={'frontend'} text={'Jinja'} />
        <ServiceSection image={app} title={'mobile'} text={'MobiLoud'} />
      </div>
    </div>
  )
}

export default AboutPage
