/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex } from "@radix-ui/themes"
import { Input } from "@chakra-ui/react"
import { set_val } from "/utils/state"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <RadixThemesContainer>
  <RadixThemesBox>
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}}>
  <RadixThemesBox css={{"textAlign": "right"}}>
  {`What is Reflex?`}
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left"}}>
  {`A way to build web apps in pure Python!`}
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}}>
  <RadixThemesBox css={{"textAlign": "right"}}>
  {`What can I make with it?`}
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left"}}>
  {`Anything from a simple website to a complex web app!`}
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Input placeholder={`Ask a question`}/>
  <RadixThemesButton>
  {`Ask`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
