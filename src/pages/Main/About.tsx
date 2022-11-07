import React from 'react'
import ContentWrapper from '../../components/core/ContentWrapper'
import Section from '../../components/core/Section'
import Stack from '../../components/core/Stack'
import useScreenSize from '../../hooks/useScreenSize'

const title = 'A bit about me...' 
const content = 'LLorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nesciunt odio cumque recusandae totam eligendi aliquid commodi voluptate. Placeat aut consequuntur ipsum, laudantium optio itaque dolores facilis explicabo sint dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nesciunt odio cumque recusandae totam eligendi aliquid commodi voluptate. Placeat aut consequuntur ipsum, laudantium optio itaque dolores facilis explicabo sint dicta?orem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nesciunt odio cumque recusandae totam eligendi aliquid commodi voluptate. Placeat aut consequuntur ipsum, laudantium optio itaque dolores facilis explicabo sint dicta?'
const skillsList = [
  {
    name: 'ReactJs',
    icon: null,
  },
  {
    name: 'React Native',
    icon: null,
  },
  {
    name: 'Python',
    icon: null,
  },
  {
    name: 'Python',
    icon: null,
  },
  {
    name: 'ROS',
    icon: null,
  },
  {
    name: 'C++',
    icon: null,
  },
]

const About = () => {
  const isMobile = useScreenSize('sm', 'down')
  const padding = isMobile? '20px': '80px'
  return (
    <Section 
      id='about'
      direction='column'
      gap={20}
    >
      <h1> About </h1>
      <ContentWrapper 
        gap={70}
        style={{ padding }}
      >
        <Stack direction= {isMobile? 'column': 'row'}>
          <Stack flexBasis='100%'>
            <Stack>
              <h2>Hi there..</h2>
              <p>{content}</p>
            </Stack>
            <Stack>
              Resume here...
            </Stack>
          </Stack>
          <Stack 
            justifyContent='center'
            alignItems='center'
            flexBasis='100%'
          >
            display image here
          </Stack> 
        </Stack>
        <Stack 
          alignItems='center'
          style={{
            padding: '20px'
          }}
        >
          <h2 style={{marginBottom: '20px'}}>What I can do</h2> 
          <Stack 
            gap={50}
            direction='row'
            flexWrap='wrap'
          >
            {
              skillsList.map((item)=> <h4>{item.name}</h4>)
            }
          </Stack>
        </Stack>
      </ContentWrapper>
    </Section>
  )
}

export default About
