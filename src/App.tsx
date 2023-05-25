import { useEffect, useState } from 'react'
import './App.css'
import Editor from '@monaco-editor/react'
import Split from 'react-split'
import useCodeCompilation from './hooks/useCodeCompilation'

const pythonCode = `
import sys

def add(a, b):
    # Write your code here

if __name__ == '__main__':
    a = int(sys.argv[1])
    b = int(sys.argv[2])

    f = add(a, b)
    print(f)
`

const javascriptCode = `
'use strict';

function add(a, b) {
    // Write your code here
}

function main() {
    const a = parseInt(process.argv[2]);
    const b = parseInt(process.argv[3]);
    const r = add(a, b);
    console.log(r)
}
main()
`

function App() {
  const [srcCode, setSrcCode] = useState<string | undefined>(pythonCode)
  const [language, setLanguage] = useState<string>('python')
  const [theme, setTheme] = useState<string>('vs-dark')

  useEffect(() => {
    if (language === 'python') {
      setSrcCode(pythonCode)
    } else {
      setSrcCode(javascriptCode)
    }
  }, [language])

  const { compileCode, data } = useCodeCompilation()

  return (
    <Split className="split">
      <div>
        <h1>Ejercicio 1</h1>
        <p>Sumar dos números</p>
      </div>
      <div style={{ minWidth: '500px' }}>
        <h1>Code Editor</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <label>Language: </label>
            <select
              onChange={(e) => setLanguage(e.target.value)}
              style={{ margin: '10px' }}
              defaultValue="python">
              <option value="python">Python</option>
              <option value="javascript">Javascript</option>
            </select>
          </div>
          <div>
            <label>Theme: </label>
            <select
              onChange={(e) => setTheme(e.target.value)}
              style={{ margin: '10px' }}
              defaultValue="vs-dark">
              <option value="vs-light">Light</option>
              <option value="vs-dark">Dark</option>
            </select>
          </div>
        </div>
        <Editor
          height="50vh"
          language={language}
          value={srcCode}
          width="100%"
          onChange={setSrcCode}
          theme={theme}
          options={{
            automaticLayout: true,
            minimap: { enabled: false }
          }}
        />
        <button onClick={() => compileCode({ code: srcCode || '', language })}>Run code</button>
        <button onClick={() => ({})}>Submit code</button>
        {data?.testCaseResults?.map((testCaseResult, index) => (
          <div key={index}>
            <h3>Output</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p>Test case {index + 1}</p>
              <div>
                <p>Input: {testCaseResult.input}</p>
                <p>Output: {testCaseResult.output}</p>
                <p>Expected: {testCaseResult.expectedOutput}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Split>
  )
}

export default App
