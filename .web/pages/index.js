/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, set_val } from "/utils/state"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import { DebounceInput } from "react-debounce-input"
import { Input } from "@chakra-ui/react"
import NextHead from "next/head"



export function Debounceinput_dce3472e8c5442c55f0ff4ef86c1dbae () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_c1fe93b939c866e1de40fb642568d5e0 = useCallback((_e0) => addEvents([Event("state.state.set_question", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={300} element={Input} onChange={on_change_c1fe93b939c866e1de40fb642568d5e0} placeholder={`Ask a question`} sx={{"borderWidth": "1px", "padding": "1em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"}} value={state__state.question}/>
  )
}

export function Box_4a0eebe5d2d748cad07686a4a318c137 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <RadixThemesBox>
  {state__state.chat_history.map((messages, index_0c57d0adc1d0544240397a1964af24ce) => (
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}} key={index_0c57d0adc1d0544240397a1964af24ce}>
  <RadixThemesBox css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "background": "#F5EFFE", "marginLeft": "20%"}}>
  <RadixThemesText as={`p`} css={{"textAlign": "right"}}>
  {messages.at(0)}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "background": "#DEEAFD", "marginRight": "20%"}}>
  <RadixThemesText as={`p`} css={{"textAlign": "left"}}>
  {messages.at(1)}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
))}
</RadixThemesBox>
  )
}

export function Button_99a5cd492a40f92cd4e437cbe2852d8d () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_f4ecaeca7ac4803e870637fe18cb1eea = useCallback((_e) => addEvents([Event("state.state.answer", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton css={{"backgroundColor": "#CEFFEE", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"}} onClick={on_click_f4ecaeca7ac4803e870637fe18cb1eea}>
  {`Ask`}
</RadixThemesButton>
  )
}

export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesContainer>
  <Box_4a0eebe5d2d748cad07686a4a318c137/>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Debounceinput_dce3472e8c5442c55f0ff4ef86c1dbae/>
  <Button_99a5cd492a40f92cd4e437cbe2852d8d/>
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
