import js from "../assets/language-js.png"
import python from "../assets/language-python.png"
import cpuls from "../assets/language-cpp.png"
import java from "../assets/language-java.png"
import php from "../assets/language-php.png"
import powershell from "../assets/language-powershell.png"
import typescript from "../assets/language-ts.png"
import c from "../assets/language-cs.png"

import html from "../assets/language-html.png"
import json from "../assets/language-json.png"
import markdowm from "../assets/language-markdown.png"
import yaml from "../assets/language-yaml.png"
const Codelanguage = () => {
  return (
    <div className="bg-dark-bg text-white pt-24">
      <div className="flex flex-col justify-around px-10 md:flex-row md:justify-around  md:px-24">
    {/* First Div - 30% Width */}
    <div className="md:w-1/3 ">
      <p className="text-3xl font-semibold mb-5">Code in any language</p>
      <p className="text-gray-400">
        VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.
      </p>
    </div>
  
    {/* Second Div - Remaining Width */}
    <div className="grid grid-cols-3 gap-6 md:ml-[100px] md:grid-cols-4 mt-5 md:w-2/3">
      <div className="flex items-center">
        <img src={js} alt="JavaScript" height={40} width={40} />
        <p>JavaScript</p>
      </div>
      <div className="flex items-center">
        <img src={python} alt="Python" height={40} width={40} />
        <p>Python</p>
      </div>
      <div className="flex items-center">
        <img src={cpuls} alt="C++" height={40} width={40} />
        <p>C++</p>
      </div>
      <div className="flex items-center">
        <img src={java} alt="Java" height={40} width={40} />
        <p>Java</p>
      </div>
      <div className="flex items-center">
        <img src={php} alt="PHP" height={40} width={40} />
        <p>PHP</p>
      </div>
      <div className="flex items-center">
        <img src={powershell} alt="Powershell" height={40} width={40} />
        <p>Powershell</p>
      </div>
      <div className="flex items-center">
        <img src={typescript} alt="TypeScript" height={40} width={40} />
        <p>TypeScript</p>
      </div>
      <div className="flex items-center">
        <img src={c} alt="C#" height={40} width={40} />
        <p>C#</p>
      </div>
      <div className="flex items-center">
        <img src={html} alt="HTML" height={40} width={40} />
        <p>HTML</p>
      </div>
      <div className="flex items-center">
        <img src={json} alt="JSON" height={40} width={40} />
        <p>JSON</p>
      </div>
      <div className="flex items-center">
        <img src={markdowm} alt="Markdown" height={40} width={40} />
        <p>Markdown</p>
      </div>
      <div className="flex items-center">
        <img src={yaml} alt="YAML" height={40} width={40} />
        <p>YAML</p>
      </div>
    </div>
  </div></div>
  )
}

export default Codelanguage