import { useMutation } from '@tanstack/react-query'
import { CodeCompilation } from '../api/code_compilation/types'
import { compileCodeFn } from '../api/code_compilation'

const useCodeCompilation = () => {
  const { mutate: compileCode, data } = useMutation({
    mutationFn: (codeCompilation: CodeCompilation) => compileCodeFn(codeCompilation)
  })

  return {
    compileCode,
    data
  }
}

export default useCodeCompilation
