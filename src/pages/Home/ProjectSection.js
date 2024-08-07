import React, { useEffect } from 'react'
import styled from 'styled-components'
import Text from '../../components/Text'
import Card from '../../components/Card'
import { GAP } from '../../config/gap'
import ButtonGroup from '../../components/ButtonGroup'
import { PROJECTS } from '../../config/projects'
import { useHistoryWithStorage } from '../../helpers/HistoryHelper'

const ProjectSection = () => {
  const { activeButtonIndex, storeActiveButtonIndex } = useHistoryWithStorage()

  const handleButtonClick = (index) => {
    storeActiveButtonIndex(index)
  }

  useEffect(() => {
    PROJECTS.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  return (
    <ProjectWrapper>
      <Text textStyle='h2'>My work</Text>
      <ButtonGroup
        buttons={['Code', 'Design', 'Awards']}
        activeIndex={activeButtonIndex}
        onButtonClick={handleButtonClick}
      />
      <Cards>
        {activeButtonIndex === 0 &&
          PROJECTS.filter((card) => card.tag === 'code').map((card, index) => (
            <Card
              key={index}
              headline={card.headline}
              image={card.image}
              path={card.path}
            >
              {card.description}
            </Card>
          ))}
        {activeButtonIndex === 1 &&
          PROJECTS.filter((card) => card.tag === 'design').map(
            (card, index) => (
              <Card
                key={index}
                headline={card.headline}
                image={card.image}
                path={card.path}
              >
                {card.description}
              </Card>
            )
          )}
        {activeButtonIndex === 2 &&
          PROJECTS.filter((card) => card.tag === 'award').map((card, index) => (
            <Card
              key={index}
              headline={card.headline}
              image={card.image}
              path={card.path}
            >
              {card.description}
            </Card>
          ))}
      </Cards>
    </ProjectWrapper>
  )
}

export default ProjectSection

const ProjectWrapper = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: ${GAP.s};
  margin-top: ${GAP.s};
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  gap: ${GAP.m};
  align-items: start;
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, min-content);
    gap: ${GAP.s} ${GAP.xs};
  }
`
