import React from 'react'
import './Allfile.css'
import { Outlet } from 'react-router-dom'

function HtmlContent() {
  return (
    <>
      <p className='p'><span>Hypertext Markup Language (HTML)</span> is the standard markup language for documents designed to be displayed in a web browser.
        It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
      <p className='p'>Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.
        HTML describes the structure of a web page semantically and originally included cues for its appearance.</p>
      <p className="p">Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.
        HTML describes the structure of a web page semantically and originally included cues for its appearance.
        HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.
        HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.
        HTML elements are delineated by tags, written using angle brackets. Tags such as img and input directly introduce content into the page.
        Other tags such as p and p surround and provide information about document text and may include sub-element tags.
        Browsers do not display the HTML tags but use them to interpret the content of the page.</p>
      <p className="p">HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.
        The inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards,
        has encouraged the use of CSS over explicit presentational HTML since 1997.[2] A form of HTML, known as HTML5, is used to display video and audio,
        primarily using the canvas element, together with JavaScript.</p>
      <p className="p">In 1980, physicist Tim Berners-Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents.
        In 1989, Berners-Lee wrote a memo proposing an Internet-based hypertext system.[3] Berners-Lee specified HTML and wrote the browser and server software in late 1990.
        That year, Berners-Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN.
        In his personal notes of 1990, Berners-Lee listed "some of the many areas in which hypertext is used"; an encyclopedia is the first entry.[4]</p>
      <p className="p">The first publicly available description of HTML was a document called "HTML Tags",[5] first mentioned on the Internet by Tim Berners-Lee in late 1991.[6][7]
        It describes 18 elements comprising the initial, relatively simple design of HTML. Except for the hyperlink tag, these were strongly influenced by SGMLguid,
        an in-house Standard Generalized Markup Language (SGML)-based documentation format at CERN. Eleven of these elements still exist in HTML 4.[8]</p>
      <p className="p">HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visible or audible web pages.
        Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS.
        Many of the text elements are mentioned in the 1988 ISO technical report TR 9537 Techniques for using SGML,
        which describes the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system.
        These formatting commands were derived from the commands used by typesetters to manually format documents. However,
        the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects,
        with separate structure and markup. HTML has been progressively moved in this direction with CSS.</p>
      <Outlet />
    </>
  )
}

export default HtmlContent