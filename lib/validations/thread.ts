import * as z from 'zod';

export const ThreadValidation = z.object({
  thread:z.string().nonempty().min(3,{message:'minimum t3 charaters required'}),
  accountId:z.string(),
})

export const CommentValidation = z.object({
    thread:z.string().nonempty().min(3,{message:'minimum t3 charaters required'}),
    accountId:z.string(),
  })