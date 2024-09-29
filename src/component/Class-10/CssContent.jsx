import React from 'react'
import { Outlet } from 'react-router-dom'

function CssContent() {
    return (
        <>
            <p className='p'><span>Cascading Style Sheets (CSS)</span> is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML
                (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]</p>
            <p className='p'>CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts.
                [3] This separation can improve content accessibility, since the content can be written without concern for its presentation;
                provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate.
                css file, which reduces complexity and repetition in the structural content; and enable the.
                css file to be cached to improve the page load speed between the pages that share the file and its formatting.</p>
            <p className='p'>Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods,
                such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices.
                CSS also has rules for alternate formatting if the content is accessed on a mobile device.[4]</p>
            <p className="p">The name cascading comes from the specified priority scheme to determine which declaration applies if more than one declaration of a property match a particular element.
                This cascading priority scheme is predictable.</p>
            <p className="p">The CSS specifications are maintained by the World Wide Web Consortium (W3C).
                Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998).
                The W3C operates a free CSS validation service for CSS documents.[5]</p>
            <p className="p">Before CSS, nearly all presentational attributes of HTML documents were contained within the HTML markup.
                All font colors, background styles, element alignments, borders, and sizes had to be explicitly described, often repeatedly, within the HTML.
                CSS lets authors move much of that information to another file, the style sheet, resulting in considerably simpler HTML.
                And additionally, as more and more devices are able to access responsive web pages, different screen sizes and layouts begin to appear.
                Customizing a website for each device size is costly and increasingly difficult.
                The modular nature of CSS means that styles can be reused in different parts of a site or even across sites, promoting consistency and efficiency.</p>
            <Outlet />
        </>
    )
}

export default CssContent
