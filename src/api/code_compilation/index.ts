import api from '..'
import { CodeCompilation, CodeCompilationResult } from './types'

export const compileCodeFn = async (codeCompilation: CodeCompilation) => {
  const response = await api.post<CodeCompilationResult>('/compile-code', codeCompilation)
  return response.data
}
