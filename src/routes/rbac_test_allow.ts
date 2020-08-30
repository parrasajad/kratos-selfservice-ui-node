
import { Request, Response } from 'express'
import { newEnforcer } from 'casbin'; 


export default async(req: Request, res: Response) => {
  let enforcer = await newEnforcer('basic_model.conf', 'basic_policy.csv')

  const sub = 'alice'; // the user that wants to access a resource.
  const obj = 'data1'; // the resource that is going to be accessed.
  const act = 'read'; // the operation that the user performs on the resource.

  const allowed = await enforcer.enforce(sub, obj, act);
  if (allowed) {
    res.render('allowed', { })
  } else {
    res.render('not_allowed', {})
  }  

}

