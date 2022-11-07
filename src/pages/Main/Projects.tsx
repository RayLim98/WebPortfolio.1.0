import React from 'react'
import Article from '../../components/core/Section'
import Stack from '../../components/core/Stack'

const title = 'Projects' 

const Projects = () => {
  return (
    <Article id='projects'>
      <h1>
        {title}
      </h1>
      <Stack 
        flexGrow={1} 
        justifyContent='center'
        alignItems='center'
      >
        <Stack>
          Image here
        </Stack>
        <Stack>
          <p>
            Hello  I'm raymond
          </p>
        </Stack>
        <Stack>
          Resume
        </Stack>
      </Stack>
    </Article>
  )
}

export default Projects