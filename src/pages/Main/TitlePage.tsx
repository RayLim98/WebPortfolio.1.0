import Section from '../../components/core/Section'
import Stack from '../../components/core/Stack'

const TitlePage = () => {
  return (
    <Section height={90} id={'titlepage'}>
      <Stack height='100%'>
        <Stack flexGrow={2} alignItems={'center'} justifyItems={'center'}>
          <Stack justifyContent='center'>
            <h1 style={{ textAlign: 'center'}}>
              Hello and welcome to my Web Portfolio
            </h1>
          </Stack>
          <Stack>
            image here
          </Stack>
        </Stack>
        <Stack alignItems={'center'} justifyContent={'center'}>
          <h1>
            Raymond Lim
          </h1>
        </Stack>
      </Stack>
    </Section>
  )
}

export default TitlePage
