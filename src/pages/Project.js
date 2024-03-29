import React from 'react'
import { PROJECTS } from '../config/projects'
import ProjectInfo from '../components/ProjectInfo'
import CardText from '../components/CardText'
import styled from 'styled-components'
import { GAP } from '../config/gap'
import Box from '../helpers/Box'

const Project = ({ projectId }) => {
  return (
    <>
      <ProjectInfo
        headline={PROJECTS[projectId].headline}
        img={PROJECTS[projectId].hero}
        tools={PROJECTS[projectId].tools}
        duration={PROJECTS[projectId].duration}
        role={PROJECTS[projectId].role}
        link={PROJECTS[projectId]?.link}
      >
        {PROJECTS[projectId].information}
      </ProjectInfo>
      <InfoWrapper>
        <CardText
          headline={PROJECTS[projectId].firstBlock.headline}
          imageSrc={PROJECTS[projectId].firstBlock.image}
        >
          {PROJECTS[projectId].firstBlock.text}
        </CardText>
        {PROJECTS[projectId].secondBlock !== undefined && (
          <CardText
            headline={PROJECTS[projectId].secondBlock.headline}
            imageSrc={PROJECTS[projectId].secondBlock.image}
            flipped={true}
          >
            {PROJECTS[projectId].secondBlock.text}
          </CardText>
        )}
      </InfoWrapper>
    </>
  )
}

export default Project

const InfoWrapper = styled(Box)`
  display: grid;
  gap: ${GAP.m};
  margin: ${GAP.xl} 0 ${GAP.xl} 0;
`
