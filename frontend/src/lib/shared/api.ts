type Send = Promise<{
    error?: string
    success?: string
    user?: { username: string }
  }>
  
  export async function send(form: HTMLFormElement): Send {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { accept: 'application/json' },
    })
    return await response.json()
  }
  
  export async function get(url:string,token:string) {    
    const response = await fetch(url,{
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${token}`
      }
    })
    return response
  }