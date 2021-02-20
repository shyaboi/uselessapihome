// import react usestate and useeffect
import React, { useState, useEffect } from "react";
//importing  components from reacctstrap
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  toggle,
} from "reactstrap";
//import ace editor_---------------------------------------
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
// ace theme imports
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
//END import ace editor_---------------------------------------

// setting a final funtion var
var finalFunction;
// set function for on change to make final function = new val
function onChange(newValue) {
  finalFunction = newValue;
}

// ssetup the editor function for the component
function Editor() {
  //Dropdown Open states--------------------------------------------------------------------------------------------
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownThemeOpen, setDropdownThemeOpen] = useState(false);
  const [dropdownFontOpen, setDropdownFontOpen] = useState(false);
  const [dropdownWrapOpen, setDropdownWrapOpen] = useState(false);
  //END Dropdown Open states--------------------------------------------------------------------------------------------
  
  //Dropdown Selector states--------------------------------------------------------------------------------------------
  const [themeState, setthemeState] = useState('');
  const [ThemeText, setthemeText] = useState('');
  const [fontSize, setfontSize] = useState('');
  const [wrapState, setWrapState] = useState(true);
  const [wrapStateText, setWrapStateText] = useState('');
  //END Dropdown Selector states--------------------------------------------------------------------------------------------
  

  //toggle states--------------------------------------------------------------------------------------------

  // const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleTheme = () => setDropdownThemeOpen((prevState) => !prevState);
  const toggleFontSize = () => setDropdownFontOpen((prevState) => !prevState);
  const toggleWrap = () => setDropdownWrapOpen((prevState) => !prevState);
  // const toggleBasicAuto = () => setDropdownOpen((prevState) => !prevState);
  // const toggleHeight = () => setDropdownOpen((prevState) => !prevState);
  // const toggleLiveAuto = () => setDropdownOpen((prevState) => !prevState);
  // const toggleSnippets = () => setDropdownOpen((prevState) => !prevState);
  //END toggle states--------------------------------------------------------------------------------------------

//Post states--------------------------------------------------------------------------------------------

  const [isLoading, setIsLoading] = useState(false);
  //route state
  let [route, setRoute] = useState("");
  //function statew
  let [funk, setFunk] = useState("");
//END Post states--------------------------------------------------------------------------------------------

//setup use effect
useEffect(() => {
  //if the theme is saved in local storage, then get items and set
  if (localStorage.getItem('currentTheme')) {
   let theme =  localStorage.getItem('currentTheme');
   let themeText =  localStorage.getItem('currentThemeText');
   let fontSizez =  localStorage.getItem('FontSize');
   let wrap =  localStorage.getItem('Wrap');
   if (wrap == 'Enabled') {
     setWrapState(true)
    setWrapStateText('Enabled')
    // else set the states to default settings
   }else{setWrapState(false);setWrapStateText(wrap)}
 
   setthemeState(theme)
   setthemeText(themeText)
   setfontSize(fontSizez)
  }else{
    setthemeState('terminal')
    setthemeText('Termial')
    setfontSize(44)
    setWrapState(true)
    setWrapStateText('Enabled')
  }
},[]);

//setting up the submit function for the post
  const onSubmit = async (event) => {
    // prevent redirect
    event.preventDefault();
    //set the final funtion in state
    setFunk(finalFunction);
    //set the is loading to true
    setIsLoading(true);
    //make a new xmlhttp post
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/u-c/new", true);
    //set headers
    xhr.setRequestHeader("Content-Type", "application/json");
    //send the post
    xhr.send(
      JSON.stringify({
        route: route,
        funktion: finalFunction,
      })
    );
  
    // reset form and loading state
    setIsLoading(false);
    //alert to new route
    alert(`Redirecting you to https://uselessapi.com/u-c-r/${route}`);
    //redirect to new route in window
    window.location.replace(`https://uselessapi.com/u-c-r/${route}`);
   
  };

//change theme funtion
  const changeThemeValue = (e) => {
    //set theme to e.target
    let currentTheme = e.currentTarget.value
    let currentThemeText = e.currentTarget.textContent
    //set theme to state
    setthemeState(currentTheme)
    setthemeText(currentThemeText)
    //set theme to local storage
    localStorage.setItem('currentTheme', currentTheme);
    localStorage.setItem('currentThemeText', currentThemeText);
  }
  const changeFontValue = (e) => {
    //set theme to e.target
    let fontSizez = e.currentTarget.value
    //set theme to state
    setfontSize(fontSizez)
    //set theme to local storage
    localStorage.setItem('FontSize', fontSizez);
  }
  const changeWrapValue = (e) => {
    //set theme to e.target
    let wrap = e.currentTarget.value
    ///if wrap is true
    if (wrap == 1){ 
      //set wrap state to true
      setWrapState(true)
      setWrapStateText('Enabled')
      //save wrap state in local storage
      localStorage.setItem('Wrap', 'Enabled');
    }
    //else set wrap state to false
    else { 
      setWrapState(false)
      setWrapStateText('Disabled')
      localStorage.setItem('Wrap', 'Disabled');

    }
  }


  return (
    <Container className="App">
      <Row>
        <Col id="editor-head">
          <Label for="exampleText">
            <h1>Make your UseLess thing</h1>
          </Label>
        </Col>
      </Row>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">
                Route will be hosted at https://uselessapi.com/u-c-r/{route}
              </Label>
              <Input
                type="route"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                name="route"
                id="route"
                placeholder="my-rad-api"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row fluid id="drop-row">
          <Dropdown isOpen={dropdownThemeOpen} toggle={toggleTheme} >
            <DropdownToggle caret color='info'>{ThemeText}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Pick Your Editor Theme</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='kuroir'>Kuroir</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='github'>GitHub</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='terminal'>Terminal</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='tomorrow'>Tomorrow</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='twilight'>Twilight</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='xcode'>Xcode</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='textmate'>textmate</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='solarized_dark'>Solarized Dark</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='solarized_light'>Solarized Light</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={dropdownFontOpen} toggle={toggleFontSize}>
            <DropdownToggle caret color='info'>{fontSize}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Size in px</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={5}>5</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={10}>10</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={15}>15</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={20}>20</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={25}>25</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={30}>30</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={35}>35</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={40}>40</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={45}>45</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={50}>50</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={55}>55</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={88}>88</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={dropdownWrapOpen} toggle={toggleWrap}>
            <DropdownToggle caret color='info'>Wrap {wrapStateText}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Set text wrap of the editor</DropdownItem>
              <DropdownItem onClick={changeWrapValue} value={1}>Enabled</DropdownItem>
              <DropdownItem onClick={changeWrapValue} value={2}>Disabled</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Row>
        <Row>
          <Col>
            <AceEditor
              height="60vh"
              width="60vw"
              mode="javascript"
              theme={themeState}
              fontSize={parseInt(fontSize)}
              wrapEnabled={wrapState}
              editorProps={{ $blockScrolling: true }}
              value={funk}
              onChange={onChange}
              id="funktion"
              placeholder="response.send('hiworld')"
              type="textarea"
              name="funktion"
              showGutter="true"
            />
          </Col>
        </Row>
        <hr></hr>
        <Row id="submitRow">
          <Col>
            <Button type="submit" color="info">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Editor;
