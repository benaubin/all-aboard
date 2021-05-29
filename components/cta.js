import { Box, Heading, Text, Button } from "theme-ui"

const buttonSX = {
  background: '#e28a89',
  color: 'black',
  minWidth: [5, 8],
  border: 'none',
  m: 3,
  p: 3,
}

const CTA = () => (
  <Box sx={{
    textAlign: 'center',
    m: 5
  }}>
    <Heading sx={{fontSize: 7}}>Apply Now</Heading>
    <Button sx={buttonSX} as="a" href="/api/sign-in-slack" target="_blank">
      <Heading sx={{mb: [1, 3]}}>Hacker Zephyr</Heading>
      <Box sx={{display: 'flex'}}>
        <Text sx={{textTransform: 'uppercase'}}><Text sx={{fontWeight: 'bold'}}>0¢</Text> Fare</Text>
        <Text>|</Text>
        <Text>One-Way Hacker</Text>
      </Box>
    </Button>
    <Text as="p" sx={{fontStyle: 'italic'}}>Open until July 12th, 2021</Text>
  </Box>
)

export default CTA