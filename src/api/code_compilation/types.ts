export interface CodeCompilation {
  language: string
  code: string
  problemId?: string
}

export interface TestCaseResult {
  passOrFail: boolean
  input: string[]
  output: string
  expectedOutput: string
  exitStatus: number
}

export interface CodeCompilationResult {
  testCaseResults: TestCaseResult[]
}
