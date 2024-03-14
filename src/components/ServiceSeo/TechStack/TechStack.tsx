import Container from 'ui/Container/Container'
import {
  SectionTechnologies,
  Tech,
  TechnologiesDescription,
  TechnologiesTitle,
  WrapperTechnologies,
  WrapperTechnologiesTitle,
} from './TechStack.style'
import { ITechStack } from 'types/components/service'

// export interface ITech {
//   image: any
// }

// export interface ITechnologiesProps {
//   titleTechnologies: string
//   descriptionTechnologies: string
//   tech: ITech[]
// }

const TechStack: React.FC<ITechStack> = ({ title, description, image }) => {
  return (
    <Container size="lg">
      <SectionTechnologies type="margin" size="lg">
        <WrapperTechnologiesTitle>
          <TechnologiesTitle>
            {title}
            {/* <span className="text-red">Tecnologías</span> que manejamos */}
            {/* <span className="text-red">.</span> */}
          </TechnologiesTitle>
          <TechnologiesDescription>{description}</TechnologiesDescription>
        </WrapperTechnologiesTitle>
        <WrapperTechnologies>
          {/* {tech.map((technology, index) => (
            <Tech key={index}>
              <img src={technology.image} />
            </Tech>
          ))} */}
          <Tech>
            <img src={image} />
          </Tech>
        </WrapperTechnologies>
      </SectionTechnologies>
    </Container>
  )
}

export default TechStack
